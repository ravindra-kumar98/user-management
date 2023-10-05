import { Link, useLocation } from "react-router-dom";
import { faArrowRight, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserDropdown from "./sub-component/UserDropdown";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Header()
{
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    return (
        <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
                <div>
                    <Link className="navbar-brand" to='/'>User Management</Link>
                    <Button className="sidebar-btn" onClick={handleShow}>
                        <FontAwesomeIcon icon={faBars} />
                    </Button>
                    <Offcanvas show={show} onHide={handleClose}>
                        <Offcanvas.Header closeButton>
                            <Link className="navbar-brand" to='/'>User Management</Link>
                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <ul>
                                <li>
                                    <Link to='/' className={splitLocation[1] === "" ? "active" : ""} >Dashboard <FontAwesomeIcon icon={faArrowRight} /></Link>
                                </li>
                                <li>
                                    <Link to='/employee' className={splitLocation[1] === "employee" ? "active" : ""}>Employee <FontAwesomeIcon icon={faArrowRight} /></Link>
                                </li>
                            </ul>
                        </Offcanvas.Body>
                    </Offcanvas>
                </div>
                <UserDropdown />
            </div>
        </nav>
    );
}

export default Header;