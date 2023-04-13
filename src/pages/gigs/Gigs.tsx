import React, { useState } from 'react';
import './Gigs.scss';

export const Gigs = () => {
  const [open, setOpen] = useState(false);
  const [sort, setSort] = useState('sales');

  const reSort = (type: string) => {
    setSort(type);
    setOpen(false);
  };
  return (
    <div className="gigs">
      <div className="container">
        <span className="breadcrubs">FIVERR GRAPICHS & DESINGS</span>
        <h1>IA Artist</h1>
        <p>
          Explore the boundaries of art and technology with Fiverr's AI artists
        </p>
        <div className="menu">
          <div className="left">
            <span>Budged</span>
            <input type="text" placeholder="min" />
            <input type="text" placeholder="max" />
            <button>Apply</button>
          </div>
          <div className="right">
            <span className="sortBy">SortBy</span>
            <span className="sortType">
              {sort === 'sales' ? 'Best Selling' : 'Newest'}
            </span>
            <img src="./img/down.png" alt="" onClick={() => setOpen(!open)} />
            {open && (
              <div className="rightMenu">
                {sort === 'sales' ? (
                  <span onClick={() => reSort('createdAt')}>Newest</span>
                ) : (
                  <span onClick={() => reSort('sales')}>Best Selling</span>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
