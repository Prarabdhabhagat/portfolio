import { Component } from 'react'

class Skills extends Component{
    render(){
        return(
            <div className='card'>
                <div className='card-content'>
                    <h6>
                        <strong>SKILLS</strong>
                    </h6>
                    <div className='row mt-top'>
                        <div className='col s6'>
                            <p>React Js</p>
                            <div class="progress">
                           <div class="determinate" style={{width: "70%"}}></div>
                          </div> 
                            

                        </div>

                    </div>

                    <div className='row mt-top'>
                        <div className='col s6'>
                            <p>Javascript</p>
                            <div class="progress">
                           <div class="determinate" style={{width: "80%"}}></div>
                          </div> 
                            

                        </div>

                    </div>

                    <div className='row mt-top'>
                        <div className='col s6'>
                            <p>HTML</p>
                            <div class="progress">
                           <div class="determinate" style={{width: "75%"}}></div>
                          </div> 
                            

                        </div>

                    </div>

                    <div className='row mt-top'>
                        <div className='col s6'>
                            <p>CSS</p>
                            <div class="progress">
                           <div class="determinate" style={{width: "70%"}}></div>
                          </div> 
                            

                        </div>

                    </div>

                </div>

            </div>
        )
    }
}

export default Skills