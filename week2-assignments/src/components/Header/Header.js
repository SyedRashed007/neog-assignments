import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Header() {
  return (
      <div>
          <nav>
              <Link to={`/header/header1`}>
                 Header W/ Fixed Header
              </Link>
              <Link to={`/header/header2`}>
                 Header W/  Corner Header
              </Link>
              <Link to={`/header/header3`}>
                 Header W/ Permanent Header
              </Link>
          </nav>
            <div>
                <Outlet/>
            </div>
      </div>
  );
}

export default Header;
