import { Component } from 'react'


class About extends Component{
    render(){
        return(
            <div className='card'>
           <div class="card-action">
           <h3>About Me</h3>
           <p>To work in an envoirment that encourage me to succeced and grow professionally where i can utilise my skills and knowledge appropiately</p>

           <h4>Personal Info</h4>             
           <div className='row mt'>
            <div className='col s12 m6 l6 xl6'>
                <p>
                    <strong>Address:</strong>Kuber nagar ajay road,hydrabad
                </p>
                <p>
                    <strong>Address:</strong>Kuber nagar ajay road,hydrabad
                </p>

                <p>
                    <strong>Email:</strong>bhagat@gmail.com
                </p>

                <p>
                    <strong>Phone:</strong>656779064
                </p>

            </div>
            <div className='s12 m6 l6 xl6'>
                <p>
                    <strong>Main Langauage:</strong>English
                </p>

                <p>
                    <strong>Second Langauage:</strong>marathi
                </p>

                <p>
                    <strong>Third Langauage:</strong>Hindi
                </p>

            </div>
           </div>
           
            </div>
            </div>
            
        )
    }
}

export default About