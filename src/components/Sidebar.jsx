import '../css/Sidebar.css';
import { Nav } from 'react-bootstrap';

function Sidebar({ isActive }) {
    return (
        <div className={`sidebarWrapper ${isActive ? 'active' : ''}`}>
            <div className="sidebarElement">
                <Nav className="flex-column">
                    <Nav.Item>
                        <Nav.Link href="#">Profile</Nav.Link>
                        <Nav className="flex-column ms-3">
                            <Nav.Link href="#">Chats</Nav.Link>
                            <Nav.Link href="#">x</Nav.Link>
                        </Nav>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">y</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link href="#">z</Nav.Link>
                    </Nav.Item>
                </Nav>
            </div>
        </div>
    );
}

export default Sidebar;
