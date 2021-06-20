import React from "react";

class Search extends React.Component {
  constructor(props){
    super(props);
    this.state={
      keyword: ''
    }
  }
  onChange=(e)=>{
    var target = e.target;
    var name = target.name;
    var value = target.value
    this.setState({
      [name] : value
    });
  }
  onSearch =()=>{
    this.props.onSearch(this.state.keyword);
  }
  render() {
    var {keyword} = this.state;
    return (
      <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div className="input-group">
          <input
            name="keyword"
            type="text"
            className="form-control"
            placeholder="Nhap tu khoa...."
            value={keyword}
            onChange={this.onChange}
          />
          <span className="input-group-btn mt-15">
            <button 
                className="btn btn-primary mr-10" 
                type="button"
                onClick={this.onSearch}
               >
              <i className="fas fa-search"></i> Tim
            </button>
          </span>
        </div>
      </div>
    );
  }
}

export default Search;
