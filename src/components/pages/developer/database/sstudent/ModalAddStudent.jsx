import React from 'react'
import { LiaTimesSolid } from 'react-icons/lia'
import ModalWrapper from '../../../../partials/modals/ModalWrapper'
import SpinnerButton from '../../../../partials/spinners/SpinnerButton'
import {Form, Formik} from 'formik'
import { InputSelect, InputText } from '../../../../helpers/FormInputs'
import * as Yup from 'yup'
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { queryData } from '../../../../helpers/queryData'
import { StoreContext } from '../../../../../store/StoreContext'
import { setIsAdd, setMessage, setSuccess } from '../../../../../store/StoreAction'

const ModalAddStudent = ({ itemEdit}) => {
const { dispatch } = React.useContext(StoreContext)

const handleClose = () => dispatch(setIsAdd(false))

const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (values) =>
        queryData(
            itemEdit ? `/v1/student/${itemEdit.student_aid}` : '/v1/student',
            itemEdit ? "put" : "post",
            values
        ),
        // ;

        onSuccess: (data) => {
        queryClient.invalidateQueries({ queryKey: ["student"] });
        if (data.success) {
           dispatch (setIsAdd(false));
           dispatch (setSuccess(true));
           dispatch (setMessage('Successfully updated.'));
        } else {
            // setIsError(true);
        }
      
        },
    });

    const initVal={
        student_name:itemEdit ? itemEdit.student_name : "",
        student_class:itemEdit ? itemEdit.student_class : "",
        student_gender:itemEdit ? itemEdit.student_gender : "",
        student_age:itemEdit ? itemEdit.student_age : "",
        student_email:itemEdit ? itemEdit.student_email : "",
        
        
    }
    const yupSchema = Yup.object({
        student_name: Yup.string().required("Required"),
        student_class: Yup.string().required("Required"),
        student_gender: Yup.string().required("Required"),
        student_age: Yup.number().required("Required"),
        student_email: Yup.string().required("Required"),
    })
  return (
        <ModalWrapper>
        <div className="main-modal w-[300px] bg-secondary text-content h-full">
                <div className="modal-header p-4"> <h2>New Student</h2> 
                <button className='absolute top-[25px] right-4'><LiaTimesSolid onClick={handleClose}/></button></div>
                <div className="modal-body p-4">
                    <Formik
                    initialValues={initVal}
                    validationSchema={yupSchema}
                    onSubmit={async(values)=>{
                        mutation.mutate(values)
                    }}
                    >
                        {(props)=>{
                            return(

                    <Form className='flex flex-col h-[calc(100vh-110px)]'>
                        <div className='grow'>
                            <div className="input-wrap">
                                <InputText
                                label="Name"
                                type="text"
                                name="student_name"
                                />
                            </div>

                            <div className="input-wrap">
                            <InputText
                                label="Class"
                                type="text"
                                name="student_class"
                                />
                            </div>

                            <div className="input-wrap">
                               <InputSelect label = "Gender" name="student_gender">
                               <option value="" hidden>Select</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                               </InputSelect>
                            </div>

                            <div className="input-wrap">
                            <InputText
                                label="Age"
                                type="number"
                                name="student_age"
                                />
                            </div>

                            <div className="input-wrap">
                            <InputText
                                label="Email"
                                type="email"
                                name="student_email"
                                />
                            </div>
                        </div>
                        
                        <div className='form-action'>
                            <button className='btn btn-form btn--accent ' type="submit">{mutation.isPending ? <SpinnerButton/> : "Add" }</button>
                            <button className='btn btn-form btn--cancel ' type="button" onClick={handleClose}>Cancel</button>
                        </div>
                    </Form>
                     )
                    }}
                    </Formik>
               
                </div>
            </div>
            </ModalWrapper>
    
  )
}

export default ModalAddStudent