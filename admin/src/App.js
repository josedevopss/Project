import React, { Suspense } from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import AddRecipe from "./pages/AddRecipe";
import Upload from "./pages/Upload";
import ListOfUsers from "./pages/ListOfUsers";
import ChefApply from "./pages/ChefApply";
import AdminLogin from "./pages/AdminLogin";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import RequireAuth from "./components/RequireAuth";

const Layout = () => {
  return (
    <>
      <div className="flex">
        <div className="fixed inset-y-0 left-0 md:relative md:translate-x-0 z-50">
          <Sidebar />
        </div>
        <div className="flex-1 ml-0">
          <Navbar />
          <Outlet />
        </div>
      </div>
      <footer style={{ width: "100%", bottom: 0 }}>
        {/* Footer content */}
      </footer>
    </>
  );
};

const Loader = () => (
  <div className="flex justify-center items-center h-screen">Loading...</div>
);

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
          <Routes>
            {/* Public route for admin login */}
            <Route path="/admin/login" element={<AdminLogin />} />
            {/* Protected admin routes */}
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Layout />
                </RequireAuth>
              }
            >
              <Route index element={<Dashboard />} />
              <Route path="/addRecipe" element={<AddRecipe />} />
              <Route path="/uploadRecipe" element={<Upload />} />
              <Route path="/lsusers" element={<ListOfUsers />} />
              <Route path="/chefapply" element={<ChefApply />} />
              <Route path="/*" element={<AdminLogin/>}/>
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
