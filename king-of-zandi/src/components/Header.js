import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-bgColor flex justify-between items-center px-4 md:px-20 py-5 sm:py-3'>
            <div className='space-x-2'>
                <Link to="/" className='text-xl sm:text-[26px] font-bold'>잔디왕 김훕스</Link>
                <span className='hidden sm:inline-block text-base text-dummyColor'>Powered By GDSC HUFS</span>
            </div>
            <div>
                <img className='cursor-pointer w-10 h-10 sm:w-auto sm:h-auto' src='imgs/table.png' />
            </div>
        </div>
    );
};

export default Header;