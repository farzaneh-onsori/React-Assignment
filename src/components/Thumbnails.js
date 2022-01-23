export default function Thumbnails(props){
    return (
        <img src={props.image} style={
            {
                border : props.selectedId === props.id ? '3px solid red' : ''
            }
        }/>
    )
}