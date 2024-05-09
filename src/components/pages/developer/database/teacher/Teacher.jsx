import React from 'react'
import Navigation from '../../../../partials/Navigation'
import Header from '../../../../partials/Header'
import { IoSearch } from 'react-icons/io5'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
// import { LiaEdit, LiaEnvelope, LiaHistorySolid, LiaKeySolid, LiaTrashAltSolid } from 'react-icons/lia'
// import { PiArchive } from 'react-icons/pi'
import DatabaseInformation from '../DatabaseInformation'
import useQueryData from '../../../../custom-hook/useQueryData'
import Toast from '../../../../partials/Toast'
import ModalDelete from '../../../../partials/modals/ModalDelete'
import ModalAddTeacher from './ModalAddTeacher'
import TeacherTable from './TeacherTable'
// import ModalError from '../../../../partials/modals/ModalError'
// import ModalValidate from '../../../../partials/modals/ModalValidate'
// import ModalConfirm from '../../../../partials/modals/ModalConfirm'
// import SpinnerWindow from '../../../../partials/spinners/SpinnerWindow'


const Teacher = () => {
const [showInfo, setShowInfo] = React.useState(false);
const [isAdd,setIsAdd] = React.useState(false)
const [isSuccess, setIsSuccess] = React.useState(false);
const [message, setMessage] = React.useState('')
const [itemEdit, setItemEdit] = React.useState(null);
const [teacherInfo,setTeacherInfo] = React.useState('');
const {
    isLoading,
    isFetching, 
    error,
    data: teacher,
  } = useQueryData(
    "/v1/teacher", // endpoint
    "get", // method
    "teacher" // key
  );
 
  const handleAdd = () => {
    setIsAdd(true)
    setItemEdit(null)
    
  }


  return (
    <>
    <section className='flex overflow-x-hidden'>
        <Navigation/>
        <main className='w-[calc(100%-250px)]'>
            <Header/>

            <div className='flex relative'>
                <div className={`main-wrapper  px-4 py-3 ${showInfo ? "w-3/4" : "w-full"}`}>
                    <div className='flex justify-between items-center'>
                        <h1>Database</h1>
                        <form action="" className='relative'>
                            <input type="text" placeholder='Search Teacher' className='p-1 px-3 pl-10 outline-none bg-stone-300/20 border bg-secondary border-stone-800 rounded-md placeholder:text-white/20' />
                            <IoSearch className='absolute top-1 left-2 z-20 text-white opacity-20 text-2xl'/>
                        </form>
                    </div>


                     <div className='tab flex justify-between items-center mt-8 border-b border-line mb-8'>
                         <ul className='flex space-x-10'>
                             <li className='tab-link active'><Link to="/database/sstudent">Student</Link></li>
                             <li className='tab-link'><Link to="/database/teacher">Teacher</Link></li>
                             <li className='tab-link'><Link to="/database/staff">Staff</Link></li>
                         </ul>
                         <button className='btn btn--accent'onClick={handleAdd}>
                             <FiPlus/> New 
                         </button>
                     </div>

                    <TeacherTable showInfo={showInfo}setTeacherInfo={setTeacherInfo} setShowInfo={setShowInfo} isLoading={isLoading} teacher={teacher} setItemEdit={setItemEdit} setIsAdd={setIsAdd} setIsSuccess={setIsSuccess} setMessage={setMessage}/>

                    </div>

                   <DatabaseInformation showInfo={showInfo} teacherInfo={teacherInfo} setShowInfo={setShowInfo}/>
            </div>
        </main>
    </section>
    {isAdd && <ModalAddTeacher setIsAdd={setIsAdd} setIsSuccess={setIsSuccess} setMessage={setMessage} itemEdit={itemEdit} isAdd={isAdd}/>  }
    {isSuccess && <Toast setIsSuccess={setIsSuccess} message={message}/>}
    
    {/* <ModalError position={"center"}/> */}
    {/* <ModalValidate position={"center"}/> */}
    
    {/* <SpinnerWindow/> */}

    </>
  )
}

export default Teacher