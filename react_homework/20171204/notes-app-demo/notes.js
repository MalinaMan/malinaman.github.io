class Note extends React.Component {
    render() {
        let style = {backgroundColor: this.props.color}
        return(
            <div className="note" style={style}>
                <span className="delete-note" onClick={this.props.onDelete}>x</span>
                {this.props.children}
            </div>
        );
    }
}

class NoteColour extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            color: "#FFFF00"
        };
        this.handleColourSelect = this.handleColourSelect.bind(this);
    }

    handleColourSelect(event) {
        this.props.onColourSelect(event.target.value);
        this.setState({
            color: event.target.value
        });
      }

    render() {
        return(
            <div className="colour-select">
                <input type="color" defaultValue={this.state.color}
                    onInput={this.handleColourSelect} />
            </div>
        );
    }
}

class NoteEditor extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            text: '',
            color: ''
        };

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.handleColourSelect = this.handleColourSelect.bind(this);
    }

    handleColourSelect(value) {
        this.setState({
            color: value
        })
    }

    handleTextChange(event) {
        this.setState({
            text: event.target.value
        })
    }

    handleNoteAdd() {
        let newNote = {
            id: Date.now(),
            text: this.state.text,
            color: this.state.color,
        };

        this.props.onNoteAdd(newNote);
        this.setState({text: ''});

    }

    render() {
        return(
            <div className="note-editor">
                <textarea placeholder="Enter your note here..."
                          rows={4}
                          className="textarea"
                          value={this.state.text}
                          onChange={this.handleTextChange}></textarea>
                <div className="footer-note-editor">
                    <NoteColour onColourSelect={this.handleColourSelect}/>
                    <div><button className="add-button" onClick={this.handleNoteAdd}>Add</button></div>
                </div>
            </div>

        );
    }
}

class NoteSearch extends React.Component {

    constructor(props) {
        super(props);
        this.inputHandler = this.inputHandler.bind(this);
    }

    inputHandler (e) {
        this.props.onNotesSearch(e.target.value);
    }

    render() {
        let onNotesSearch = this.props.onNotesSearch;

        return(
            <div className="notes-search">
                <input type="text" placeholder="Input search substring..."
                        onInput={this.inputHandler}/>
            </div>
        );
    }
}

class NotesGrid extends React.Component {

    componentDidMount() {
        //Masonry initialization
        let elem = document.querySelector('.notes-grid');
        this.msnry = new Masonry( elem, {
            // options
            itemSelector: '.note',
            columnWidth: 200,
            gutter: 10,
        });
    }

    componentDidUpdate(prevProps) {
        if(this.props.notes.length !== prevProps.notes.lenght) {
            this.msnry.reloadItems();
            this.msnry.layout();
        }
    }

    render() {
        let onNoteDelete = this.props.onNoteDelete;

        return(
            <div className="notes-grid">
                {
                    this.props.notes.map(function(note) {
                        return <Note key={note.id}
                                     color={note.color}
                                     onDelete={onNoteDelete.bind(null, note)}>
                                   {note.text}
                                </Note>
                    })
                }
            </div>

        );
    }
}

class NotesApp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            notes: [],
            filterNotes: null
        };

        this.handleNoteAdd = this.handleNoteAdd.bind(this);
        this.handleNoteDelete = this.handleNoteDelete.bind(this);
        this._updateLocalStorage = this._updateLocalStorage.bind(this);
        this.handleNotesSearch = this.handleNotesSearch.bind(this);
    }

    componentDidMount() {
        let localNotes = JSON.parse(localStorage.getItem('notes'));
        if (localNotes) {
            this.setState({
                notes: localNotes,
            });
        }
    }

    componentDidUpdate() {
        this._updateLocalStorage();
    }

    handleNoteAdd(newNote) {
            let newNotes = this.state.notes.slice();
            newNotes.unshift(newNote);
            this.setState({
                notes: newNotes,
            });
        }

    handleNoteDelete(note) {
            let noteId = note.id;
            let newNotes = this.state.notes.filter((note) => {
                return note.id != noteId
            });
            this.setState({
                notes: newNotes,
            });
        }

    _updateLocalStorage() {
        let notes = JSON.stringify(this.state.notes);
        localStorage.setItem('notes', notes);
    }

    handleNotesSearch(searchSubString) {
        if (searchSubString.length) {
            var filterNotes = this.state.notes.filter((note) => {
                return note.text.indexOf(searchSubString) !== -1;
            });
        } else {
            var filterNotes = null;
        }
        this.setState({
            filterNotes: filterNotes
        });
    }

    render(){
        return (
            <div className="notes-app">
                <div className="row1">
                    <NoteEditor onNoteAdd={this.handleNoteAdd} />
                    <NoteSearch onNotesSearch={this.handleNotesSearch}/>
                </div>
                <NotesGrid notes={this.state.filterNotes ? this.state.filterNotes : this.state.notes}
                        onNoteDelete={this.handleNoteDelete}/>
            </div>
        )
    }
}

ReactDOM.render(
    <NotesApp />,
    document.getElementById("mount-point")
);