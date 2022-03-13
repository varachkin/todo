import React, {Component} from 'react';
import TaskField from "./components/TaskField/TaskField";
import "./ResultBlock.css"

class ResultBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            undone: this.props.tasks.undoneTasks,
            done: this.props.tasks.doneTasks,
            failed: this.props.tasks.failedTasks,
        };
        this.closeTask = this.closeTask.bind(this);
    }

    closeTask(e) {
        let arrTask = this.state.undone;

        arrTask = arrTask.filter(el => {
            if (el.task.trim() !== e.target.id) {
                return el;
            }
        });
        this.props.changeState(arrTask);
    }

    render() {
        return (
            <div className="result_block">
                <h2>Total hours: {this.props.hours}</h2>
                <div className="result">
                    <TaskField title="Undone" clas="undone" tasks={this.props.tasks.undoneTasks}
                               closeTask={this.closeTask} changeState={this.props.changeState}/>
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