import React from 'react'
import { Route, Routes } from 'react-router-dom'
import BreedDetail from '../Pages/BreedDetail'
import Home from '../Pages/home'
import ListBreeds from '../Pages/ListBreeds'
import Login from '../Pages/Login'
import PrivateRoute from './privateRoute'

const AllRoutes = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<Home />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/breed" element={
          <PrivateRoute>
            <ListBreeds />
          </PrivateRoute>
        }/>
        <Route path="/details" element={
          <PrivateRoute>
            <BreedDetail />
          </PrivateRoute>
        }/>
    </Routes>
    </div>
  )
}

export default AllRoutes