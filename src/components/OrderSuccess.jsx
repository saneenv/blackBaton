import React from 'react';
import close from '../images/OrderSummary/close.png';
import tick from '../images/OrderSummary/tick.png';
import { useNavigate } from 'react-router-dom';

function OrderSuccess({ onClose }) {
    const navigate = useNavigate();


   const homePage = () => {
        navigate('/');
    }

    return (
        <div className='relative w-[400px] h-[468px] bg-white rounded-[8px] p-4 flex flex-col gap-8'>
            <div className='flex justify-end items-center'>
                <img src={close} alt="close" className="cursor-pointer" onClick={onClose} />
            </div>

            <div className='flex justify-center items-center w-full'>
                <img src={tick} alt="tick" />
            </div>

            <div className='text-3xl font-[700] font-montserrat w-full px-5 text-center'>
                Your Order is Placed!
            </div>

            <div className='h-[54px] w-full flex justify-center items-center'>
                <div className='h-full w-[60%] bg-[black] rounded-[8px] flex justify-center items-center text-[white] font-[500] font-montserrat text-lg cursor-pointer' onClick={homePage}>
                    Continue Shopping
                </div>
            </div>
        </div>
    );
}

export default OrderSuccess;