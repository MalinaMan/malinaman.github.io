
class DynamicLabel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {inputValue: ''};
        this.inputHandler = this.inputHandler.bind(this);
    }

    inputHandler (e) {
        this.setState({inputValue: e.target.value})
    }

    render () {
        var greetingStr = "Hello, " + (this.state.inputValue ? this.state.inputValue : this.props.name) + "!";
        return (<div>
            <input
                type="text"
                onInput={this.inputHandler}
                placeholder='Input text'
            />
            <h2>{greetingStr}</h2>
        </div>);
    }
}

DynamicLabel.defaultProps = {
    name: 'stranger'
};

ReactDOM.render(
    <DynamicLabel/>,
    document.getElementById('root')
);