import React from 'react'
import { Route } from 'react-router-dom'
import ProfileDetails from './ProfileDetails'
import { BrowserRouter as Routes, Route, Router } from 'react-router-dom'

function Profile() {
  return (
    <div>
        <h1>Profile</h1>
        <nav>
            <link to="profileDetails"></link>
            <link to="profileSettings"></link>
        </nav>
        <Routes>
            <Route path='/profileDetails' element={<ProfileDetails />} />
            <Route path='/profileSettings' element={<ProfileSettings />} />
        </Routes>
    </div>
  )
}

export default Profile