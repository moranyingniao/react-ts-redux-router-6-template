import { ReactNode, useState } from 'react'
import reactLogo from '../assets/react.svg'
import { NavLink, Outlet } from 'react-router-dom'
import './Myapp.css'

export default function Myapp() {
    const [count, setCount] = useState(0)
    return (
        <div className="App">
            <div>
                <a href="https://vitejs.dev" target="_blank">
                    <img src="/vite.svg" className="logo" alt="Vite logo" />
                </a>
                <a href="https://reactjs.org" target="_blank">
                    <img src={reactLogo} className="logo react" alt="React logo" />
                </a>
            </div>
            <h1>Vite + React + React-router + redux + axios + 反向代理</h1>
            <NavLink to='/home'>HOME</NavLink>====
            <NavLink to='/about'>ABOUT</NavLink>
            <Outlet />
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
                <p>
                    Edit <code>src/App.tsx</code> and save to test HMR
                </p>
            </div>
            <p className="read-the-docs">
                Click on the Vite and React logos to learn more
            </p>
        </div>
    )
}
