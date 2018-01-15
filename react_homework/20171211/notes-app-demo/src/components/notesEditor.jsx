import NoteColour from './notesColour.jsx';

export default class NoteEditor extends React.Component {

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