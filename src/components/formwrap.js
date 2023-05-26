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
                id: "standard",
                name: 'radio',
                type: "radio",
                label: "standard",
            },
            {
                id: "medium",
                name: 'radio',
                type: "radio",
                label: "Medium",
            },
            {
                id: "high",
                name: 'radio',
                type: "radio",
                label: "High",
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
        e.preventDefault();
        dispatch(update({ name: "formStep", value: formData.formStep + 1 }))
    }

    return (
        <form className="form" onSubmit={handlesubmit}>
            {
                formData.formStep <= inputGroupList.length ?
                    <>
                        <Header headData={inputGroupList[formData.formStep - 1].headData} />
                        {inputGroupList[formData.formStep - 1].inputGroup.map((item, index) => {
                            return <Inputcontroler inputData={item} key={index} />
                        })}
                    </>
                    :
                    <>
                        <table>
                            {Object.entries(formData).map((item) => {
                                if (item[0] === "formStep") return ""
                                return (
                                    <tr>
                                        <td>{item[0]}</td>
                                        <td>{item[1]}</td>
                                    </tr>
                                )
                            })}
                        </table>
                    </>
            }
            <div className='form_btn'>
                {formData.formStep > 1 && <button type='button' onClick={(e) => { dispatch(update({ name: "formStep", value: formData.formStep - 1 })) }}>Prev Step</button>}
                {formData.formStep <= inputGroupList.length && <button type='submit'>Next Step</button>}
            </div>
        </form>
    )
}