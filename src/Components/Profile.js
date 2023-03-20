import { Component } from 'react'
class Profile extends Component{
    render(){
        return(
       <>
         <div className="card">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator" src="./Images/image.jpg" alt=''/>
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">Prarabdha Bhagat<i className="material-icons right">Web devloper</i></span>
{/* <p><a href="#">This is a link</a></p> */}
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">About Me<i class="material-icons right">close</i></span>
      <p>Hi I am Prarabdha Bhagat I am Proficient in React and Javascript.
        I am looking for the job at position on web devloper where i express my self and utilise my Skills & knowledge for growth of the orargnisation.
      </p>
    </div>
  </div>
       </>
               
             
            
        )
    }
}

export default Profile