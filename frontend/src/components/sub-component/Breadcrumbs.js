import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Container from 'react-bootstrap/Container';
import { useLocation } from 'react-router-dom';

function Breadcrumbs(prop)
{
    const location = useLocation();

    return (
        <Container fluid>
            <Breadcrumb>
                {(location.pathname === '/') ? <Breadcrumb.Item href="#/">{prop.btext}</Breadcrumb.Item> :
                    <><Breadcrumb.Item href="#/">{prop.bltext}</Breadcrumb.Item><Breadcrumb.Item active>{prop.btext}</Breadcrumb.Item></>}
            </Breadcrumb>
        </Container>
    );
}

export default Breadcrumbs;