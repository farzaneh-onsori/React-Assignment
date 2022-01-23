export default function LeftImage(props){
    return(
        <div className="left-rail">
        <button className= "btn btn-primary btn-lg" onClick={() => props.clickBtn(props.id)}>Image {props.id}</button>
        <br></br>
        <br></br>
        </div>
    )
   
}