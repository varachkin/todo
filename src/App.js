import './index.css';
import InputField from "./components/InputField/InputField";
import ResultBlock from "./components/ResultBlock/ResultBlock";
import React, {Component} from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            task: '',
            date: Date.now(),
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
        this.changeState = this.changeState.bind(this);
    }

    changeState(el) {
        console.log(el);
        this.setState({undoneTasks: 1});
        console.log('Стэйт после убаления таски', this.state.tasks.undoneTasks);
    }

    closeTask(e) {
        e.nativeEvent.path.splice(0, 2);
    }

    createTaskInput(e) {
        this.setState({task: e.target.value});
    }

    changeHours(e) {
        this.setState({currentHours: +e.target.value});
    }

    addTask() {
        if (this.state.task && this.state.currentHours > 0) {
            let undoneTasks = this.state.tasks.undoneTasks.push({
                task: this.state.task,
                hours: this.state.currentHours
            });
            this.setState({undoneTasks: undoneTasks});
            let hours = this.state.currentHours;
            this.setState({hours: this.state.hours + hours});
            console.log('Стэйт после добавления таски:', this.state)
        }
    }

    render() {
        return (
            <div className="App">
                <h1>TODO LIST</h1>
                <InputField handler={this.createTaskInput} handlerButton={this.addTask} handlerNum={this.changeHours}/>
                <ResultBlock tasks={this.state.tasks} hours={this.state.hours} handlerClose={this.closeTask}
                             changeState={this.changeState}/>
            </div>
        )

    }
}

export default App;
