import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';

export default function Calendar({ initialMonth, initialYear }) {
  const [currentDate, setCurrentDate] = useState(dayjs());

  // Set month/year from props on first render
  useEffect(() => {
    if (initialMonth && initialYear) {
      const newDate = dayjs().set('month', initialMonth - 1).set('year', initialYear);
      setCurrentDate(newDate);
    }
  }, [initialMonth, initialYear]);

  const startOfMonth = currentDate.startOf('month');
  const endOfMonth = currentDate.endOf('month');
  const startDay = startOfMonth.day(); // 0 = Sunday
  const totalDays = endOfMonth.date();

  const daysOfWeek = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

  const prevMonth = () => setCurrentDate(currentDate.subtract(1, 'month'));
  const nextMonth = () => setCurrentDate(currentDate.add(1, 'month'));

  const generateDays = () => {
    const blanks = Array(startDay).fill(null);
    const days = Array.from({ length: totalDays }, (_, i) => i + 1);
    return [...blanks, ...days];
  };

  return (
    <div className="max-w rounded-2xl shadow p-4">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        {/* <button onClick={prevMonth} className="text-white px-2">‹</button> */}
        <h2 className="text-[14px] text-white">{currentDate.format('MMMM YYYY')}</h2>
        {/* <button onClick={nextMonth} className="text-white px-2">›</button> */}
      </div>

      {/* Days of Week */}
      <div className="grid grid-cols-7 gap-2 text-center text-[12px] text-white">
        {daysOfWeek.map((day) => (
          <div key={day} className="py-1">{day}</div>
        ))}
      </div>

      {/* Calendar Dates */}
      <div className="grid grid-cols-7 gap-2 mt-2 text-center text-[12px]">
        {generateDays().map((day, idx) => (
          <div
            key={idx}
            className={`h-6 flex items-center justify-center rounded-lg ${
              day === currentDate.date() && currentDate.isSame(dayjs(), 'month')
                ? 'text-white'
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
