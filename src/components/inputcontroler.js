import { useSelector, useDispatch } from 'react-redux';
import { update } from '../redux/formSlice';

export default function Inputcontroler({ inputData: { id, name, type, label, placeholder, readonly = false, value } }) {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.formReduxData);
    let inputTypes;

    switch (type) {
        case 'radio':
            inputTypes = <input required id={id} name={name} placeholder={placeholder} type={type} value={value} checked={formData[name] === value} onChange={(e) => { dispatch(update({ name: e.target.name, value: e.target.value })) }} />
            break;

        default:
            inputTypes = <input readOnly={readonly} required id={id} name={name} placeholder={placeholder} type={type} value={formData[name] || ""} onChange={(e) => { dispatch(update({ name: e.target.name, value: e.target.value })) }} />
            break;
    }

    return (
        <>
            <div className={`input_box ${name=="plan" ||name=="quantity"?"plan":""}`}>
                <label htmlFor={id}>{label}</label>
                {inputTypes}
            </div>
        </>
    )
}