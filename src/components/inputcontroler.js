import { useSelector, useDispatch } from 'react-redux';
// import { update } from '../../store/formSlice';
import { update } from '../redux/formSlice';

export default function Inputcontroler({inputData: { id, name, type, label, placeholder } }) {
    const dispatch = useDispatch();
    const formData = useSelector((state) => state.formReduxData);

    let inputTypes;

  switch (type) {
    case 'radio':
        inputTypes = <input required id={id} name={name} placeholder={placeholder} type={type} value={label} checked={formData[name] === label} onChange={(e) => { dispatch(update({ name: e.target.name, value: e.target.value })) }} />
      break;
    default:
        inputTypes = <input required id={id} name={name} placeholder={placeholder} type={type} value={formData[name] || ""} onChange={(e) => { dispatch(update({ name: e.target.name, value: e.target.value })) }} />
      break;
  }

    return (
        <>
            <div className="input_box">
                <label htmlFor={id}>{label}</label>
                {inputTypes}
            </div>
        </>
    )
}