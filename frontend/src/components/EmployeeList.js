import React from 'react'
import ContentHeadAction from './sub-component/ContentHeadAction'
import Breadcrumbs from './sub-component/Breadcrumbs'
import { Link } from 'react-router-dom'
const EmployeeList = (prop) =>
{
    return (
        <>
            <Breadcrumbs bltext='Dashboard' btext='Employee' />
            <div className='employee-content'>
                <div className='container-fluid'>
                    <ContentHeadAction />
                    <div className="contant-wrap table-responsive">
                        <table className="table align-middle table-striped">
                            <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>User Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td><Link to='/emp-details' className='emp-name'>Rohit</Link></td>
                                    <td><Link to='/emp-details' className='emp-name'>rohit123@gmail.com</Link></td>
                                    <td><Link to='/emp-details' className='emp-name'>User</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmployeeList