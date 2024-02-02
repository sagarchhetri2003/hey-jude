import React from 'react';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import HomePage from "./pages/home";
import AdminDashboard from './pages/admin/dash';
// import ViewPage from "./pages/viewpage";
import FirstPage from "./pages/landing";
import Product from "./pages/product";
import SignUpForm from "./pages/register";
// import Login from "./pages/Login";
// import Imageuploadpage from "./pages/imageuploadpage";
import Addtocart from "./pages/addtocart";
import Imageuploadpage from "./pages/imageuploadpage";
import AddProductForm from "./pages/upload";
import Login33 from "./pages/login33";
import YourComponent from "./pages/viewpage";
import EmbeddedCanvas from "./pages/aboutus";
import Adminlogin from "./pages/admin/adminlogin";
import Signup from "./pages/signup";
import Accounts from "./pages/accounts";
import UserProfile from "./pages/accounts";
import Description from "./pages/upload";
import FeedbackList from "./pages/feedbacklist";
import CheckoutForm from "./pages/checkout";
import ShoppingCart from "./pages/checkout";
import Payment from "./pages/payment";
import ContactForm from "./pages/contactUs";
import ProductsByBrand from "./pages/productsByBrand";
import Searchp from "./pages/searchp";
import 'bootstrap/dist/css/bootstrap.min.css';
import dash from './pages/admin/dash'; 
import ChartPage from './pages/admin/ChartPage';
// import CustomerTable from './pages/admin/CustomerTable';
import ProductFeatures from './pages/admin/ProductFeatures';
import AdminOrder from './pages/admin/AdminOrder';
import CrudProduct from './pages/admin/CrudProduct';
// import AddProduct from './pages/admin/ImageUpload';
import ImageUpload from './pages/admin/ImageUpload';
import AddingProduct from './pages/admin/AddingProduct';


function App() {
    console.log('App component rendered');
    return (
        <Router>
            <Routes>
                <Route path='/' element={<Navigate to="/home" />} />
                <Route path='/home' element={<HomePage />} />
                <Route path='/view' element={<YourComponent />} />
                <Route path='/admin' element={<AdminDashboard />} />
                {/*<Route path='/view' element={<ViewPage />} />*/}
                <Route path='/landing' element={<FirstPage />} />
                <Route path='/register' element={<SignUpForm />} />
                <Route path='/product' element={<Product />} />
                <Route path='/upload' element={<Imageuploadpage />} />
                {/*<Route path='/image' element={<AddProductForm />} />*/}
                <Route path='/adc' element={<Addtocart />} />
                <Route path='/login' element={<Login33 />} />
                <Route path='/aboutus' element={<EmbeddedCanvas />} />
                <Route path='/adminlogin' element={<Adminlogin />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/accounts' element={<UserProfile />} />
                <Route path='/des' element={<Description />} />
                <Route path='/feedback/list' element={<FeedbackList/>} />
                <Route path='/checkout' element={<ShoppingCart/>} />
                <Route path='/payment' element={<Payment/>} />
                <Route path='/contactUs' element={<ContactForm/>} />
                <Route path="/product/:brandName" component={ProductsByBrand} />
                <Route path='/searchP' element={<Searchp/>} />
                <Route path="/admin" element={dash} />
                <Route path="/chart" element={<ChartPage/>} />
                {/* <Route path="/customer" element={<CustomerTable />} /> */}
                <Route path="/adminproduct" element={<ProductFeatures />} />
                <Route path="/adminorder" element={<AdminOrder />} />
                <Route path="/crudproduct" element={<CrudProduct />} />
                <Route path="/imageupload" element={<ImageUpload/>} />
                <Route path="/addproduct" element={<AddingProduct/>} />
               
            </Routes>
        </Router>
    );
}
export default App;
