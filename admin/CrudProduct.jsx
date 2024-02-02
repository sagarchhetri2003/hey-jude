import React, { useState, useEffect } from 'react';
import { collection, getDocs, addDoc, updateDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../Firebase/firebase';
// import '../../styles/crudproduct.css';

const CrudProduct = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    brand: '',
    color: '',
    condition: '',
    description: '',
    imageUrl: '',
    name: '',
    price: 0,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const productsCollection = collection(db, 'products');
      const productsSnapshot = await getDocs(productsCollection);
      const productsData = productsSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const addProduct = async () => {
    try {
      const productsCollection = collection(db, 'products');
      await addDoc(productsCollection, newProduct);
      fetchProducts();
      clearInputFields();
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  const updateProduct = async (productId, updatedProduct) => {
    try {
      const productDoc = doc(db, 'products', productId);
      await updateDoc(productDoc, updatedProduct);
      fetchProducts();
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  const deleteProduct = async (productId) => {
    try {
      const productDoc = doc(db, 'products', productId);
      await deleteDoc(productDoc);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  const clearInputFields = () => {
    setNewProduct({
      brand: '',
      color: '',
      condition: '',
      description: '',
      imageUrl: '',
      name: '',
      price: 0,
    });
  };

  return (
    <div className="container mt-5">
      {/* Add Product Form */}
      {/* <div className="add-product-container">
        <h2>Add Product</h2>
        <div className="row">
          <div className="col-md-2">
            <label className="form-label">Brand:</label>
            <input
              type="text"
              className="form-control"
              value={newProduct.brand}
              onChange={(e) => setNewProduct({ ...newProduct, brand: e.target.value })}
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Color:</label>
            <input
              type="text"
              className="form-control"
              value={newProduct.color}
              onChange={(e) => setNewProduct({ ...newProduct, color: e.target.value })}
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Condition:</label>
            <input
              type="text"
              className="form-control"
              value={newProduct.condition}
              onChange={(e) => setNewProduct({ ...newProduct, condition: e.target.value })}
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Description:</label>
            <input
              type="text"
              className="form-control"
              value={newProduct.description}
              onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Image URL:</label>
            <input
              type="text"
              className="form-control"
              value={newProduct.imageUrl}
              onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Name:</label>
            <input
              type="text"
              className="form-control"
              value={newProduct.name}
              onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
            />
          </div>
          <div className="col-md-2">
            <label className="form-label">Price:</label>
            <input
              type="number"
              className="form-control"
              value={newProduct.price}
              onChange={(e) => setNewProduct({ ...newProduct, price: Number(e.target.value) })}
            />
          </div>
        </div>
        <button className="btn btn-success mt-3" onClick={addProduct}>
          Add Product
        </button>
      </div> */}

      {/* Product Table */}
      <div className="product-table-container">
        <h2>Product Table</h2>
        <table className="table table-bordered table-success table-hover">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Brand</th>
              <th scope="col">Color</th>
              <th scope="col">Condition</th>
              <th scope="col">Description</th>
              <th scope="col">Image URL</th>
              <th scope="col">Name</th>
              <th scope="col">Price</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Display the list of products */}
            {products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={product.brand}
                    onChange={(e) => updateProduct(product.id, { ...product, brand: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={product.color}
                    onChange={(e) => updateProduct(product.id, { ...product, color: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={product.condition}
                    onChange={(e) => updateProduct(product.id, { ...product, condition: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={product.description}
                    onChange={(e) => updateProduct(product.id, { ...product, description: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={product.imageUrl}
                    onChange={(e) => updateProduct(product.id, { ...product, imageUrl: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    className="form-control"
                    value={product.name}
                    onChange={(e) => updateProduct(product.id, { ...product, name: e.target.value })}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className="form-control"
                    value={product.price}
                    onChange={(e) => updateProduct(product.id, { ...product, price: Number(e.target.value) })}
                  />
                </td>
                <td className="table-actions">
                  <button className="btn btn-danger" onClick={() => deleteProduct(product.id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CrudProduct;
