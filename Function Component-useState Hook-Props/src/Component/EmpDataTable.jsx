import React from 'react'

const EmpDataTable = ({empdata}) => {
  return (
    <div>
        <table border={1} width={"80%"} cellPadding={20} style={{borderRadius:'30px',overflow:'hidden'}}>
            <thead style={{fontSize:'25px',backgroundColor:'lightgray'}}>
                <tr>
                    <th>Sr no</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Address</th>
                    <th>Post</th>
                    <th>Salary</th>
                    <th>Department</th>
                </tr>
            </thead>
            <tbody style={{fontSize:'20px'}}>
                {
                    empdata.map((data)=>{
                        const {empid,empname,empemail,empphone,empaddress,empdeg,empsalary,empdepartment} = data;
                        const {country,state,city,area} = empaddress;
                        return(
                            <tr>
                                <td align='center'>{empid}</td>
                                <td>{empname}</td>
                                <td>{empemail}</td>
                                <td>{empphone}</td>
                                <td>{area} , {city} , {state} , {country}</td>
                                <td>{empdeg}</td>
                                <td>{empsalary}</td>
                                <td>{empdepartment}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default EmpDataTable