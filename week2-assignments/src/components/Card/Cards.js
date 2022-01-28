import React from 'react';
import { Link, Outlet } from 'react-router-dom';

function Card() {
  return (
    <div>
        <nav>
            <Link to={`/card/card1`}>Basic</Link>
            <Link to={`/card/card2`}>Basic w/ Text Over Media</Link>
            <Link to={`/card/card3`}>Basic w/ Header</Link>
            <Link to={`/card/card4`}>Basic w/ only Buttons</Link>
            <Link to={`/card/card5`}>Basic w/ only Icons</Link>
            <Link to={`/card/card6`}>Horizontal Image &amp; Text</Link>
        </nav>
        <div>
            <Outlet/>
        </div>
    </div>
  );
}

export default Card;
