import React, { useState } from 'react';

const categories = [
  { name: 'All (5)' },
  { name: 'Comedy' },
  { name: 'Music' },
  { name: 'Food' },
  { name: 'Business' },
  { name: 'Art' },
];

const venues = [
  { name: 'All (5)' },
  { name: 'Bk Arena' },
  { name: 'Kcc' },
  { name: 'Intare Conference arena' },
  { name: 'Stade Amahoro' },
];

const EventsFilter = () => {
  const [activeCategory, setActiveCategory] = useState('All (5)');
  const [activeVenue, setActiveVenue] = useState('All (5)');

  return (
    <aside className="w-full max-w-xs bg-[#18181B] p-4 rounded-lg shadow-md mb-6 lg:mb-0">
      <h2 className="text-lg font-bold text-white mb-4">Filters</h2>
      {/* Category */}
      <div className="mb-4">
        <label className="block text-xs text-white mb-2">Category</label>
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-4 py-1 rounded-full text-xs font-semibold transition-all duration-200 focus:outline-none
                ${activeCategory === cat.name ? 'bg-primary text-white' : 'bg-[#101010] text-white hover:bg-primary/80 hover:text-white'}`}
            >
              {cat.name}
            </button>
          ))}
        </div>
      </div>
      {/* Venues */}
      <div className="mb-4">
        <label className="block text-xs text-white mb-2">Venues</label>
        <div className="flex flex-wrap gap-2">
          {venues.map((venue) => (
            <button
              key={venue.name}
              onClick={() => setActiveVenue(venue.name)}
              className={`px-4 py-1 rounded-full text-xs font-semibold transition-all duration-200 focus:outline-none
                ${activeVenue === venue.name ? 'bg-primary text-white' : 'bg-[#101010] text-white hover:bg-primary/80 hover:text-white'}`}
            >
              {venue.name}
            </button>
          ))}
        </div>
      </div>
      {/* Day */}
      <div className="mb-4">
        <label className="block text-xs text-white mb-2">Day</label>
        <select className="w-full bg-[#101010] text-white rounded px-3 py-2 text-xs focus:outline-none">
          <option>All Days</option>
          <option>Today</option>
          <option>Tomorrow</option>
          <option>This Week</option>
        </select>
      </div>
      {/* Price Range */}
      <div className="mb-4">
        <label className="block text-xs text-white mb-2">Price Range</label>
        <select className="w-full bg-[#101010] text-white rounded px-3 py-2 text-xs focus:outline-none">
          <option>0-10000 Rwf</option>
          <option>10000-50000 Rwf</option>
          <option>50000+ Rwf</option>
        </select>
      </div>
    </aside>
  );
};

export default EventsFilter; 