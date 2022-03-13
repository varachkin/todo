import React, {Component} from 'react';
import AddTaskButton from "./components/AddTaskButton/AddTaskButton";

class InputField extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <AddTaskButton handler={this.props.handler} handlerButton={this.props.handlerButton}
                               handlerNum={this.props.handlerNum}/>
            </div>
        );
    }
}

export default InputField;