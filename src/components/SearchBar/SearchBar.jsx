import React from "react";

class SearchBar extends React.Component {
  render = () => {
    return (
      <div>
        <input
          list="searchBar"
          type="text"
          placeholder="Search product..."
          onChange={this.props.search}
        />
        {/* <datalist id="searchBar">
        {this.props.options}
        </datalist> */}
        <button onClick={this.props.add}>add</button>
      </div>
    );
  };
}

export default SearchBar;
