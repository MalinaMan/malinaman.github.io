export default class NoteColour extends React.Component {
    
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