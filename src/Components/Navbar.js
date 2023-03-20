import React,{ Component } from 'react'
import {Link} from 'react-router-dom'

class Navbar extends Component{
    render(){
        return(
           <>
            <nav className='light-blue darken-4'>
                <div className='container'>
                    <div className='nav-wrapper'>
                        <Link to="/" className='brand-logo' >
                            CV
                        </Link>

                    </div>
                    
                    <Link to="/" data-target="side-nav" className='sidenav-trigger' >
                        <i className='material-icons'>menu</i>
                    </Link>
                    <ul className='right hide-on-med-and-down'>
                        <li>
                            <Link to="/">
                                <i className='fas fa-home'>&nbsp;Home</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/skills">
                                <i className='fas fa-copy'>&nbsp;Skills</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/experience">
                                <i className='fas fa-badge'>Experience</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/education">
                                <i className='fas fa-graduation-cap'>&nbsp;Education</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects" > 
                                <i className='fas fa-address-card'> &nbsp;Projects</i>
                            </Link>
                        </li>

                    </ul>
                </div>

            </nav>
            <ul className='sidenav' id='side-nav'>
                        <li>
                            <Link to="/">
                                <i className='fas fa-home'>Home</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/skills">
                                <i className='fas fa-copy'>Skills</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/experience">
                                <i className='fas fa-badge'>Experience</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/education">
                                <i className='fas fa-graduation-cap'>Education</i>
                            </Link>
                        </li>
                        <li>
                            <Link to="/projects">
                                <i className='fas fa-address-card'>Projects</i>
                            </Link>
                        </li>

                    </ul>
            </>


     
           
        )
    }
}

export default Navbar