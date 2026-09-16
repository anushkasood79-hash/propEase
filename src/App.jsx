import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Login from "./pages/login";
import Register from "./pages/register";

import Dashboard from "./pages/tenant/dashboard";
import Maintenance from "./pages/tenant/maintenance";
import NewMaintenance from "./pages/tenant/new-maintenance";
import Amenities from "./pages/tenant/amenities";
import MyBookings from "./pages/tenant/my-bookings";
import AmenityDetails from "./pages/tenant/amenity-details";

import ManagerDashboard from "./pages/manager/dashboard";
import ManagerMaintenance from "./pages/manager/maintenance";
import ManageRequest from "./pages/manager/manage-request";
import ManagerBookings from "./pages/manager/bookings";
import ManagerAmenities from "./pages/manager/amenities";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Home & Authentication */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Tenant */}
        <Route
          path="/tenant/dashboard"
          element={<Dashboard />}
        />

        <Route
          path="/tenant/maintenance"
          element={<Maintenance />}
        />

        <Route
          path="/tenant/maintenance/new"
          element={<NewMaintenance />}
        />

        <Route
          path="/tenant/amenities"
          element={<Amenities />}
        />

        {/* Tenant Amenity Booking */}
        <Route
          path="/tenant/amenities/:id"
          element={<AmenityDetails />}
        />

        <Route
          path="/tenant/bookings"
          element={<MyBookings />}
        />

        {/* Manager */}
        <Route
          path="/manager/dashboard"
          element={<ManagerDashboard />}
        />

        <Route
          path="/manager/maintenance"
          element={<ManagerMaintenance />}
        />

        <Route
          path="/manager/maintenance/:id"
          element={<ManageRequest />}
        />

        <Route
          path="/manager/bookings"
          element={<ManagerBookings />}
        />

        <Route
          path="/manager/amenities"
          element={<ManagerAmenities />}
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;