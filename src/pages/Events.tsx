import React from 'react';
import EventList from '../sections/Events/EventList';
import EventsFilter from '../sections/Events/EventsFilter';
import { Search } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Events = () => {
  return (
    <div className="min-h-screen w-full bg-[#18181B] flex flex-col">
      <Navbar />
      <main className="flex-1 px-2 md:px-10 py-10">
        <h1 className="text-3xl font-bold text-primary mb-2 text-left">Upcoming Events</h1>
        <p className="text-[#CDCDE0] text-sm mb-8 text-left">Discover and purchase tickets to hundreds of different events at your convenience.</p>
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          <div className="w-full lg:w-1/4">
            <EventsFilter />
          </div>
          <div className="w-full lg:w-3/4 flex flex-col gap-4">
            <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-2">
              <div className="relative w-full sm:w-1/2">
                <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[#CDCDE0]">
                  <Search className="w-4 h-4" />
                </span>
                <input type="text" placeholder="Search Event" className="w-full bg-[#101010] text-[#CDCDE0] rounded px-9 py-2 text-sm focus:outline-none" />
              </div>
              <select className="bg-[#101010] text-[#CDCDE0] rounded px-4 py-2 text-sm focus:outline-none">
                <option>Latest</option>
                <option>Oldest</option>
                <option>Popular</option>
              </select>
            </div>
            <EventList />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Events;
