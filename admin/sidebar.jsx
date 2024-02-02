import React from 'react';

const sidebar = () => {
  const commonFontSize = '20px'; // Adjust the value as needed

  return (
    <div className="bg-white" id="sidebar-wrapper">
      <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
        <i className="text-success fw-bold"></i>Thrifty Pannel
      </div>
      <div className="list-group list-group-flush my-3">
        <a href="#" className="list-group-item list-group-item-action bg-transparent second-text active" style={{ fontSize: commonFontSize }}>
          <i className="fas fa-comment-dots me-2"></i>
          <span className="text-success fw-bold">Dashboard</span>
        </a>
        <div className="my-2 mx-10 border-bottom"></div> {/* Line between Dashboard and Products */}
 

        <a href="CrudProduct" className="list-group-item list-group-item-action bg-transparent second-text fw-bold" style={{ border: 'none', fontSize: commonFontSize }}>
          <i className="fas fa-comment-dots me-2"></i>
          <span className="fw-bold">Products</span>
        </a>
        <div className="my-2 mx-10 border-bottom"></div> {/*Line between Dashboard and Products*/}
        <a href="addproduct" className="list-group-item list-group-item-action bg-transparent second-text fw-bold" style={{ border: 'none', fontSize: commonFontSize }}>
          <i className="fas fa-comment-dots me-2"></i>
          <span className="fw-bold">AddProduct</span>
        </a>

        <a href="ImageUpload" className="list-group-item list-group-item-action bg-transparent second-text fw-bold" style={{ border: 'none', fontSize: commonFontSize }}>
          <i className="fas fa-comment-dots me-2"></i>
          <span className="fw-bold">ImageUpload</span>
        </a>
        <div className="my-2 mx-10 border-bottom"></div> {/*Line between Dashboard and Products*/}


  
       

        <a href="adminorder" className="list-group-item list-group-item-action bg-transparent second-text fw-bold" style={{ fontSize: commonFontSize }}>
          <i className="fas fa-comment-dots me-2"></i>
          <span className="fw-bold">Orders</span>
        </a>
      

        <a href="/chart" className="list-group-item list-group-item-action bg-transparent second-text fw-bold" style={{ fontSize: commonFontSize }}>
          <i className="fas fa-map-marker-alt me-2"></i>
          <span className="fw-bold">Charts</span>
        </a>
     

        <a href="home" className="list-group-item list-group-item-action bg-transparent text-danger fw-bold" style={{ fontSize: commonFontSize }}>
          <i className="fas fa-comment-dots me-2"></i>Logout
        </a>
      </div>
    </div>
  );
};

export default sidebar;
