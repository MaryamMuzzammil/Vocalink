import { Routes, Route, Navigate } from 'react-router-dom'
import { SignedIn, SignedOut, RedirectToSignIn } from '@clerk/clerk-react'

// Pages
import LandingPage from './pages/LandingPage'
import DashboardLayout from './components/layout/DashboardLayout'
import Overview from './pages/dashboard/Overview'
import Setup from './pages/dashboard/Setup'
import Inventory from './pages/dashboard/Inventory'
import Simulator from './pages/dashboard/Simulator'
import Orders from './pages/dashboard/Orders'
import Analytics from './pages/dashboard/Analytics'
import Integration from './pages/dashboard/Integration'
import Settings from './pages/dashboard/Settings'
import AdminDashboard from './pages/admin/AdminDashboard'

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<LandingPage />} />

      {/* Protected Dashboard Routes */}
      <Route 
        path="/dashboard" 
        element={
          <>
            <SignedIn>
              <DashboardLayout />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        }
      >
        <Route index element={<Overview />} />
        <Route path="setup" element={<Setup />} />
        <Route path="inventory" element={<Inventory />} />
        <Route path="simulator" element={<Simulator />} />
        <Route path="orders" element={<Orders />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="integration" element={<Integration />} />
        <Route path="settings" element={<Settings />} />
      </Route>

      {/* Admin Routes - Protected and logic-restricted */}
      <Route 
        path="/admin" 
        element={
          <>
            <SignedIn>
              <AdminDashboard />
            </SignedIn>
            <SignedOut>
              <RedirectToSignIn />
            </SignedOut>
          </>
        } 
      />

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
