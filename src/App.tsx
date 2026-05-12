import { Routes, Route, Navigate } from 'react-router-dom'
import { ClerkProvider } from '@clerk/clerk-react'

// Pages
import LandingPage from './pages/LandingPage'
import LoginPage from './pages/auth/LoginPage'
import SignupPage from './pages/auth/SignupPage'
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

// Clerk Publishable Key (User should replace this)
const CLERK_PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY || 'pk_test_Y2xlcmsuY29tJA'

function App() {
  return (
    <ClerkProvider publishableKey={CLERK_PUBLISHABLE_KEY}>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />

        {/* Business Dashboard Routes (Protected by Clerk in real app) */}
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<Overview />} />
          <Route path="setup" element={<Setup />} />
          <Route path="inventory" element={<Inventory />} />
          <Route path="simulator" element={<Simulator />} />
          <Route path="orders" element={<Orders />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="integration" element={<Integration />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Admin Routes */}
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ClerkProvider>
  )
}

export default App
