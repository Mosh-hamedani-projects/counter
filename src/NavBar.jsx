import { Component } from "react";

class NavBar extends Component {
  render() { 
    return (
      <>
        <nav className="navbar navbar-light bg-light">
          <a href="" className="navbar-brand">Products {this.props.totalProducts}</a>
        </nav>
      </>
    );
  }
}
 
export default NavBar;