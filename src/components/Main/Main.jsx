import React from "react";
import axios from "axios";
// import Button from "../Button/Button.jsx";
import SearchBar from "../SearchBar/SearchBar.jsx";

class Main extends React.Component {
  state = {
    act: 0,
    index: "",
    searchValue: "",
    datas: [],
    apiData: []
  };

  getProducts = async () => {
    const response = await axios.get('https://61c325b69cfb8f0017a3e9ac.mockapi.io/animals');
    this.setState({ apiData: response.data });
    console.log(response.data);
  };

  filterProducts = (products, searchValue) => {
    return products.filter((product) => {
      const lowered = product.name.toLowerCase();
      return lowered.includes(searchValue.toLowerCase());
    });
  };

  searchOptions = () => {
    if (this.state.apiData.length > 0) {
      return (
        this.filterProducts(this.state.apiData, this.state.searchValue).map(product => {
          return <div>product</div>
        })
      )
    }
  };

  searchProduct = (e) => {
    this.setState({ searchValue: e.target.value });
  };

  addProduct = () => {
    let datas = this.state.datas;
    let searchValue = this.state.searchValue;

    datas.push(searchValue);

    this.setState({ datas: datas });

    // return datas.map((data, index) => {
    //   return (
    //     <li key={index}>
    //       {index + 1}. {data}
    //       <button onClick={this.remove(index)}>Remove</button>
    //       <button onClick={this.edit(index)}>Edit</button>
    //     </li>
    //   );
    // });
  };

  componentDidMount = () => {
    this.getProducts()
  }

  render = () => {
    return (
      <div>
        <h1>welcome!</h1>
        <SearchBar search={this.searchProduct} add={this.addProduct} options={this.searchOptions}/>
        {this.state.searchOptions}
        <ol>
          {this.state.datas.map((data, index) => (
            <li key={index}>
              {data}
              {/* <button onClick={this.removeT(index)}>Remove</button>
              <button onClick={this.editT(index)}>Edit</button> */}
              <button>remove</button>
              <button>edit</button>
            </li>
          ))}
        </ol>
      </div>
    );
  };
}

export default Main;
