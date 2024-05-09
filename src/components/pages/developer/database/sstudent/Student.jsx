import React from 'react'
import Navigation from '../../../../partials/Navigation'
import Header from '../../../../partials/Header'
import { IoSearch } from 'react-icons/io5'
import { FiPlus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
// import { LiaEdit, LiaEnvelope, LiaHistorySolid, LiaKeySolid, LiaTrashAltSolid } from 'react-icons/lia'
// import { PiArchive } from 'react-icons/pi'
import ModalAddStudent from './ModalAddStudent'
import StudentTable from './StudentTable'
import DatabaseInformation from '../DatabaseInformation'
import useQueryData from '../../../../custom-hook/useQueryData'
import Toast from '../../../../partials/Toast'
import ModalDelete from '../../../../partials/modals/ModalDelete'
import Searchbar from './Searchbar'
import { StoreContext } from '../../../../../store/StoreContext'
import { setIsAdd } from '../../../../../store/StoreAction'
// import ModalError from '../../../../partials/modals/ModalError'
// import ModalValidate from '../../../../partials/modals/ModalValidate'
// import ModalConfirm from '../../../../partials/modals/ModalConfirm'
// import SpinnerWindow from '../../../../partials/spinners/SpinnerWindow'


const Student = () => {
const { store, dispatch } = React.useContext(StoreContext);
const [showInfo, setShowInfo] = React.useState(false);
const [isSuccess, setIsSuccess] = React.useState(false);
const [message, setMessage] = React.useState('')
const [itemEdit, setItemEdit] = React.useState(null);
const [studentInfo,setStudentInfo] = React.useState('');
const [isSearch, setIsSeach] = React.useState(false)
const [keyword, setKeyword] = React.useState('');

const {
    isLoading,
    isFetching,
    error,
    data: student,
  } = useQueryData(
    isSearch ? "/v1/student/search" : "/v1/student", // endpoint
    isSearch ? "post" : "get", // method
    "student", // key
    {
        searchValue: keyword
    }
  );
 
  const handleAdd = () => {
    dispatch(setIsAdd(true));
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
                        <Searchbar setIsSeach={setIsSeach} setKeyword={setKeyword}/>
                        
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

                    <StudentTable showInfo={showInfo}setStudentInfo={setStudentInfo} setShowInfo={setShowInfo} isLoading={isLoading} student={student} setItemEdit={setItemEdit}  setIsSuccess={setIsSuccess} setMessage={setMessage}/>

                    </div>

                   <DatabaseInformation  studentInfo={studentInfo} setShowInfo={setShowInfo}/>
            </div>
        </main>
    </section>
    {store.isAdd && <ModalAddStudent itemEdit={itemEdit} />  }
    {store.success && <Toast/>}
    
    {/* <ModalError position={"center"}/> */}
    {/* <ModalValidate position={"center"}/> */}
    
    {/* <SpinnerWindow/> */}

    </>
  )
}

export default Student