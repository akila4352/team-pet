
import NavItems from "../../atoms/Navitems";
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'
function Navbar (){
return(
<div> 
<nav class="navbar navbar-expand-lg bg-body-tertiary ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">DR.pet</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
       
            <NavItems NavItem id={"nav"}  name= {'Home'} path={'/'}/>
            <NavItems NavItem id={"nav"}  name= {'Register'} path={'/register'}/>
            <NavItems NavItem id={"nav"}  name= {'Login'} path={'/login'}/>
            <NavItems NavItem id={"nav"}  name={'Service'} path={'/service'}/>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Pet shop</a></li>
            <li><a class="dropdown-item" href="#">Donation</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Blog</a></li>
          </ul>
        </li>
      </ul>
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    
</div>)
}
export default Navbar;