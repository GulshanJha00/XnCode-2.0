'use client';
import React, { useState } from 'react'
import Image from 'next/image'


const ListCard = () => {
  const [isDeleteModelShow, setIsDeleteModelShow] = useState(false);

  return (
    <>
    <div className="listCard mb-2 w-[full] flex items-center justify-between p-[10px] bg-[#141414] cursor-pointer rounded-lg hover:bg-[#202020] ">
        <div className='flex items-center gap-2'>
            <Image
            src='/xnc.jpg' alt='img' width={60} height={60}/>
        <div>
            <h3 className='text-[20px]'>First Project</h3>
            <p className='text-[grey] text-[14px]'>created on 30/12/2024</p>
        </div>
        </div>
        <div>
            <Image
            onClick={() => setIsDeleteModelShow(true)}
            src='/delete.png' alt='img' width={30} height={30} />
        </div>
    </div>
    {
  isDeleteModelShow ?     <div className="model fixed top-0 left-0 w-screen h-screen bg-[rgba(0,0,0,0.2)] flex justify-center items-center flex-col">
  <div className="mainModel w-[27vw] h-[27vh] bg-[#141414] rounded-lg p-[20px]">
    <h3 className='text-3xl text-center'>Do you want to delete <br/>
     this project?</h3>
     <div className='flex w-full mt-5 items-center gap-[10px]'>
      <button className='p-[10px] rounded-lg bg-[#FF4343] text-white cursor-pointer min-w-[49%]'>Delete</button>
      <button onClick={() => setIsDeleteModelShow(false)} className='p-[10px] rounded-lg bg-[#1A1919] text-white cursor-pointer min-w-[49%]'>Cancel</button>
     </div>
  </div>
</div> : ""
}
    </>
  )
}

export default ListCard