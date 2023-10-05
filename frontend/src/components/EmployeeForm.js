import React, { useState } from 'react'
import Breadcrumbs from './sub-component/Breadcrumbs'

const EmployeeForm = () =>
{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [roll, setRoll] = useState('');
    return (
        <>
            <Breadcrumbs bltext='Dashboard' btext='Employee' />
            <div className='employee-content'>
                <div className='container-fluid'>
                    {/* <div className='row'>
                        <div className='col-md-6'>
                            <div className='prof-box'>
                                <div className='prof-img'>
                                    <img src='./default-user.png' alt='profile' />
                                </div>
                                <div className='user-box'>
                                    <h2>Rohit</h2>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <form>
                        <div className='row gx-2'>
                            <div className='col-md-3'>
                                <label className='d-block'>User Name</label>
                                <input type='text' placeholder='User Name' onChange={(e) => setName(e.target.value)} value={name} />
                            </div>
                            <div className='col-md-3'>
                                <label className='d-block'>Email</label>
                                <input type='text' placeholder='Email' onChange={(e) => setEmail(e.target.value)} value={email} />
                            </div>
                            <div className='col-md-3'>
                                <label className='d-block'>Roll</label>
                                <input type='text' placeholder='Roll' onChange={(e) => setRoll(e.target.value)} value={roll} />
                            </div>
                            <div className='col-md-2'>
                                <label className='d-block invisible'>btn</label>
                                <button className='btn-sm'>Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EmployeeForm