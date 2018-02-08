import NoteEditor from './notesEditor.jsx';
import NoteSearch from './notesSearch.jsx';
import NotesGrid from './notesGrid.jsx';

export default class NotesApp extends React.Component {

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
                    <NoteSearch onNotesSearch={this.handleNotesSearch} />
                </div>
                <NotesGrid notes={this.state.filterNotes ? this.state.filterNotes : this.state.notes}
                        onNoteDelete={this.handleNoteDelete}/>
            </div>
        )
    }
}