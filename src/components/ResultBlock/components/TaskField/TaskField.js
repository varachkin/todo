import React, {Component} from 'react';
import "./TaskField.css"
import Task from "../Task/Task";

class TaskField extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="task_field">
                <h3>{this.props.title}</h3>
                <ul className="list">
                    {this.props.tasks.map((el, index) => {
                        return (
                            <li className={this.props.clas} key={index}>
                                <Task tasks={el} handlerTask={this.props.handlerClose}
                                      closeTask={this.props.closeTask}/>
                            </li>
                        )
                    })}
                </ul>
            </div>
        );
    }
}

export default TaskField;