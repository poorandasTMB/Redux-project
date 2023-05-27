import { useSelector } from "react-redux";
const steps = [{
    number: "1",
    step: "STEP 1",
    info: "YOUR INFO"
}, {
    number: "2",
    step: "STEP 2",
    info: "SELECT PLAN"
}, {
    number: "3",
    step: "STEP 3",
    info: "ADD-ONS"
},
{
    number: "4",
    step: "STEP 4",
    info: "SUMMARY"
}]
export default function Aside() {
    const formData = useSelector((state) => state.formReduxData);

    return (
        <>
            <div className="aside_bar">
                <div>
                    <ul>
                        {steps.map((item, index) => {
                            return (
                                // Item Data
                                <li key={index}>
                                    <span className={`info_number ${formData.formStep === index + 1 ? "active" : ""}`}>{item.number}</span>
                                    <div>
                                        <span className="info_step">{item.step}</span>
                                        <span className="info">{item.info}</span>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                </div>
                <img src="aside.svg" alt="" />
            </div>
        </>
    )
}