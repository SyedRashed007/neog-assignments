import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Snackbar() {
  return (
      <div>
          <nav>
            <Link to={`/snackbar/snackbar1`}>
            Baseline
            </Link>
            <Link to={`/snackbar/snackbar2`}>
            Leading
            </Link>
            <Link to={`/snackbar/snackbar3`}>
            Stacked
            </Link>
          </nav>
          <div>
            <Outlet />
          </div>
      </div>
  )
}

export default Snackbar;
