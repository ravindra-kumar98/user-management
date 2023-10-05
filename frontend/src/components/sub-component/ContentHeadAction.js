import React from 'react'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useNavigate } from 'react-router-dom'
const ContentHeadAction = () =>
{
    const navigate = useNavigate();
    function empForm()
    {
        navigate('/add-employee');
    }
    return (
        <div className='content-head-action'>
            <div className='heading-col'>
                <h1>Employees</h1>
            </div>
            <div className='action-col'>
                <button to='/add-employee' onClick={() => empForm()}><FontAwesomeIcon icon={faUserPlus} /> Add Epmloyee</button>
            </div>
        </div>
    )
}

export default ContentHeadAction