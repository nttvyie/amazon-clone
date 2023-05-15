import React from 'react';
import {
    createBrowserRouter,
    createRoutesFromElements,
    Outlet,
    Route,
    RouterProvider,
} from 'react-router-dom';
import firebaseConfig from './firebase.config';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home';
import { productsData } from './api/api';
import Signin from './pages/Signin';
import Registration from './pages/Registration';
import Checkout from './pages/Checkout';
import Cart from './pages/Cart';

const Layout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route>
                <Route path="/" element={<Layout />}>
                    <Route
                        index
                        element={<Home />}
                        loader={productsData}
                    ></Route>
                    <Route path="/cart" element={<Cart />}></Route>
                </Route>
                <Route path="/signin" element={<Signin />}></Route>
                <Route path="/registration" element={<Registration />}></Route>
                <Route path="/checkout" element={<Checkout />}></Route>
            </Route>,
        ),
    );

    return (
        <div className="font-bodyFont bg-gray-100">
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
}

export default App;
