import { Routes, Route, NavLink, Link } from "react-router-dom";
import Board from "./Board/Board";
import TaskSnapCalendar from "./Calendar/Calendar";
import Tasks from "./Tasks/Tasks";
import logo from './img/logo.png'

export default function Navbar(props) {
    return (
        <>
            <div className="nav-side">
                <nav className="navbar flex-column">
                    <Link className="navbar-brand" to="/" >
                        <img
                            src={logo} // Replace with the URL or path to your logo
                            width="200"
                            className="d-inline-block align-top"
                            alt="Logo"
                        />
                    </Link>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink activeclassname="active" className="nav-link" to="/" >
                                Tasks
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeclassname="active" className="nav-link" to="/board">
                                Board
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeclassname="active" className="nav-link" to="/calendar">
                                Calendar
                            </NavLink>
                        </li>
                    </ul>
                </nav>

            </div>
            <Routes>
                <Route path="/" element={<Tasks data={props.data} modifyData={props.modifyData}/>} />
                <Route path="/board" element={<Board data={props.data} modifyData={props.modifyData}/>} />
                <Route path="/calendar" element={<TaskSnapCalendar data={props.data} modifyData={props.modifyData}/>} />
            </Routes>
        </>

    );
}