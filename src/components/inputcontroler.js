import { useSelector, useDispatch } from 'react-redux';
// import { update } from '../../store/formSlice';
import { update } from '../redux/formSlice';

export default function Inputcontroler({ inputData: { name, type, label, placeholder } }) {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.formReduxData);
    return (
        <>
            <div className="input_box">
                <label htmlFor={name}>{label}</label>
                <input required id={name} name={name} placeholder={placeholder} type={type} value={formData[name]||""} onChange={(e) => { dispatch(update({ name: e.target.name, value: e.target.value })) }} />
            </div>
        </>
    )
}