import React from 'react';
import { Calendar, MapPin, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const event = {
  title: 'Baba Xpreince',
  organizer: 'Platini',
  date: '10-May-2025',
  venue: 'Serena Hotel Kigali',
  image: '/event1.png',
  location: {
    lat: -1.94995,
    lng: 30.06057,
  },
  tickets: [
    { type: 'Regular Tickets', price: '5000 Rwf', left: 100 },
    { type: 'Vip Tickets', price: '10000 Rwf', left: 100 },
    { type: 'Vvip Tickets', price: '20000 Rwf', left: 100 },
    { type: 'Honor Tickets', price: '50000 Rwf', left: 100 },
  ],
};

const EventDetails = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-full bg-[#18181B] flex flex-col">
      <Navbar />
      <main className="flex-1 px-4 py-8 flex flex-col gap-8">
        <div className="mb-2">
          <h1 className="text-2xl md:text-3xl font-bold text-primary mb-1">Discover Events</h1>
          <p className="text-[#CDCDE0] text-sm mb-6">
            Discover and purchase various tickets on different events of your preference
          </p>
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => navigate(-1)}
              className="p-2 rounded-full bg-[#23232B] text-white hover:bg-primary transition-all duration-200"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <span className="text-lg md:text-xl font-bold text-white">{event.title}</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-8 w-full">
          <div className="flex-1 flex flex-col gap-4">
            <img src={event.image} alt={event.title} className="rounded-xl w-full h-56 md:h-72 object-cover" />
            <div className="flex flex-col gap-2 mt-2">
              <div className="text-[#CDCDE0] text-sm">Organizer</div>
              <div className="text-white text-base font-semibold">{event.organizer}</div>
              <div className="flex items-center gap-2 text-[#CDCDE0] text-sm">
                <Calendar className="w-4 h-4" />
                <span>{event.date}</span>
              </div>
              <div className="flex items-center gap-2 text-[#CDCDE0] text-sm">
                <MapPin className="w-4 h-4" />
                <span>{event.venue}</span>
              </div>
              <button className="mt-4 px-6 py-2 bg-[#23232B] text-white rounded-2xl text-base font-semibold hover:bg-primary transition-all duration-200 w-40">Tickets</button>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <div className="bg-[#23232B] rounded-2xl p-4 w-full h-full flex flex-col">
              <div className="text-white font-semibold mb-2">Location</div>
              <div className="rounded-xl w-full h-56 overflow-hidden">
                <MapContainer center={[event.location.lat, event.location.lng]} zoom={16} scrollWheelZoom={false} style={{ height: '100%', width: '100%' }}>
                  <TileLayer
                    attribution='&copy; OpenStreetMap contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[event.location.lat, event.location.lng]}>
                    <Popup>{event.venue}</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-4 mt-8">
          {event.tickets.map((ticket, idx) => (
            <div key={idx} className="bg-[#23232B] rounded-xl p-4 flex flex-col min-w-[200px] max-w-xs flex-1">
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-semibold">{ticket.type}</span>
                <span className="text-xs text-[#CDCDE0]">{ticket.left} left</span>
              </div>
              <div className="text-white text-lg font-bold mb-2">{ticket.price}</div>
              <button className="bg-primary text-white rounded-full px-6 py-1 text-sm font-semibold self-end hover:bg-primary/80 transition-all duration-200" onClick={() => navigate('/events/1/seats')}>Buy</button>
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default EventDetails; 