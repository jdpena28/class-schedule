import React from "react";

const schedules = [
  {
    day: 'Tuesday',
    color: '#fee9e9',
    subs : ['Network Technology and Architecture', 'Computing Theory'],
    time: ['9:30am - 12:00pm','12:00pm - 2:00']
  },
  {
    day: 'Wednesday',
    color: '#e6f3f3',
    subs : ['Calculus', 'Network Technology and Architecture','CS Elective 2','Network Principles'],
    time: ['8:00am - 9:30am','9:30am - 12:00pm','12:30pm - 3:00pm','6:00pm - 8:00pm']
  },
  {
    day: 'Thursday',
    color: '#f9f8f5',
    subs : ['Network Principles','Web Programming','Calculus','Computing Theory'],
    time: ['9:30am -12:00pm','12:30pm - 3:00pm','6:00pm - 7:30pm','']
  },
  {
    day: 'Friday',
    color:'#f2f5f2',
    subs : ['CS Elective 2', 'Web Programing','Software Engineering'],
    time: ['9:30am -12:00pm', '12:30am - 3:00pm','6:00pm - 8:30pm']
  },
];

export default function daily() {
  return (
    <div>
      {schedules.map(({day,subs,time}) => (
        <div className = {`flex font-secondary font-bold mx-20 h-32 rounded-lg mt-1 bg-[#e6f3f3]`}>
            <h2 className = "pt-2 pl-4 text-lg">{day}</h2>
            <div>
              {subs.map((sub) => {
                return <p>{sub}</p>
              })}
            </div>
            <div>
              {time.map((time) => {
                return <p>{time}</p>
              })}
            </div>
        </div>
      ))}
    </div>
  );
}