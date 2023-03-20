import { Component } from 'react'
import {Link} from 'react-router-dom'

class Experience extends Component{
    render(){
        return(
            <div>
            <div className='card '>
                <div className='card-content'>
                    <h6>
                        <strong>EXPERIENCE</strong>
                    </h6>
                    <table className='striped'>
                        <thread>
                            <tr>
                                <th>Experience and</th>
                                <th>Month</th>
                            </tr>
                        </thread>
                        <tbody>
                            <tr>
                                <td>React Js</td>
                                <td>4 Month</td>
                                
                                <td>
                           <Link to="/form" className='btn blue lighten-2'>Click</Link>
                            </td>
                            </tr>

                            <tr>
                                <td>Javascript</td>
                                <td>5 Month</td>
                                
                                <td>
                           <Link to="/calculator" className='btn blue lighten-2'>Click1</Link>
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

export default Experience