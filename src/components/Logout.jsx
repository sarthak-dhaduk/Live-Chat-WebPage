import React from 'react'

const Logout = () => {
    function logout() {
        localStorage.clear();
        window.location.reload();
    }
  return (
    <div className='logoutNow'>
        <button onClick={logout}>Logout </button>
    </div>
  )
}

export default Logout
