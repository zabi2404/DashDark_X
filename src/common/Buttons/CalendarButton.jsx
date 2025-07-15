// src/common/Buttons/CalendarButton.jsx
import React, { useState, useRef, useEffect } from 'react';
import { FaCalendar } from 'react-icons/fa';
import { IoChevronDown } from 'react-icons/io5';
import Mcalendar from '../Calendars/Mcalendar';

export default function CalendarButton({


  title = 'Select date',
  color = '#CB3CFF',
  popupWidth = 220,
  popupHeight = 260,
  gap = 6, // distance between button and popup
}) {
  const [open, setOpen] = useState(false);
  const [popStyle, setPopStyle] = useState({});
  const btnRef = useRef(null);

  // Toggle open / close
  const handleToggle = () => setOpen((v) => !v);

  // Close on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (btnRef.current && !btnRef.current.contains(e.target)) setOpen(false);
    };
    if (open) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [open]);

  // Calculate safe position whenever popup opens
  useEffect(() => {
    if (!open || !btnRef.current) return;

    const rect = btnRef.current.getBoundingClientRect();
    let left = rect.left;
    let top = rect.bottom + gap;

    // Horizontal overflow → shift left
    if (left + popupWidth > window.innerWidth) {
      left = Math.max(0, window.innerWidth - popupWidth - gap);
    }
    // Vertical overflow → open above
    if (top + popupHeight > window.innerHeight) {
      top = rect.top - popupHeight - gap;
    }

    setPopStyle({
      left,
      top,
      width: popupWidth,
      position: 'fixed',
      zIndex: 50,
    });
  }, [open, popupWidth, popupHeight, gap]);

  return (
    <>
      {/* BUTTON */}
      <div
        ref={btnRef}
        onClick={handleToggle}
        className="relative h-[30px] px-4 whitespace-nowrap flex items-center rounded-[4px] shadow-md cursor-pointer select-none"
        style={{ backgroundColor: color }}
      >
        <FaCalendar className="text-[#AEB9E1] mr-2" />
        <span className="text-sm text-white">{title}</span>
        <IoChevronDown
          className={`text-[#AEB9E1] ml-2 transform transition-transform duration-600 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </div>

      {/* POPUP CALENDAR */}
      {open && (
        <div style={popStyle} className="bg-[#0B1739] shadow-md rounded absolute">
          <Mcalendar />
        </div>
      )}
    </>
  );
}
