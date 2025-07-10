import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Events from "./pages/Events"
import Aboutus from "./pages/Aboutus"
import EventDetails from "./pages/EventDetails"
import SeatSelection from "./pages/SeatSelection"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import VerifyAccount from "./pages/VerifyAccount"
import ForgotPassword from "./pages/ForgotPassword"
import ResetPassword from "./pages/ResetPassword"

function App() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/aboutus" element={<Aboutus />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/events/:id/seats" element={<SeatSelection />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/verify-account" element={<VerifyAccount />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="/reset-password" element={<ResetPassword />} />
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default App
