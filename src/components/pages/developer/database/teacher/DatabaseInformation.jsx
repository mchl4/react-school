import React from 'react'
import { FaArrowRight, FaTimes } from 'react-icons/fa'
import { LiaEnvelope, LiaKeySolid } from 'react-icons/lia'

const DatabaseInformation = ({showInfo, studentInfo,setShowInfo}) => {
    const handleClose = () => setShowInfo(false)
  return (

    
    <div className={`information absolute transition-all border-l border-line h-[calc(100vh-65px)]  w-1/4 ${showInfo ? "right-0 " : "-right-1/4 "}`}>
        <button className='absolute top-0 left-0 size-10 grid place-content-center bg-secondary text-content' onClick={handleClose}><FaArrowRight/></button>
    <div className='p-10'>
        <div className='text-center mb-8'>
            <img src="https://via.placeholder.com/100x100" alt=""  className='size-[100px] mx-auto object-cover rounded-full mb-4'/>
            <h3 className='mb-1'>{studentInfo.student_name}</h3>
            <small className='opacity-50'>{studentInfo.student_class}</small>
            <ul className='flex gap-5 mt-5 justify-center'>
                <li><button className='tooltip text-2xl' data-tooltip="Account"><LiaKeySolid/></button></li>
                <li><button className='tooltip text-2xl' data-tooltip="Email"><LiaEnvelope/></button></li>
            </ul>
        </div>

        <h4 className='mb-3'>About</h4>
        <p className='text-xs'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae eveniet nostrum sit explicabo, accusamus autem animi dicta quo esse quidem.</p>
        <div className="grid grid-cols-2 gap-4 mt-8">

            <div className='info-box'>
                <h4>Age</h4>
                <p className='text-xs'>{studentInfo.student_age}</p>
            </div>
            <div className='info-box'>
                <h4>Gender</h4>
                <p className='text-xs'>{studentInfo.student_gender}</p>
            </div>
            <div className='info-box'>
                <h4>Date of birth</h4>
                <p className='text-xs'>2 January 2003</p>
            </div>
            <div className='info-box'>
                <h4>Email</h4>
                <p className='text-xs'>{studentInfo.student_email}</p>
            </div>

        </div>
    </div>
</div>
  )
}

export default DatabaseInformation