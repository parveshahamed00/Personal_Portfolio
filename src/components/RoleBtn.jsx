import React from 'react'
// import { Link } from 'react-router-dom';
function RoleBtn({path,icon,label}) {
    return (
        // <Link to={path}>
        <button
          href={path}
          className="group relative inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white transition rounded-lg border border-white shadow-md hover:shadow-blue-500/40 bg-gradient-to-r from-blue-800 via-indigo-800 to-purple-800 hover:scale-105 duration-300"
        >
          <span className="mr-2">{icon}</span>
          {label}
          <span className="absolute inset-0 opacity-20 blur-xl rounded-lg bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 group-hover:opacity-40 transition duration-300"></span>
        </button>
     
        // </Link>
      );
}

export default RoleBtn