import './index.css';
import InputField from "./components/InputField/InputField";
import ResultBlock from "./components/ResultBlock/ResultBlock";
import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            currentTask: '',
            date: new Date().toLocaleDateString(),
            hours: 0,
            currentHours: 1,
            tasks: {
                undoneTasks: [],
                doneTasks: [],
                failedTasks: [],
            }
        };
        this.createTaskInput = this.createTaskInput.bind(this);
        this.addTask = this.addTask.bind(this);
        this.changeHours = this.changeHours.bind(this);
        this.closeTask = this.closeTask.bind(this);
    }

    closeTask(e) {
        console.log(e);
        let arrTask = this.state.tasks.undoneTasks;
        let hours = this.state.hours;
        arrTask = arrTask.filter(el => {
            if (el.task.trim() !== e.target.id) {
                return el;
            } else {
                hours -= el.hours;
            }
        });

        this.setState({...this.state, tasks: {...this.state.tasks, undoneTasks: arrTask}, hours: hours});
        console.log(this.state)
    }

    createTaskInput(e) {
        this.setState({...this.state, task: e.target.value});

        console.log(this.state);
    }

    changeHours(e) {
        this.setState({...this.state, currentHours: +e.target.value});
    }

    addTask() {
        const stateObj = {...this.state};
        console.log(stateObj);
        if (stateObj.task && stateObj.currentHours > 0) {
            stateObj.tasks.undoneTasks.push({
                task: this.state.task,
                hours: this.state.currentHours
            });
            let hours = this.state.currentHours;
            stateObj.hours += hours;
            stateObj.currentTask = stateObj.task;
            stateObj.currentTask = '';
            this.setState({...stateObj});
            console.log('Стэйт после добавления таски:', this.state)
        }
    }

    render() {
        return (
            <div className="App">
                <h1>TODO LIST</h1>
                <InputField handler={this.createTaskInput} handlerButton={this.addTask} handlerNum={this.changeHours}
                            val={this.state.currentTask}/>
                <ResultBlock tasks={this.state.tasks} hours={this.state.hours} handlerClose={this.closeTask}
                             changeState={this.changeState}/>
            </div>
        )

    }
}

export default App;
