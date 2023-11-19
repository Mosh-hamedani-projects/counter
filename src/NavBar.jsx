const NavBar = ({totalProducts}) => {
  return ( 
    <>
      <nav className="navbar navbar-light bg-light">
        <a href="" className="navbar-brand">Products {totalProducts}</a>
      </nav>
    </>
  );
}
 
export default NavBar;
