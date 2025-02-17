import React from 'react';

export default function Header() {
  return (
    <nav className='flex justify-between items-center bg-gray-800 text-white my-10'>
      <div>
        <h1>Logo</h1>
      </div>
      <div>
        <ul className='flex justify-between items-center'>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
          <li>Item 4</li>
          <li>Item 5</li>
        </ul>
      </div>
    </nav>
  );
}
