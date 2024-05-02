import React, { Suspense, lazy } from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom';
const Adminprofile = lazy(() => import('./Adminprofile'));
const Adminwork = lazy(() => import('./Adminwork'));


export default function Admin() {
    return (
        <div>
            <h1>Admin Section</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="profile">Profile</Link>
                    </li>
                    <li>
                        <Link to="work">Work</Link>
                    </li>
                </ul>
            </nav>
            <Suspense fallback={<div>Loading admin sections...</div>}>
                <Routes>
                    <Route path="profile" element={<Adminprofile />} />
                    <Route path="work" element={<Adminwork />} />
                </Routes>
            </Suspense>
            <Outlet />
        </div>
    )
}
