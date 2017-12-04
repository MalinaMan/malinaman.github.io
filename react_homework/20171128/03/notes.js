
class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.state = {result: '', numberA: 0, numberB: 0};
        this.clickHandlerSum            = this.clickHandlerSum.bind(this);
        this.clickHandlerDifference     = this.clickHandlerDifference.bind(this);
        this.clickHandlerMultiplication = this.clickHandlerMultiplication.bind(this);
    }

    clickHandlerSum (e) {
        this.setState({result: +this.state.numberA + +this.state.numberB})
    }
    
    clickHandlerDifference (e) {
        this.setState({result: +this.state.numberA - +this.state.numberB})
    }

    clickHandlerMultiplication (e) {
        this.setState({result: +this.state.numberA * +this.state.numberB})
    }

    render () {
        return (<div>
            <label for="numberA">number A</label><input
                id="numberA"
                type="number"
                value={this.state.numberA}
                onChange={e => this.setState({numberA: e.target.value, result: ''})}
            />
            <br />
            <label for="numberA">number B</label><input
                id="numberB"
                type="number"
                value={this.state.numberB}
                onChange={e => this.setState({numberB: e.target.value, result: ''})}
            />
            <br />
            <button onClick={this.clickHandlerSum}>
                +
            </button>
            <button onClick={this.clickHandlerDifference}>
                -
            </button>
            <button onClick={this.clickHandlerMultiplication}>
                *
            </button>
            <h3>
                Result: {this.state.result}
            </h3>
        </div>);
    }
}

ReactDOM.render(
    <Calculator/>,
    document.getElementById('root')
);