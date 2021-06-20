import React from "react";

class TaskItem extends React.Component {
    onUpdateStatus = () => {
        this.props.onUpdateStatus(this.props.task.id)
    }
    onDelete = () => {
        this.props.onDelete(this.props.task.id)
    }
    onUpdate=()=>{
        this.props.onUpdate(this.props.task.id)
    }
    render() {
        var { task, index } = this.props;

        return (
            <tr>
                <td>{index + 1}</td>
                <td>{task.name}</td>
                <td className="text-center">
                    <span
                        className={task.status === true ? 'label label-danger' : 'label label-success'}
                        onClick={this.onUpdateStatus}
                    >
                        {task.status === true ? 'Kich Hoat' : 'An'}
                    </span>
                </td>
                <td className="text-center">
                    <button
                        type="button"
                        className="btn btn-warning"
                        onClick={this.onUpdate}
                    >
                        <i className="fas fa-pencil-ruler"></i> Sua
                    </button>
                    <button
                        type="button"
                        className="btn btn-danger"
                        onClick={this.onDelete}
                    >
                        <i className="fas fa-trash"></i> Xoa
                    </button>
                </td>
            </tr>
        );
    }
}

export default TaskItem;
