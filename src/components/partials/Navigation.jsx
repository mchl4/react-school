import React from 'react'
import { FaCalendar, FaDashcube, FaDatabase, FaTiktok } from 'react-icons/fa'
import { FaGear, FaMessage, FaNoteSticky } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <aside className='px-4 py-6 w-[250px] text-primary h-screen border-r border-line '>
      <h2>School</h2>

      <ul className=' nav'>
        <li className='nav-link active'><Link to="#"><FaDashcube/>Dashboard</Link></li>
        <li className='nav-link'><Link to="#"><FaMessage/>Messenger</Link></li>
        <li className='nav-link'><Link to="#"><FaCalendar/>Calendar</Link></li>
        <li className='nav-link'><Link to="#"><FaDatabase/>Database</Link></li>
        <li className='nav-link'><Link to="#"><FaNoteSticky/>Attendance</Link></li>
        <li className='nav-link'><Link to="#"><FaGear/>Settings</Link></li>
      </ul>
    </aside>
  )
}

export default Navigation