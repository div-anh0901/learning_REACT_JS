import React from "react";
import Search from "./search";
import Sort from "./sort";

class Control extends React.Component {
    render() {
        return (
            <div className="row mt-15">
                <Search onSearch={this.props.onSearch}/>
                <Sort onSort = {this.props.onSort}
                    sortBy = {this.props.sortBy}
                    sortValue = {this.props.sortValue}

                />
            </div>
        );
    }
}

export default Control;
