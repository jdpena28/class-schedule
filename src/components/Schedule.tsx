import React from "react";

const schedules = [
  {
    day: 'Tuesday',
    color: 'color1',
    textColor: 'text-red-500',
    subs : ['Network Technology and Architecture', 'Computing Theory','Software Engineering'],
    time: ['9:30am - 12:00pm','12:00pm - 2:00','6:00pm - 8:30pm'],
    link: ['','https://meet.google.com/grn-mwie-qsi','meet.google.com/tbr-tpye-iyx']
  },
  {
    day: 'Wednesday',
    color: 'color2',
    textColor: 'text-green-800',
    subs : ['Calculus', 'Network Technology and Architecture','Parallel & Visual Computing','Network Principles'],
    time: ['8:00am - 9:30am','9:30am - 12:00pm','12:30pm - 3:00pm','6:00pm - 8:00pm'],
    link: ['','https://meet.google.com/wdq-bvne-zbd','','']
  },
  {
    day: 'Thursday',
    color: 'color3',
    textColor: 'text-green-800',
    subs : ['Network Principles and Programming','Web Programming','Calculus','Computing Theory'],
    time: ['9:30am -12:00pm','12:30pm - 3:00pm','3:30pm - 5:00pm','6:00pm - 7:30pm'],
    link: ['','','','']
  },
  {
    day: 'Friday',
    color:'color1',
    textColor: 'text-blue-900',
    subs : ['Parallel & Visual Computing', 'Web Programing','Software Engineering'],
    time: ['9:30am -12:00pm', '12:30am - 3:00pm','6:00pm - 8:30pm'],
    link: ['','https://meet.google.com/tuu-dhjc-dgf','']
  },
];

export default function daily() {
  return (
    <div>
      {schedules.map(({day,subs,time,link,color,textColor}) => (
        <>
        <h2 className = {`md:hidden font-secondary font-bold mx-1 text-sm md:text-lg ${textColor} justify-self-start`}>{day}</h2>
        <div className = {`grid md:grid-cols-8 font-secondary font-bold mx-1 md:mx-20 h-32 rounded-lg mt-1 ${color}`}>
            <h2 className = {`h2tag md:pt-2 md:pl-4 text-sm md:text-lg ${textColor} justify-self-start`}>{day}</h2>
            <div className = "text-xs md:text-base font-normal col-start-3 col-span-2 self-center">
              {subs.map((sub) => {
                return <p className = 'w-full'>{sub}</p>
              })}
            </div>
            <div className = "col-start-6 text-xs md:text-base font-normal self-center">
              {time.map((time) => {
                return <p className = 'w-full'>{time}</p>
              })}
            </div>
            <div className = 'col-start-8 text-xs md:text-base font-normal self-center'>
              {
                link.map((link) => {
                  if (link !== '') {
                    return <a href={`${link}`}><p className ='underline text-blue-800'>G-Meet Link</p></a>
                  }
                  else {
                    return <p></p>
                  }
                })

              /* {link.map((link) => {
                return <a href={`${link}`}><p className = 'underline text-blue-800'>G-Meet Link</p></a>
              })} */}
            </div>
        </div>
      </>
      ))}
    </div>
  );
}