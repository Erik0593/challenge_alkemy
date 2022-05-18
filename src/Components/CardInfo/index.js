import './index.css'

const CardInfo = (props) => {
    return(
        <div className="cardInfo mt-3">
            <img src={props.image} alt={props.alt} />
            <p>{props.textInfo}</p>
        </div>
    )
}

export default CardInfo