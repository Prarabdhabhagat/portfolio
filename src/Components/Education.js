import { Component } from 'react'


class Education extends Component{
    render(){
        return(
        <div>
            <div className='card '>
                <div className='card-content'>
                    <h6>
                        <strong>EDUCATION</strong>
                    </h6>
                    <table className='striped'>
                        <thread>
                            <tr>
                                <th>Education and </th>
                                <th>and complition Year</th>
                                <th></th>
                           </tr>
                        </thread>
                        <tbody>
                            <tr>
                                <td>GCOERC College of engg</td>
                                <td>April 2020</td>
                            </tr>

                            <tr>
                                <td>MAP College of Polytecnic</td>
                                <td>June 2017</td>
                            </tr>

                            <tr>
                                <td>P.E.School</td>
                                <td>March 2014</td>
                            </tr>
                            <td>
                           
                            </td>
                        </tbody>

                    </table>

                </div>

            </div>
        </div>
        )
    }
}

export default Education