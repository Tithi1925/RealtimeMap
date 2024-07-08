import React, { useEffect, useState } from 'react';

// import Logout from '../Pages/Logout';
// import Navdropdowns from './Navdropdowns';
import secureLocalStorage from 'react-secure-storage';
import { Link, useLocation } from 'react-router-dom';
import Shubkeylogo from './Assets/Shubhkeylogo';




// import '../Styles/Dropdown.css'
// import ChangePassword from './ChangePassword';


function Navbar() {
  

  const base64String = JSON.parse(secureLocalStorage.getItem('profilephoto'));
  const imageUrl = `data:image/jpeg;base64,${base64String}`;
//   const handlelogout = Logout();
  const menu = JSON.parse(secureLocalStorage.getItem('menu'));
   
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const location = useLocation();

  const changepassword = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
    <div className="container-fluid">
    <Shubkeylogo/>
      {/* <div className="collapse navbar-collapse" id="navbarSupportedContent">
      
      {menu.map((item, index) => (
                <div className="nav-item dropdown mx-4" key={index}>
                {item.items ? (
                <>
                  <Navdropdowns item={item} index={index}/>
                </>
            ) :
                <Link className="nav-link" to={item.routerLink}  style={{ fontSize: '18px' }}>
                    {item.label}
                </Link>}
                </div>
            ))}
        <form className="d-flex mr-3" role="search" style={{ marginLeft: '450px' }}>
          <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form>

        <div className="btn-group">
          <Link className="dropdown-toggle-no-caret" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <img src={imageUrl} height='33px' width='33px' style={{ borderRadius: '50%' }} alt='altimage'
              onError={(e) => e.target.src = "altlogo.png"}></img>
          </Link>

          <ul className="dropdown-menu dropdown-menu-end" style={{ alignContent: 'center' }}>
        
            <li><Link className="dropdown-item"  to='/profile-details'>My Profile</Link></li>
            <li><Link className="dropdown-item" onClick={changepassword} >Change Password</Link></li>
            <li><Link className="dropdown-item" to='' onClick={handlelogout}>Logout</Link></li>
          </ul>
          {isPopupOpen && <ChangePassword onClose={handleClosePopup}/>}
        </div>
      </div> */}
    </div>
  </nav>
  
  )
}

export default Navbar
