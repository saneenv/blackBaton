import React from 'react'

function MyInfo() {
    return (
        <div className='w-full h-auto flex flex-col gap-4 text-start'>
            <span className='text-3xl font-[700] font-montserrat'>My Info</span>
            <span className='text-2xl font-[600] font-montserrat text-[#3C4242]'>Contact Details</span>
            <div className='flex flex-col w-full '>
                <div className='w-full flex flex-col py-3 border-b-2 border-[#EDEEF2] gap-1'>
                    <span className='text-lg font-[700] font-montserrat'>Your Name</span>
                    <div className='flex justify-between items-center'>
                        <span className='text-lg font-[400] font-montserrat'>Gopu Ramesh</span>
                        <span className='text-lg font-[600] font-montserrat text-[#3C4242]'>Change</span>
                    </div>
                </div>

                <div className='w-full flex flex-col py-3 border-b-2 border-[#EDEEF2] gap-1'>
                    <span className='text-lg font-[700] font-montserrat'>Email Address</span>
                    <div className='flex justify-between items-center'>
                        <span className='text-lg font-[400] font-montserrat'>Gopuramesh@gmail.com</span>
                        <span className='text-lg font-[600] font-montserrat text-[#3C4242]'>Change</span>
                    </div>
                </div>

                <div className='w-full flex flex-col py-3 border-b-2 border-[#EDEEF2] gap-1'>
                    <span className='text-lg font-[700] font-montserrat'>Phone Number</span>
                    <div className='flex justify-between items-center'>
                        <span className='text-lg font-[400] font-montserrat'>9874561237</span>
                        <span className='text-lg font-[600] font-montserrat text-[#3C4242]'>Change</span>
                    </div>
                </div>

                <div className='w-full flex flex-col py-3 border-b-2 border-[#EDEEF2] gap-1'>
                    <span className='text-lg font-[700] font-montserrat'>Password</span>
                    <div className='flex justify-between items-center'>
                        <span className='text-lg font-[400] font-montserrat'>......</span>
                        <span className='text-lg font-[600] font-montserrat text-[#3C4242]'>Change</span>
                    </div>
                </div>

                <div className='w-full flex flex-col py-3 gap-12'>
                    <div className='flex justify-between items-center'>
                        <span className='text-lg font-[700] font-montserrat'>Address</span>
                        <span className='text-lg font-[600] font-montserrat text-[#3C4242]'>Add New</span>

                    </div>
                    <div className='flex w-full flex-row  items-center h-[270px] gap-4'>
                        <div className='w-1/2 h-full rounded-[12px] bg-[#F6F6F6] p-6 flex flex-col gap-3'>
                            <span className='text-xl font-[600] font-montserrat'>Gopu Ramesh</span>
                            <span className='text-sm font-[500] font-montserrat text-[#807D7E]'>9874563217</span>
                            <span className='text-sm font-[500] font-montserrat text-[#807D7E]'>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</span>
                            <div className='flex flex-row h-[34px] gap-4'>
                                <div className='h-full w-auto px-3 flex justify-center items-center rounded-[8px] border-2 border-[#909090] text-sm font-[600] font-montserrat text-[#807D7E]'>
                                    Home
                                </div>
                                <div className='h-full w-auto px-3 flex justify-center items-center rounded-[8px] border-2 border-[#909090] text-sm font-[600] font-montserrat text-[#807D7E]'>
                                    Default billing address
                                </div>
                            </div>
                            <br />
                            <div className='flex flex-row '>
                                <div className='h-full w-auto pr-2 flex  border-r-2 border-[#909090] text-sm font-[600] text-[#3C4242] font-montserrat'>
                                    Remove
                                </div>
                                <div className='h-full w-auto pl-2 flex  text-sm font-[600] text-[#3C4242] font-montserrat'>
                                    Edit
                                </div>

                            </div>
                        </div>
                            <div className='w-1/2 h-full rounded-[12px] bg-[#F6F6F6] p-6 flex flex-col gap-3'>
                                <span className='text-xl font-[600] font-montserrat'>Gopu Ramesh</span>
                                <span className='text-sm font-[500] font-montserrat text-[#807D7E]'>9874563217</span>
                                <span className='text-sm font-[500] font-montserrat text-[#807D7E]'>Akshya Nagar 1st Block 1st Cross, Rammurthy nagar, Bangalore-560016</span>
                                <div className='flex flex-row h-[34px] gap-4'>
                                    <div className='h-full w-auto px-3 flex justify-center items-center rounded-[8px] border-2 border-[#909090] text-sm font-[600] font-montserrat text-[#807D7E]'>
                                        Home
                                    </div>
                                    <div className='h-full w-auto px-3 flex justify-center items-center rounded-[8px] border-2 border-[#909090] text-sm font-[600] font-montserrat text-[#807D7E]'>
                                        Default billing address
                                    </div>
                                </div>
                                <br />
                                <div className='flex flex-row '>
                                    <div className='h-full w-auto pr-2 flex  border-r-2 border-[#909090] text-sm font-[600] text-[#3C4242] font-montserrat'>
                                        Remove
                                    </div>
                                    <div className='h-full w-auto pl-2 flex  text-sm font-[600] text-[#3C4242] font-montserrat'>
                                        Edit
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
        </div>
    )
}

export default MyInfo