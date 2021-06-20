import React from "react";

class TaskForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id : '',
            name: '',
            status: false
        }
    }
    componentWillMount(){
        if(this.props.task){
            this.setState({
                id : this.props.task.id,
                name : this.props.task.name,
                status : this.props.task.status,
            })
        }
    }
    componentWillReceiveProps(nextProps){
        if(nextProps && nextProps.task){
            this.setState({
                id : nextProps.task.id,
                name: nextProps.task.name,
                status: nextProps.task.status
            });
           
        }else if(!nextProps.task){
            this.setState({
                id : '',
                name: '',
                status: false
            })
        }
    }
    onChange=(e)=>{
        var target = e.target;
        var name = target.name;
        var value = target.value;
        if(name === 'status'){
            value = target.value === 'true' ? true : false;
        }
        this.setState({
            [name]: value
        })
    }
    onSubmit=(e)=>{
        e.preventDefault();
       this.props.onSubmit(this.state);
       this.onClear();
       this.onCloseForm();
    }
    onCloseForm = () => {
        this.props.onCloseForm();
    }
    onClear=()=>{
        this.setState({
            name: '',
            status : false
        });
    }
    render() {
        var{id} = this.state;
        return (
            <div>
                <div className="panel panel-warning">
                    <div className=" panel-heading">
                        <h3 className="panel-title">
                            {id !=='' ? 'Cap nhat cong viec' : 'them cong viec'}
                            <i className="fas fa-times-circle text-right"
                                onClick={this.onCloseForm}
                            ></i>
                        </h3>
                    </div>
                    <div className="panel-body">
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Ten : </label>
                            <input type="text"
                                    className="form-control"
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}
                            />
                        </div>
                        <label>Trang Thai : </label>
                        <select 
                            className="form-control" 
                            name="status"
                            value={this.state.status}
                            onChange={this.onChange}
                        >
                            <option value={true}>Kich Hoat</option>
                            <option value={false}>An</option>
                        </select>

                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                <i className="fas fa-plus-square mr-5"></i> Lua Lai
                            </button>
                            <button 
                                type="button" 
                                className="btn btn-danger"
                                onClick={this.onClear}
                            >
                                <i className="fas fa-times"></i> xoa di
                            </button>
                        </div>
                    </form>
                </div>
                </div>
               
            </div>
        );
    }
}

export default TaskForm;
