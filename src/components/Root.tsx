import './Root.css'

import { Outlet, Link } from "react-router-dom";
import {useEffect, useState} from "react";

function Root() {

    const [path, setPath] = useState('');

    useEffect(()=>{
        setPath(window.location.pathname)
    },[]);

    return (
        <>
            <div id="sidebar">
                <nav>
                    <ul>
                        <li>
                            <Link to={'registration'}
                                className={path == '/registration' ? 'active' : ''}
                                onClick={() => setPath('/registration')}>
                                Registration
                            </Link>
                        </li>
                        <li>
                            <Link to={'profile'}
                                className={path == '/profile' ? 'active' : ''}
                                onClick={() => setPath('/profile')}>
                                Profile</Link>
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