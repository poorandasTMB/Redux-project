
export default function Header({headData:{heading,info}}){
    return(
        <div>
            <h2 className="form_heading">{heading}</h2>
            <p className="form_info">{info}</p>   
        </div>
    )
}