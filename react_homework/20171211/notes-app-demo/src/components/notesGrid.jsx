import Note from './notesNote.jsx';

export default class NotesGrid extends React.Component {

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