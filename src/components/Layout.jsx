import Home from './Home'
import Socials from './Socials'
import Header from './Header'
import './Layout.css'
import { Outlet } from 'react-router-dom';

function Layout({ children }) {
    return (
        <div className="layout">
            <Header />
            <Home />
            <main className="main-content">
                <Outlet />
            </main>
            <Socials />
        </div>
    )
}

export default Layout
