export default class NoteSearch extends React.Component {

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