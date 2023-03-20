import React, { Component } from "react";
import About from "./About";
import Education from "./Education";
import Experience from "./Experience";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Projects from "./Projects";
import Skills from "./Skills";

class Home extends Component{
    render(){
        return(
            <section>
              <Navbar/>
                <div className="container">
                    <div className="row">
                        <div className="col s12 m4 l3 ">
                            <Profile/>
                       </div>
                       <div className="col s12 m8 l9 ">
                        <About/>
                        <Skills/>
                        <Experience/>
                        <Education/>
                        <Projects/>

                       </div>

                    </div>
                </div>
            </section>
         
        )
    }
}
export default Home