
import React from 'react';

const recentorders = () => {
  return (
    <div className="row my-5">
      <h3 className="fs-4 mb-3">Recent Orders</h3>
      <div className="col">
        <table className="table bg-white rounded shadow-sm  table-hover">
          <thead>
            <tr>
              <th scope="col" width="50">#</th>
              <th scope="col">Product</th>
              <th scope="col">Customer</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Iphone 12 promax</td>
              <td>Rohan</td>
              <td>Rs1,10,100</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>SamsungS20</td>
              <td>Anjali</td>
              <td>Rs90,000</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Iphone 15 pro max</td>
              <td>Sagar</td>
              <td>Rs1,20,000</td>
              
            </tr>
            <tr>
              <th scope="row">4</th>
              <td>Poco FZ</td>
              <td>Sulav</td>
              <td>Rs90,000</td>
              
            </tr>
            <tr>
              <th scope="row">5</th>
              <td>OPPO F9</td>
              <td>Dhiraj</td>
              <td>Rs90,000</td>
              
            </tr>
            <tr>
              <th scope="row">6</th>
              <td>Nothing</td>
              <td>Kc</td>
              <td>Rs70,000</td>
              
            </tr>
            <tr>
              <th scope="row">7</th>
              <td>Samsung S21</td>
              <td>Balayar</td>
              <td>Rs90,000</td>
              
            </tr>
            <tr>
              <th scope="row">8</th>
              <td>Vivo</td>
              <td>Shrestha</td>
              <td>Rs90,000</td>
              
            </tr>
            <tr>
              <th scope="row">9</th>
              <td>Xiaomi</td>
              <td>Sarki</td>
              <td>Rs80,000</td>
              
            </tr>
            <tr>
              <th scope="row">10</th>
              <td>SamsungUltra</td>
              <td>chhetri</td>
              <td>Rs90,000</td>
              
            </tr>
            
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default recentorders;
