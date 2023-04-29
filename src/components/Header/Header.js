import React from 'react';
import { useState } from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ArrowDropDownOutlinedIcon from '@mui/icons-material/ArrowDropDownOutlined';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SearchIcon from '@mui/icons-material/Search';
import { logo } from '../../assets/index';
import { allItems } from '../../constants';
import HeaderBottom from './HeaderBottom';

const Header = () => {
    const [showAll, setShowAll] = useState(false);

    return (
        <div className="w-full">
            <div className="w-full flex gap-4 bg-amazon_blue px-4 py-3 text-white">
                {/* ========== Image Start here ========== */}
                <div className="headerHover">
                    <img className="mt-2 w-24" src={logo} alt="" />
                </div>
                {/* ========== Image End here ========== */}
                {/* ========== Deliver Start here ========== */}
                <div className="headerHover">
                    <LocationOnIcon />
                    <p className="flex flex-col text-sm font-light text-lightText">
                        Deliver to{' '}
                        <span className="-mt-1 text-sm font-semibold text-whiteText">
                            Oman
                        </span>
                    </p>
                </div>
                {/* ========== Deliver End here ========== */}
                {/* ========== Search Start here ========== */}
                <div className="relative flex h-10 flex-grow rounded-md bg-white">
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
                <div className="headerHover flex flex-col items-start justify-center">
                    <p className="text-xs font-light text-lightText">
                        Hello, sign in
                    </p>
                    <p className="-mt-1 text-sm font-semibold text-whiteText">
                        Accounts & Lists{' '}
                        <span>
                            <ArrowDropDownOutlinedIcon />
                        </span>
                    </p>
                </div>
                {/* ========== Signin End here ========== */}
                {/* ========== Orders Start here ========== */}
                <div className="headerHover flex flex-col items-start justify-center">
                    <p className="text-xs font-light text-lightText">Returns</p>
                    <p className="-mt-1 text-sm font-semibold text-whiteText">
                        & Orders
                    </p>
                </div>
                {/* ========== Orders End here ========== */}
                {/* ========== Cart Start here ========== */}
                <div className="justify-centers headerHover relative flex items-start">
                    <ShoppingCartIcon />
                    <p className="text-xs font-semibold mt-3 text-whiteText">
                        Cart{' '}
                        <span className="absolute text-xs -top-1 left-6 font-semibold p-1 h-4 bg-[#f3a847] text-amazon_blue rounded-full flex justify-center items-center">
                            0
                        </span>
                    </p>
                </div>
                {/* ========== Cart End here ========== */}
            </div>
            <HeaderBottom />
        </div>
    );
};

export default Header;
