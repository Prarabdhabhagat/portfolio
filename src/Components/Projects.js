import { Component } from 'react'
import {Link} from 'react-router-dom'

class Projects extends Component{
    render(){
        return(
            <div>
            <div className='card '>
                <div className='card-content'>
                    <h6>
                        <strong>PROJECTS</strong>
                    </h6>
                    <table className='striped'>
                        <thread>
                            <tr>
                                <th>PROJECTS and</th>
                                <th>Complition Time</th>
                                
                           </tr>
                        </thread>
                        <tbody>
                            <tr>
                                <td>Form Validation</td>
                                <td>April 2022</td>
                                <td>
                           <Link to="/form" className='btn blue lighten-2'>View</Link>
                            </td>
                            </tr>

                            <tr>
                                <td>Calculator</td>
                                <td>June 2022</td>
                                <td>
                           <Link to="/calculator" className='btn blue lighten-2'>View1</Link>
                            </td>
                            </tr>

                          
                          
                        </tbody>

                    </table>

                </div>

            </div>
        </div>
        )
    }
}

export default Projects