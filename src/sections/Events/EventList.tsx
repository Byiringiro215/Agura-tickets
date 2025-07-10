import React from 'react';
import EventCard from './EventCard';

const events = Array(6).fill({
  title: 'Baba Xprience',
  date: '10 May, 2025',
  location: 'Serena Hotel Kigali',
  image: '/event1.png',
});

const EventList = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2  gap-8 w-full">
    {events.map((event, idx) => (
      <EventCard key={idx} {...event} />
    ))}
  </div>
);

export default EventList; 