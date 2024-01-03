import './Root.css'

import { Outlet, Link } from "react-router-dom";

function Root() {

    return (
        <>
            <div id="sidebar">
                <nav>
                    <ul>
                        <li>
                            <Link to={'registration'}>Registration</Link>
                        </li>
                        <li>
                            <Link to={'profile'}>Profile</Link>
                        </li>
                    </ul>     
                </nav>
            </div>
            <div id="root-container">
                <Outlet />
            </div>
        </>
    )
}

export default Root;