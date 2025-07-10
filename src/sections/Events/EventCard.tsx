import React from 'react';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  image: string;
}

const EventCard: React.FC<EventCardProps> = ({ title, date, location, image }) => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-row items-center bg-[#101010] rounded-2xl border border-[#23232B] shadow-sm overflow-hidden w-auto min-w-[320px] max-w-full p-2 gap-4 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
      <div className="flex-shrink-0 w-24 h-20 md:w-40 md:h-28 flex items-center justify-center">
        <img src={image} alt={title} className="rounded-xl w-full h-full object-cover" />
      </div>
      <div className="flex flex-col justify-center flex-1 min-w-[180px] h-full gap-2">
        <h2 className="text-lg md:text-xl font-bold text-white mb-1 leading-tight truncate">{title}</h2>
        <div className="text-[#CDCDE0] text-xs md:text-sm mb-1 truncate">Platini</div>
        <div className="flex items-center text-xs text-[#CDCDE0] gap-2 mb-1">
          <Calendar className="w-4 h-4" />
          <span className="truncate">{date}</span>
        </div>
        <div className="flex items-center text-xs text-[#CDCDE0] gap-2 mb-2">
          <MapPin className="w-4 h-4" />
          <span className="truncate">{location}</span>
        </div>
        <button onClick={() => navigate('/events/1')} className="w-full max-w-xs px-0 py-2 bg-[#23232B] text-white rounded-2xl text-sm flex items-center justify-center gap-2 hover:bg-primary transition-all duration-200">
          <ArrowUpRight className="w-5 h-5" />
          View Details
        </button>
      </div>
    </div>
  );
};

export default EventCard; 