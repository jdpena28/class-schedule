import React from "react";
import {motion} from 'framer-motion'

const schedules = [
  {
    day: 'Monday',
    color: 'color4',
    textColor: 'text-gray-500',
    subs : ['Life and Works of Rizal', 'Social Issues & Professional Practices'],
    time: ['2:00PM - 5:00PM','5:30PM - 8:30PM'],
    link: ['','']
  },
  {
    day: 'Tuesday',
    color: 'color1',
    textColor: 'text-red-500',
    subs : ['Intelligent System','Network Administration','Usability & Human Computer Interaction'],
    time: ['7:00AM - 10:00AM','12:30PM - 2:30PM','3:00PM - 6:00PM'],
    link: ['','','']
  },
  {
    day: 'Wednesday',
    color: 'color2',
    textColor: 'text-green-800',
    subs : ['Software Engineering 2','Programming Languages','Application Development'],
    time: ['12:30PM - 2:30PM','3:00PM - 6:00PM','6:30PM - 8:30PM'],
    link: ['','','']
  },
  {
    day: 'Thursday',
    color: 'color3',
    textColor: 'text-green-800',
    subs : ['Software Engineering 2','Usability & Human Computer Interaction','Intelligent System'],
    time: ['7:00AM - 10:00AM','10:00AM - 12:00NN','12:30PM - 2:30PM'],
    link: ['','','https://meet.google.com/bts-zbzr-hap']
  },
  {
    day: 'Friday',
    color:'color1',
    textColor: 'text-blue-900',
    subs : ['Application Development','Programming Languages'],
    time: ['7:00AM - 10:00AM','12:30PM - 2:30PM'],
    link: ['','']
  },
];

let seconds = .8

export default function daily() {
  return (
    <div>
      {schedules.map(({day,subs,time,link,color,textColor}) => (
        <>
        <motion.h2 
        animate = {{x: ['-6000px', '0px']}}
        transition = {{duration: seconds += .2}}
        className = {`md:hidden font-secondary font-bold mx-1 text-sm md:text-lg ${textColor} justify-self-start`}>{day}
        </motion.h2>

        <motion.div 
        animate = {{x: ['-6000px', '0px']}}
        transition = {{duration: seconds += .2}}
        whileHover = {{scale: 1.04}}
        className = {`grid md:grid-cols-8 font-secondary font-bold mx-1 md:mx-20 h-32 rounded-lg mt-1 ${color}`}>
            <h2 className = {`h2tag md:pt-2 md:pl-4 text-sm md:text-lg ${textColor} justify-self-start`}>{day}</h2>
            <div className = "text-xs md:text-base font-normal col-start-3 col-span-2 self-center">
              {subs.map((sub,index) => {
                return <p key={index} className = 'w-full'>{sub}</p>
              })}
            </div>
            <div className = "col-start-6 text-xs md:text-base font-normal self-center">
              {time.map((time,index) => {
                return <p key={index} className = 'w-full'>{time}</p>
              })}
            </div>
            <div className = 'col-start-8 text-xs md:text-base font-normal self-center'>
              {
                link.map((link,index) => {
                  if (link !== '') {
                    return <a key={index} href={`${link}`}><p className ='underline text-blue-800'>G-Meet Link</p></a>
                  }
                  else {
                    return <p>&nbsp;</p>
                  }
                })

              /* {link.map((link) => {
                return <a href={`${link}`}><p className = 'underline text-blue-800'>G-Meet Link</p></a>
              })} */}
            </div>
        </motion.div>
      </>
      ))}
    </div>
  );
}