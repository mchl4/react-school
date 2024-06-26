import React from 'react'
import Navigation from '../../../../partials/Navigation'
import Header from '../../../../partials/Header'
import { IoSearch } from 'react-icons/io5'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
// import { LiaEdit, LiaEnvelope, LiaHistorySolid, LiaKeySolid, LiaTrashAltSolid } from 'react-icons/lia'
// import { PiArchive } from 'react-icons/pi'
// import ModalAddStudent from './ModalAddStudent'
import DatabaseInformation from '../DatabaseInformation'
import StaffTable from './StaffTable'
import useQueryData from '../../../../custom-hook/useQueryData'
// import ModalError from '../../../../partials/modals/ModalError'
// import ModalValidate from '../../../../partials/modals/ModalValidate'
// import ModalConfirm from '../../../../partials/modals/ModalConfirm'
// import SpinnerWindow from '../../../../partials/spinners/SpinnerWindow'


const Staff = () => {
const [showInfo, setShowInfo] = React.useState(false);

const {
    isLoading,
    isFetching,
    error,
    data: staff,
  } = useQueryData(
    "/v1/staff", // endpoint
    "get", // method
    "staff" // key
  );



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
                            <input type="text" placeholder='Search Student' className='p-1 px-3 pl-10 outline-none bg-stone-300/20 border bg-secondary border-stone-800 rounded-md placeholder:text-white/20' />
                            <IoSearch className='absolute top-1 left-2 z-20 text-white opacity-20 text-2xl'/>
                        </form>
                    </div>


                     <div className='tab flex justify-between items-center mt-8 border-b border-line mb-8'>
                         <ul className='flex space-x-10'>
                             <li className='tab-link '><Link to="/database/sstudent">Student</Link></li>
                             <li className='tab-link '><Link to="/database/teacher">Teacher</Link></li>
                             <li className='tab-link active'><Link to="/database/staff">Staff</Link></li>
                         </ul>
                         <button className='btn btn--accent'>
                             <FiPlus/> New 
                         </button>
                     </div>

                    <StaffTable showInfo={showInfo} setShowInfo={setShowInfo} isLoading={isLoading} staff={staff}/>

                    </div>

                   <DatabaseInformation showInfo={showInfo}/>
            </div>
        </main>
    </section>
    {/* <ModalAddStudent/> */}
    {/* <ModalError position={"center"}/> */}
    {/* <ModalValidate position={"center"}/> */}
    {/* <ModalConfirm position={"center"}/> */}
    {/* <SpinnerWindow/> */}

    </>
  )
}

export default Staff