import React from 'react';
import FooterTop from './FooterTop';
import FooterMiddle from './FooterMiddle';
import FooterBottom from './FooterBottom';
import { useSelector } from 'react-redux';

const Footer = () => {
    const userInfo = useSelector((state) => state.amazonReducer.userInfo);
    return (
        <div className="font-titleFont">
            {userInfo ? <div></div> : <FooterTop />}
            <FooterMiddle />
            <FooterBottom />
        </div>
    );
};

export default Footer;
