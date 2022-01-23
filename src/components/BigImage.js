export default function BigImage(props){
    return(
        <>
            <h3><a href={props.image.photographer_url}>{props.image.photographer}</a></h3>
            <img src={props.image.src.medium}/>
        </>
    )
}