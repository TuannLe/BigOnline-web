import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Login from '../pages/login'
import Register from '../pages/register'
import ProductDetail from '../pages/ProductDetail'

export default function Container() {
    return (
        <div className="w-[1200px] m-auto mt-20">
            <Routes>
                <Route path="/" element={< Home />} />
                <Route path="/product-detail" element={< ProductDetail />} />
                <Route path="/login" element={< Login />} />
                <Route path="/register" element={< Register />} />
            </Routes>
        </div>
    )
}
