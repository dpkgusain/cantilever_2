import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { SearchContext } from '../context/SearchContext';
import logo from './images/logo.svg'
const Navbar = ({ title }) => {
  const {search,setSearch} = useContext(SearchContext);
  const location = useLocation()
  useEffect(()=> {
    console.log(location.pathname)
  },[location])
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: '#5A9', color: '#FFF'}}>
        <div className="container-fluid">
          <img src={logo} alt='logo' width={50}></img>
          <Link className="navbar-brand" to="/" style={{fontFamily: 'Arial, sans-serif', fontSize: '1.5em'}}>{title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <div className="nav-item">
                <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/" style={{color: location.pathname==='/'? '#FFF':"lightgrey"}}>General</Link></li>
              </div>
              <li className="nav-item"><Link className="nav-link" to="/business" style={{color: location.pathname==='/business'? '#FFF':"lightgrey"}}>Business</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/entertainment" style={{color: location.pathname==='/entertainment'? '#FFF':"lightgrey"}}>Entertainment</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/health" style={{color: location.pathname==='/health'? '#FFF':"lightgrey"}}>Health</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/science" style={{color: location.pathname==='/science'? '#FFF':"lightgrey"}}>Science</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/sports" style={{color: location.pathname==='/sports'? '#FFF':"lightgrey"}}>Sports</Link></li>
              <li className="nav-item"><Link className="nav-link" to="/technology" style={{color: location.pathname==='/technology'? '#FFF':"lightgrey"}}>Technology</Link></li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" value={search} aria-label="Search" onChange={(ev)=>setSearch(ev.target.value)} style={{marginRight: '10px'}}/>
              <button className="btn btn-outline-light" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;