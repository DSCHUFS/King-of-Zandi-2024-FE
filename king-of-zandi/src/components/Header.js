import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { tableState } from './atom';

const Header = () => {
    const location = useLocation()
    const [table, setTable] = useRecoilState(tableState)

    const pngSrc = table ? "table" : "dateBoard"

    const onClickPng = () => {
        setTable(prev => !prev)
    }
    return (
        <div className='bg-bgColor flex justify-between items-center px-4 md:px-20 py-5 sm:py-3'>
            <div className='space-x-2'>
                <Link to="/" className='text-xl sm:text-[26px] font-bold'>잔디왕 김훕스</Link>
                <span className='hidden sm:inline-block text-base text-dummyColor'>Powered By GDSC HUFS</span>
            </div>
            {location.pathname == "/" ?
                <div className=' w-7' onClick={onClickPng}>
                    <img className='cursor-pointer w-5 h-5 object-cover sm:w-auto sm:h-auto' src={`/imgs/${pngSrc}.png`} />
                </div> : null}

        </div>
    );
};

export default Header;