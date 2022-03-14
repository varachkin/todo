import React, {Component} from 'react';
import TaskField from "./components/TaskField/TaskField";
import "./ResultBlock.css"

class ResultBlock extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div className="result_block">
                <h2>Total hours: {this.props.hours}</h2>
                <div className="result">
                    <TaskField title="Undone" clas="undone" tasks={this.props.tasks.undoneTasks}
                               handlerClose={this.props.handlerClose} changeState={this.props.changeState}/>
                    <TaskField title="Done" clas="done" tasks={this.props.tasks.doneTasks}
                               handlerClose={this.props.handlerClose}/>
                    <TaskField title="Failed" clas="failed" tasks={this.props.tasks.failedTasks}
                               handlerClose={this.props.handlerClose}/>
                </div>
            </div>
        );
    }
}

export default ResultBlock;