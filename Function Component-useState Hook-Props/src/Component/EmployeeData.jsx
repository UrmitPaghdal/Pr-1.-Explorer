import React, { useState } from 'react'
import EmpDataTable from './EmpDataTable'

const EmployeeData = () => {

    const [employee] = useState(
        [
            {
                empid: 1,
                empname: "abc",
                empemail: "abc@gmail.com",
                empphone: 12345,
                empaddress: {
                    country: "india",
                    state: "gujarat",
                    city: "surat",
                    area: "motavarachha"
                },
                empdeg: "junior",
                empsalary: 23000,
                empdepartment: "ui/ux"
            },
            {
                empid: 2,
                empname: "def",
                empemail: "def@gmail.com",
                empphone: 2121,
                empaddress: {
                    country: "india",
                    state: "rajasthan",
                    city: "jaypur",
                    area: "jaypurabc"
                },
                empdeg: "junior",
                empsalary: 21000,
                empdepartment: "web design"
            },
            {
                empid: 3,
                empname: "ghi",
                empemail: "ghi@gmail.com",
                empphone: 2212,
                empaddress: {
                    country: "india",
                    state: "maharashtra",
                    city: "pune",
                    area: "abcpune"
                },
                empdeg: "seniour",
                empsalary: 65000,
                empdepartment: "backend developer"
            },
            {
                empid: 4,
                empname: "jkl",
                empemail: "jkl@gmail.com",
                empphone: 212112,
                empaddress: {
                    country: "india",
                    state: "karnatak",
                    city: "bengaluru",
                    area: "kgf"
                },
                empdeg: "tl",
                empsalary: 150000,
                empdepartment: "frontend developer"
            }
        ]
    )

    return (
        <div align="center">
            <h1 style={{fontSize:'70px'}}>React JS - Function Component</h1>
            <h1 style={{fontSize:'40px'}}>Employee Data Table</h1>
            <EmpDataTable empdata={employee}/>
        </div>
    )
}

export default EmployeeData