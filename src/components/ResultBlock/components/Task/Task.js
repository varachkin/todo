import React, {Component} from 'react';
import "./Task.css"

class Task extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let idSpan = this.props.tasks.task.trim();
        let text = this.props.tasks.task.trim()[0].toUpperCase() + this.props.tasks.task.slice(1);
        return (
            <div className="task_block">
                <span className="close" onClick={this.props.closeTask} id={idSpan}>x</span>
                <div className="task">
                    <span>{this.props.tasks.hours > 1 ? `${this.props.tasks.hours} hours` : `${this.props.tasks.hours} hour`} </span>
                    {text}
                </div>
                <button className="btn">change</button>
            </div>
        );
    }
}

export default Task;