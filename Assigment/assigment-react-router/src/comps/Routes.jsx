import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
const Admin = React.lazy(() => import("./admin/Admin"))
const User = React.lazy(() => import("./user/User"))


export default function
    () {
    return (
        <div>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/admin/*" element={<Admin />} />
                    <Route path="/user/*" element={<User />} />
                </Routes>
            </Suspense>
        </div>
    )
}
