import React from 'react';
import Footer1 from '../Components/Footer/Footer1';
import Header1 from '../Components/Header/Header1';

const DefalultLayout = ({ children }) => {
    return (
        <div className='main-page-area'>
            <Header1></Header1>
            {children}
            <Footer1></Footer1>
        </div>
    );
};

export default DefalultLayout;