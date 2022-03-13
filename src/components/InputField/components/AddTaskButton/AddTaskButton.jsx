import React, {Component} from 'react';
import "./AddTaskButton.css"

class AddTaskButton extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="input_block">
                <input type="text" placeholder="Enter future task..." className="input_task"
                       onChange={this.props.handler}/>
                <div className="btn_block">
                    <div>
                        <span>Date: </span><input type="date"/>
                    </div>
                    <div>
                        <span>Hours: </span>
                        <input type="number" className="hours" min={1} max={12} defaultValue={1}
                               onChange={this.props.handlerNum}/>
                    </div>
                    <button type="submit" className="btn" onClick={this.props.handlerButton}>ADD TASK</button>
                </div>

            </div>
        )
    }
}

export default AddTaskButton;