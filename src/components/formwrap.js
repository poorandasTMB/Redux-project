
// Import Header
import Header from "./formheader";
import Inputcontroler from './inputcontroler';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../redux/formSlice';


let inputGroupList = [
    {
        headData: {
            heading: "Personal info",
            info: "Please provide your name,email address,and phone number."
        },
        inputGroup: [
            {
                name: 'name',
                type: "text",
                label: "Name",
                placeholder: "Enter your name"
            },
            {
                name: 'email',
                type: "email",
                label: "Email",
                placeholder: "Enter your email"
            },
            {
                name: 'PhoneNumber',
                type: "number",
                label: "Number",
                placeholder: "Enter your number"
            }
        ]
    },
    {
        headData: {
            heading: "Select plan",
            info: "Please select plan"
        },
        inputGroup: [
            {
                name: 'step',
                type: "text",
                label: "Name123456",
                placeholder: "Enter your name"
            },
            {
                name: 'email2ssd',
                type: "email",
                label: "Emailwee567",
                placeholder: "Enter your email"
            }
            ,
            {
                name: 'email2ssd',
                type: "email",
                label: "Emailwee567",
                placeholder: "Enter your email"
            }
        ]
    },
    {
        headData: {
            heading: "ADD-ONS",
            info: "Add on items"
        },
        inputGroup: [
            {
                name: 'aasdsasd',
                type: "text",
                label: "Namesada123456",
                placeholder: "Enter your name"
            },
            {
                name: 'asdasdasd',
                type: "email",
                label: "Emailwee567",
                placeholder: "Enter your email"
            }
        ]
    }

]



export default function Formwrapper() {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.formReduxData);
    const handlesubmit = (e) => {
        e.preventDefault()
    }

    return (
        <div className="form">
            {
                formData.formStep <= inputGroupList.length ?
                    <>
                        <Header headData={inputGroupList[formData.formStep - 1].headData} />
                        <form onSubmit={handlesubmit}>
                            {inputGroupList[formData.formStep - 1].inputGroup.map((item, index) => {
                                console.log(inputGroupList, formData.formStep - 1)
                                return <Inputcontroler inputData={item} key={index} />
                            })}
                        </form>
                    </>
                    :
                    <>
                        <table>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone number</th>
                            </tr>
                            <tr>
                                <td>{formData?.name}</td>
                                <td> {formData?.email}</td>
                                <td> {formData?.PhoneNumber}</td>
                                
                            </tr>
                        
                        </table>
{/* 

                        Name : {formData?.name}<br></br>
                        Email : {formData?.email}<br></br>
                        step : {formData?.step}<br></br>
                        email2 : {formData?.email2}<br></br> */}
                    </>
            }
            <div className='form_btn'>
                {formData.formStep > 1 && <button type='button' onClick={(e) => { dispatch(update({ name: "formStep", value: formData.formStep - 1 })) }}>Prev Step</button>}
                {formData.formStep <= inputGroupList.length && <button type='button' onClick={(e) => { dispatch(update({ name: "formStep", value: formData.formStep + 1 })) }}>Next Step</button>}
            </div>

        </div>
    )


}