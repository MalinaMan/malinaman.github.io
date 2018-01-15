export default class Note extends React.Component {
    render() {
        let style = {backgroundColor: this.props.color};
        return(
            <div className='note' style={style}>
                <span className='delete-note' onClick={this.props.onDelete}>x</span>
                {this.props.children}
            </div>
        );
    }
}