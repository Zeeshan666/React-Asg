import React from 'react';


const Error = ({ message }) => {
  return (
    <div className="flex justify-center items-center bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Error: </strong>
      <span className="block sm:inline">{message||'Some thing bad happen'}</span>
    </div>
  );
};


export default Error
