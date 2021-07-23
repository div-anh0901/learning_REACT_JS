import React from "react";

class Sort extends React.Component {
    // constructor(props){
    //     super(props);
      
    // }
    componentWillReceiveProps(nextProps){
    }
    onClick=(sortBy ,sortValue)=>{
       
       this.props.onSort(sortBy,sortValue);
    }
    render() {
        return (

                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="dropdown">
                        <button
                            className="btn btn-primary dropdown-toggle"
                            type="button"
                            id="dropdownMenu1"
                            data-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="true"
                        >
                            Sap xep <i className="fas fa-caret-square-down"></i>
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenu1">
                            <li onClick={()=> this.onClick('name',1)}>
                                <button
                                    className={(this.props.sortBy ==='name' && this.props.sortValue===1) ? 'sort_selected':''} 
                                >
                                    <i className="fas fa-sort-alpha-up-alt"> </i>
                                    Tu a -z
                                </button>
                            </li>
                            <li onClick={()=> this.onClick('name',-1)}>
                                <button 
                                    className={(this.props.sortBy ==='name' && this.props.sortValue===-1) ? 'sort_selected':''} 

                                >
                               <i class="fas fa-sort-alpha-down-alt"></i>
                                    Tu z-a
                                </button>
                            </li>
                            <li role="separator" className="divider"></li>
                            <li onClick={()=> this.onClick('status',1)}>
                                <button
                                    className={(this.props.sortBy ==='status' && this.props.sortValue === 1) ? 'sort_selected':''} 
                                >
                                    Tran Thai kich Hoat
                                </button>
                            </li>
                            <li onClick={()=> this.onClick('status',-1)}>
                                <button 
                                    className={(this.props.sortBy ==='status' && this.props.sortValue === -1) ? 'sort_selected':''} 

                                >
                                    Tran Thai An
                                </button>

                            </li>
                        </ul>
                    </div>
                </div>
        );
    }
}

export default Sort;
