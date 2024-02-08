import './Root.css'

import { Link, useOutlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { ThemeContext } from '../context/Contexts';

function Root() {

    const outlet = useOutlet()

    const [path, setPath] = useState('');
    const [theme, setTheme] = useState('light')

    useEffect(()=>{
        setPath(window.location.pathname)
    },[]);

    return (
        <ThemeContext.Provider value={theme}>
            <div id="sidebar" className={`${theme}-theme-specific`}>
                <label className="switch">
                    <input type="checkbox" value={theme == 'light' ? 'dark' : 'light'} onChange={() => setTheme(theme == 'light' ? 'dark' : 'light')}/>
                    <span className="slider round"></span>
                </label>
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
                        <li>
                            <Link to={'todos'}
                                className={path == '/todos' ? 'active' : ''}
                                onClick={() => setPath('/todos')}>
                                Todos</Link>
                        </li>
                        <li>
                            <Link to={'universities'}
                                className={path == '/universities' ? 'active' : ''}
                                onClick={() => setPath('/universities')}>
                                Universities</Link>
                        </li>
                        <li>
                            <Link to={'tasks'}
                                className={path == '/tasks' ? 'active' : ''}
                                onClick={() => setPath('/tasks')}>
                                Tasks</Link>
                        </li>
                    </ul>
                </nav>
            </div>
            <div id="root-container" className={`${theme}-theme-specific`}>
                {outlet || <h1>Hello</h1>}
            </div>
        </ThemeContext.Provider>
    )
}

export default Root;