import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search">
        <strong>Search:</strong>
        <input
          type="text"
          name="filter"
          value={this.props.filter}
          onChange={this.props.handleChange}
        />
        {/* <label>
          <strong>Sort:</strong>
          {this.props.sortOptions}
        </label> */}
      </div>
    );
  }
}

export default SearchBar;
