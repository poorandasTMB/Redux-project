
// Import Header
import Header from "./formheader";
import Inputcontroler from './inputcontroler';
import { useDispatch, useSelector } from 'react-redux';
import { update } from '../redux/formSlice';


// Object Data 
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
                name: 'Phone number',
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
                id: "basic",
                name: 'plan',
                type: "radio",
                label: "Basic",
                value: "basic"
            },
            {
                id: "standard",
                name: 'plan',
                type: "radio",
                label: "Standard",
                value: "standard"
            },
            {
                id: "plus",
                name: 'plan',
                type: "radio",
                label: "Plus",
                value: "plus"
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
                id: "month1",
                name: 'quantity',
                type: "radio",
                label: "1 month",
                value: "1"
            },
            {
                id: "month6",
                name: 'quantity',
                type: "radio",
                label: "6 month",
                value: "6"
            },
            {
                id: "month12",
                name: 'quantity',
                type: "radio",
                label: "12 month",
                value: "12"
            },
            {
                id: "price",
                name: 'price',
                type: "input",
                label: "Price",
                readonly: true
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
                        <div className="form_header">
                            <h2 className="form_heading">Summary</h2>
                        </div>
                        <table>
                            <tbody>
                                {Object.entries(formData).map((item, index) => {
                                    if (item[0] === "formStep") return ""
                                    return (

                                        <tr key={index}>
                                            <td>{item[0]}</td>
                                            <td>{item[1]}</td>
                                        </tr>
                                    )
                                })}
                            </tbody>
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