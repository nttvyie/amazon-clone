import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import LogoutIcon from '@mui/icons-material/Logout';
import { logo } from '../../assets/index';
import { allItems } from '../../constants';
import HeaderBottom from './HeaderBottom';
import { useDispatch, useSelector } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import { userSignOut, resetCart } from '../../redux/amazonSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const auth = getAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate('');
    const products = useSelector((state) => state.amazonReducer.products);
    const userInfo = useSelector((state) => state.amazonReducer.userInfo);
    const [showAll, setShowAll] = useState(false);
    const handleLogOut = () => {
        signOut(auth)
            .then(() => {
                console.log('Sign out successfully');
                dispatch(userSignOut());
                dispatch(resetCart());
                navigate('/');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className="w-full sticky top-0 z-40">
            <div className="w-full flex gap-4 bg-amazon_blue px-4 py-3 text-white">
                {/* ========== Image Start here ========== */}
                <Link to="/">
                    <div className="headerHover">
                        <img className="mt-2 w-24" src={logo} alt="" />
                    </div>
                </Link>
                {/* ========== Image End here ========== */}
                {/* ========== Deliver Start here ========== */}
                <div className="hidden md:inline-flex headerHover">
                    <LocationOnIcon />
                    <p className="flex flex-col text-sm font-light text-lightText">
                        Deliver to{' '}
                        <span className="-mt-1 text-sm font-semibold text-whiteText">
                            Vietnam
                        </span>
                    </p>
                </div>
                {/* ========== Deliver End here ========== */}
                {/* ========== Search Start here ========== */}
                <div className="hidden lgl:inline-flex h-10 rounded-md flex-grow relative">
                    <span
                        onClick={() => setShowAll(!showAll)}
                        className="font-title Font flex h-full w-14 cursor-pointer items-center justify-center rounded-bl-md rounded-tl-md border-2 bg-gray-200 text-sm text-amazon_blue duration-300 hover:bg-gray-300"
                    >
                        All <span></span> <ArrowDropDownOutlinedIcon />
                    </span>
                    {showAll && (
                        <div>
                            <ul className="gap absolute left-0 top-10 z-50 h-80 w-56 flex-col overflow-x-hidden overflow-y-scroll border-[1px] border-amazon_blue bg-white p-2 text-black">
                                {allItems.map((item) => (
                                    <li
                                        className="font-titleFont cursor-pointer border-b-[1px] border-b-transparent text-sm tracking-wide duration-200 hover:border-b-amazon_blue"
                                        key={item._id}
                                    >
                                        {item.title}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                    <input
                        className="h-full, flex-grow border-none px-2 text-base text-amazon_blue outline-none"
                        type="text"
                    />
                    <span className="flex h-full w-12 cursor-pointer items-center justify-center rounded-br-md rounded-tr-md bg-amazon_yellow text-amazon_blue duration-300 hover:bg-[#f3a847]">
                        <SearchIcon />
                    </span>
                </div>
                {/* ========== Search End here ========== */}
                {/* ========== Signin Start here ========== */}
                {userInfo ? (
                    <div className="headerHover flex flex-col items-start justify-center">
                        <p className="text-sm mdl:text-xs text-gray-100 font-medium mdl:text-lightText">
                            {userInfo.userName}
                        </p>
                        <p className="hidden md:inline-flex -mt-1 text-sm font-semibold text-whiteText">
                            Accounts & Lists{' '}
                            <span>
                                <ArrowDropDownOutlinedIcon />
                            </span>
                        </p>
                    </div>
                ) : (
                    <Link to="/signin">
                        <div className="headerHover flex flex-col items-start justify-center">
                            <p className="text-sm mdl:text-xs text-white font-light mdl:text-lightText">
                                Hello, sign in
                            </p>
                            <p className="hidden md:inline-flex -mt-1 text-sm font-semibold text-whiteText">
                                Accounts & Lists{' '}
                                <span>
                                    <ArrowDropDownOutlinedIcon />
                                </span>
                            </p>
                        </div>
                    </Link>
                )}
                {/* ========== Signin End here ========== */}
                {/* ========== Orders Start here ========== */}
                <div className="hidden mdl:flex headerHover flex-col items-start justify-center">
                    <p className="text-xs font-light text-lightText">Returns</p>
                    <p className="-mt-1 text-sm font-semibold text-whiteText">
                        & Orders
                    </p>
                </div>
                {/* ========== Orders End here ========== */}
                {/* ========== Cart Start here ========== */}
                <Link to="/cart">
                    <div className="flex justify-center headerHover relative items-start">
                        <ShoppingCartIcon />
                        <p className="text-xs font-semibold mt-3 text-whiteText">
                            Cart{' '}
                            <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
                                {products.length > 0 ? products.length : 0}
                            </span>
                        </p>
                    </div>
                </Link>
                {userInfo && (
                    <div
                        onClick={handleLogOut}
                        className="flex flex-col justify-center items-center headerHover relative"
                    >
                        <LogoutIcon className="w-20" />
                        <p className="hidden mdl:inline-flex text-xs font-semibold text-whiteText">
                            Log out
                        </p>
                    </div>
                )}
                {/* ========== Cart End here ========== */}
            </div>
            <HeaderBottom />
        </div>
    );
};

export default Header;
