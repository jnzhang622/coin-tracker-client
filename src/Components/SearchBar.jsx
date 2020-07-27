import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <div className="search">
        <strong>Search:</strong>
        <input type="text" name="filter"
          value={this.props.filter} 
          onChange={this.props.handleChange} />
        <label>
          <strong>Sort:</strong>
          {/* <select onChange={this.props.handleChange} name="sort"> */}
            {this.props.sortOptions}
            {/* <option value="" >None</option>
            <option value="price" >Price</option>
            <option value="price_change_pct" >Price Change %</option> */}
          {/* </select> */}
        </label>
      </div>
    );
  }

}



export default SearchBar;
