import React from 'react';
import './header.css';
import bootstrapLogo from '../../Assets/images/bootstrap-logo.svg'
import { Link, NavLink } from 'react-router-dom'
import ReactLogo from '../../Assets/images/logo192.png';

class Header extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container-fluid">
                    {/* <a className="navbar-brand" href="#">
                        <img src={bootstrapLogo} alt="" width="30" height="24" />
                    </a> */}

                    <Link className="navbar-brand" to="/">
                        Learning React
                        <img src={ReactLogo} alt="" width="30" height="30" />
                    </Link>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                {/* <a className="nav-link active" aria-current="page" href="#">Home</a> */}
                                <NavLink to="/" className="nav-link">Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/react-basic" className="nav-link">Basic</NavLink>
                            </li>

                            <li className="nav-item">
                                {/* <a className="nav-link" href="/VintageHooks">Hooks</a> */}
                                <NavLink to="/react-router" className="nav-link">Router </NavLink>
                            </li>

                            <li className="nav-item">
                                {/* <a className="nav-link" href="#">Forms</a> */}
                                <NavLink to="/react-forms" className="nav-link">Forms</NavLink>
                            </li>

                            <li className="nav-item dropdown">
                                <NavLink to="" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Topics
                                </NavLink>

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                    <li>
                                        <NavLink to="/list-rendering" className="dropdown-item">List Rendering</NavLink>
                                        </li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/react-life-cycle" className="nav-link">React Life Cycle</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/react-http" className="nav-link">React HTTP</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink to="/ract-hooks-page" className="nav-link">React HOOKS</NavLink>
                            </li>

                            <li className="nav-item">
                                <Link to="/cricket-dashboard" className="nav-link">CRICKET</Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/movies-dashboard" className="nav-link">Movies</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav> 
        )
    }
}

export default Header