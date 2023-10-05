import React from 'react'
import Breadcrumbs from './sub-component/Breadcrumbs'
const EmpDetails = () =>
{
    return (
        <>
            <Breadcrumbs bltext='Dashboard' btext='Employee' />
            <div className='employee-content'>
                <div className='container-fluid'>
                    <div className='details-wrap mb-3'>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='prof-box'>
                                    <div className='prof-img'>
                                        <img src='./default-user.png' alt='profile' />
                                    </div>
                                    <div className='user-box'>
                                        <h2>Rohit</h2>
                                        <p>Designation</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='actions'>
                                    <button className='edit-btn'>Edit</button>
                                    <button className='more-btn'>More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='details-wrap'>
                                <div className="table-responsive">
                                    <table className="cont_details_table table mb-0">
                                        <tbody>
                                            <tr>
                                                <td className="cont_theading">Contact Id</td>
                                                <td className="cont_tdata"> CON104747</td>
                                            </tr>
                                            <tr>
                                                <td className="cont_theading">Organization Name</td>
                                                <td className="cont_tdata"> KORES INDIA LIMITED</td>
                                            </tr>
                                            <tr>
                                                <td className="cont_theading">First Name</td>
                                                <td className="cont_tdata"><span className="edit_icon"><i className="fas fa-pencil-alt"></i></span>
                                                    <p>Mr. SUNIL</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="cont_theading">Last Name</td>
                                                <td className="cont_tdata"><span className="edit_icon"><i className="fas fa-pencil-alt"></i></span>
                                                    <p>BHOIR</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='details-wrap'>
                                <div className="table-responsive">
                                    <table className="cont_details_table table mb-0">
                                        <tbody>
                                            <tr>
                                                <td className="cont_theading">Office Phone</td>
                                                <td className="cont_tdata"><span className="edit_icon"><i className="fas fa-pencil-alt"></i></span>
                                                    <p>9021592728</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="cont_theading">Email</td>
                                                <td className="cont_tdata"><span className="edit_icon"><i className="fas fa-pencil-alt"></i></span>
                                                    <p>pcd.engineering@kores-india.com</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="cont_theading">Assigned To</td>
                                                <td className="cont_tdata"><span className="edit_icon"><i className="fas fa-pencil-alt"></i></span>
                                                    <p>Prasad Gaonkar</p>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="cont_theading">Department</td>
                                                <td className="cont_tdata"><span className="edit_icon"><i className="fas fa-pencil-alt"></i></span>
                                                    <p>Design</p>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EmpDetails