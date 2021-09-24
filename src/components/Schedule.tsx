import React from "react";

const schedules = [
  {
    day: 'Tuesday',
    color: '#f2f5f2',
    textColor: 'text-red-500',
    subs : ['Network Technology and Architecture', 'Computing Theory'],
    time: ['9:30am - 12:00pm','12:00pm - 2:00']
  },
  {
    day: 'Wednesday',
    color: '#fee9e9',
    textColor: 'text-green-800',
    subs : ['Calculus', 'Network Technology and Architecture','CS Elective 2','Network Principles'],
    time: ['8:00am - 9:30am','9:30am - 12:00pm','12:30pm - 3:00pm','6:00pm - 8:00pm']
  },
  {
    day: 'Thursday',
    color: '#e6f3f3',
    textColor: 'text-green-800',
    subs : ['Network Principles','Web Programming','Calculus','Computing Theory'],
    time: ['9:30am -12:00pm','12:30pm - 3:00pm','6:00pm - 7:30pm','']
  },
  {
    day: 'Friday',
    color:'#f2f5f2',
    textColor: 'text-blue-900',
    subs : ['CS Elective 2', 'Web Programing','Software Engineering'],
    time: ['9:30am -12:00pm', '12:30am - 3:00pm','6:00pm - 8:30pm']
  },
];

export default function daily() {
  return (
    <div>
      {schedules.map(({day,subs,time,color,textColor}) => (
        <div className = {`grid grid-cols-8 font-secondary font-bold mx-20 h-32 rounded-lg mt-1 bg-[${color}]`}>
            <h2 className = {`pt-2 pl-4 text-lg ${textColor}`}>{day}</h2>
            <div className = "mt-3 text-normal font-normal col-start-3 col-span-2">
              {subs.map((sub) => {
                return <p>{sub}</p>
              })}
            </div>
            <div className = "mt-3 col-start-6 text-normal font-normal">
              {time.map((time) => {
                return <p>{time}</p>
              })}
            </div>
        </div>
      ))}
    </div>
  );
}