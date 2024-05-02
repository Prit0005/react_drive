import React, { Suspense, lazy } from 'react'
import { Link, Outlet, Route, Routes } from 'react-router-dom';
const Userprofile = lazy(() => import('./Userprofile'));
const Userwork = lazy(() => import('./Userwork'));


export default function User() {
    return (
        <div>
            <h1>User Section</h1>
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
            <Suspense fallback={<div>Loading User sections...</div>}>
                <Routes>
                    <Route path="profile" element={<Userprofile />} />
                    <Route path="work" element={<Userwork />} />
                </Routes>
            </Suspense>
            <Outlet />
        </div>
    )
}
