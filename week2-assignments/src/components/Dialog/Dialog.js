import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Dialog() {
  return (
      <div>
          <nav>
              <Link to={`/dialog/dialog1`}>
                  Simple Dialog
              </Link>
                <Link to={`/dialog/dialog2`}>
                    Scrollable Dialog
                </Link>
          </nav>
          <Outlet/>
      </div>
  );
}

export default Dialog;
