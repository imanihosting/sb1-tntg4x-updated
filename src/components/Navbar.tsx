import React from 'react';
import { Users } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg fixed-top bg-white shadow-sm" style={{ height: '72px' }}>
        <div className="container">
          <Link className="navbar-brand d-flex align-items-center" to="/">
            <div className="bg-primary rounded-circle p-2 d-flex align-items-center justify-content-center" style={{ width: '40px', height: '40px' }}>
              <Users className="text-white" size={24} />
            </div>
            <span className="ms-2 fw-semibold text-primary">ChildMinderConnect</span>
          </Link>
          
          <button
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto align-items-center">
              <li className="nav-item">
                <NavLink 
                  className={({isActive}) => 
                    `nav-link px-3 text-slate position-relative ${isActive ? 'active' : ''}`
                  } 
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className={({isActive}) => 
                    `nav-link px-3 text-slate position-relative ${isActive ? 'active' : ''}`
                  }
                  to="/find"
                >
                  Find Childminder
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink 
                  className={({isActive}) => 
                    `nav-link px-3 text-slate position-relative ${isActive ? 'active' : ''}`
                  }
                  to="/register"
                >
                  Register
                </NavLink>
              </li>
              <li className="nav-item ms-lg-2">
                <Link className="btn btn-primary px-4" to="/login">Sign In</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div style={{ height: '72px' }}></div>
    </>
  );
};

export default Navbar;