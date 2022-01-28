import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Drawer() {
  return (
      <div>
          <nav>
              <Link to={`/drawer/drawer1`}>
                    Simple Drawer
              </Link>
                <Link to={`/drawer/drawer2`}>
                    Permanent Drawer
                </Link>
          </nav>
            <div>
                <Outlet/>
            </div>
      </div>
  );
}

export default Drawer;
