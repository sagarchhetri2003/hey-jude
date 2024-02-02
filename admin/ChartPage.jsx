import React from 'react'
import ChartComponent from './ChartComponent'

const ChartPage = () => {
  return (
    <>
        <div className="container-fluid px-4">
            <ChartComponent/>
          

            {/* Routing for different components */}
            {/* <Route path="/recent-orders" component={RecentOrders} />
            <Route path="/chart" component={ChartComponent} /> */}
            {/* Add more routes for other components as needed */}
          </div>
    </>
  )
}

export default ChartPage;