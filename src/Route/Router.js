import React from 'react'
import { Routes, Route } from "react-router-dom";
import Dashboard from '../component/Dashboard';

const Router = () => {

    return (
    <Routes>
        <Route  path="/" element={<Dashboard/>}>
            <Route path="/:userId" element={<Dashboard/>} />
        </Route>
        <Route path="*" element={(()=> <h1>Page NOT FOUND - 404 :( </h1>) ()}></Route> 
    </Routes>
    )
}

export default Router



