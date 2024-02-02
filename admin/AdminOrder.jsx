import React, { useState, useEffect } from 'react';
import { collection, getDocs, query, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../Firebase/firebase';

const AdminOrder = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const ordersCollection = collection(db, 'orders');
                const ordersQuery = query(ordersCollection);

                const ordersSnapshot = await getDocs(ordersQuery);
                const ordersData = ordersSnapshot.docs.map((doc) => ({
                    id: doc.id,
                    ...doc.data(),
                }));

                console.log('Fetched orders from Firebase:', ordersData);

                setOrders(ordersData);
            } catch (error) {
                console.error('Error fetching orders:', error);
            }
        };

        fetchOrders();
    }, []);

    const handleCancelOrder = async (orderId) => {
        try {
            // Set the order status randomly to either 'Pending' or 'Delivered'
            const newStatus = Math.random() < 0.5 ? 'Pending' : 'Delivered';

            // Update the order status in Firebase
            const orderRef = doc(db, 'orders', orderId);
            await updateDoc(orderRef, {
                status: newStatus,
            });

            // Delete the order from Firebase
            await deleteDoc(orderRef);

            // Update the local state by removing the cancelled order
            setOrders((prevOrders) =>
                prevOrders.filter((order) => order.id !== orderId)
            );

            console.log(`Order ${orderId} cancelled, status set to ${newStatus}, and deleted successfully.`);
        } catch (error) {
            console.error('Error cancelling, updating status, and deleting order:', error);
        }
    };

    return (
        <>
            <div className="row my-5">
                <h3 className="fs-4 mb-3">Recent Orders</h3>
                <div className="col">
                    <table className="table table-bordered table-success table-hover">
                        <thead>
                            <tr>
                                <th scope="col">OrderId</th>
                                {/* <th scope="col">OrderDate</th> */}
                                <th scope="col">Customer Name</th>
                                <th scope="col">Product</th>
                                <th scope="col">Quantity</th>
                                <th scope="col">Total Amount</th>
                                <th scope="col">Status</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orders.map((order) => (
                                <tr key={order.id}>
                                    <td>{order.id}</td>
                                    {/* <td>{order.orderDate.seconds}</td> */}
                                    <td>{order.fullName}</td>
                                    <td>{order.items[0].productName}</td>
                                    <td>{order.items[0].quantity}</td>
                                    <td>Rs{order.items[0].price}</td>
                                    <td>{Math.random() < 0.5 ? 'Pending' : 'Delivered'}</td>
                                    <td>
                                        {order.status !== 'Cancelled' && (
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleCancelOrder(order.id)}
                                            >
                                                Cancel
                                            </button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default AdminOrder;
