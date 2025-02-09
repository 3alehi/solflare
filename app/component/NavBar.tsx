import React from 'react';

export default function NavBar() {
  const menuItem = ["MetaMask Snap", "Academy", "Support"];
  return (
    <div className="flex justify-between items-center mt-8">
      <ul className="flex space-x-6 text-xl items-center">
        <li className='cursor-pointer py-1 px-2'>
          <img src="logo.svg" alt="Logo" />
        </li>
        
        {menuItem.map((item) => (
          <li key={item} className="cursor-pointer py-1 px-2 hover:text-white text-gray-400  transition-colors duration-300">
            {item}
          </li>
        ))}
      </ul>

      <button className="text-xl text-white rounded-md bg-opacity-20  bg-gray-600 px-7 py-4 font-semibold hover:bg-slate-700 transition-colors duration-300">
  Access wallet
</button>

    </div>
  );
}
