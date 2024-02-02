import React from 'react';
import '../../styles/dash.css';
import Sidebar from './sidebar';
import Header from './header';
import RecentOrders from './recentorders';
import Navbar from '../../pages/navbar'; // Correct the relative path
import Footer from '../../pages/footer'; // Correct the relative path
import AdminProduct from './ProductFeatures';

const Dash = () => {
  return (
    <div className="d-flex" id="wrapper">
      {/* Sidebar component */}
      <Sidebar />

      {/* Page Content */}
      <div id="page-content-wrapper">
        {/* Header component */}
        <Header />

        <div className="container-fluid px-4">
          <RecentOrders />
          <div className="row my-5">
            <AdminProduct />
            {/* Your table and other content here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
