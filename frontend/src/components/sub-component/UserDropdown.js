import Dropdown from 'react-bootstrap/Dropdown';

function UserDropdown()
{
    return (
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Admin
            </Dropdown.Toggle>

            <Dropdown.Menu>
                <Dropdown.Item href="/action">Action</Dropdown.Item>
                <Dropdown.Item href="/another-action">Another action</Dropdown.Item>
                <Dropdown.Item href="/something-else">Something else</Dropdown.Item>
            </Dropdown.Menu>
        </Dropdown>
    );
}

export default UserDropdown;