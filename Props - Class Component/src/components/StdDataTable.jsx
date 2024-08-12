import { Component } from "react";

class StdDataTable extends Component {

    constructor(StdData) {
        super();
        this.state = {
            data: StdData.data
        }
    }

    render() {
        return (
            <div align="center">
                <h1 style={{fontSize:'70px'}}>React JS - Class Component</h1>
                <h1 style={{fontSize:'40px'}}>Student Data Table</h1>
                <table border={1} cellPadding={20} width={1000} style={{borderRadius:'30px',overflow:'hidden'}}>
                    <thead style={{fontSize:'25px',backgroundColor:'lightgray'}}>
                        <tr>
                            <th>Srno</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Password</th>
                            <th>Course</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody style={{fontSize:'20px'}}>
                        {
                            this.state.data.map((stdData) => {
                                const {grid,name,email,password,course,city} = stdData;
                                return (
                                    <tr>
                                        <td style={{textAlign:'center'}}>{grid}</td>
                                        <td>{name}</td>
                                        <td>{email}</td>
                                        <td>{password}</td>
                                        <td>{course.join(" , ")}</td>
                                        <td>{city}</td> 
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        )
    }
}
export default StdDataTable