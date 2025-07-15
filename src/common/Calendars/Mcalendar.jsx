
import React, { useState } from 'react';
import dayjs from 'dayjs';
export default function Mcalendar() {

    <div>Mcalendar</div>

  const [currentDate, setCurrentDate] = useState(dayjs());

  const startOfMonth = currentDate.startOf('month');
  const endOfMonth   = currentDate.endOf('month');
  const startDay     = startOfMonth.day();    // 0 = Sunday
  const totalDays    = endOfMonth.date();

  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const prevMonth = () => setCurrentDate(currentDate.subtract(1, 'month'));
  const nextMonth = () => setCurrentDate(currentDate.add(1, 'month'));

  const generateDays = () => {
    const blanks = Array(startDay).fill(null);
    const days   = Array.from({ length: totalDays }, (_, i) => i + 1);
    return [...blanks, ...days];
  };

  return (
    <div className="max-w rounded-2xl shadow p-4">
      {/* header with prev / next buttons */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={prevMonth} className="text-white px-2 hover:opacity-80">
          ‹
        </button>

        <h2 className="text-[14px] text-white">
          {currentDate.format('MMMM YYYY')}
        </h2>

        <button onClick={nextMonth} className="text-white px-2 hover:opacity-80">
          ›
        </button>
      </div>

      <div className="grid grid-cols-7 gap-2 text-center text-[12px] text-white">
        {daysOfWeek.map((day) => (
          <div key={day} className="py-1">{day}</div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-2 mt-2 text-center text-[12px]">
        {generateDays().map((day, idx) => (
          <div
            key={idx}
            className={`h-6 flex items-center justify-center rounded-lg ${
              day === currentDate.date() && currentDate.isSame(dayjs(), 'month')
                ? 'text-white'   // highlight today if you like
                : 'text-white'
            } ${!day ? 'invisible' : ''}`}
          >
            {day}
          </div>
        ))}
      </div>
    </div>
  );
}
