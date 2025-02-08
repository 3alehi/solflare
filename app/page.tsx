import React from 'react';

export default function page() {
  return (
    <div className="mt-28 ">
      <div className="grid grid-cols-2 items-center">
        <div className='z-20'>
          <h1 className="text-6xl leading-[70px] font-bold">A secure and powerful</h1>
          <h1 className="text-6xl leading-[70px] font-bold text-gradient">Solana Wallet</h1>
        </div>

        <div className="flex justify-end relative z-10">
          
          {/* <div className="absolute w-[1100px] h-[1100px] bg-purple-600 rounded-full -z-10"></div> */}
          <img
            src="A-secure-and-powerful-Solana-Walletx2.c6efaf0a..png"
            className="h-[552px] w-[552px]"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
