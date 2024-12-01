import { ICast } from "../interfaces/cast/Cast";
import Image from "next/image";
import "../styles/castCard.scss";

const CastCard = (properties: ICast) => {
const { imageUrl, name, character } = properties;

return (
    <div className="cast-card-container">
        <div className="cast-card-img-wrapper">
        <Image
                        aria-hidden
                        src={imageUrl}
                        alt="Image not found" 
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{height: "auto", width: "100%"}}
                       />
        </div>
        <div className="cast-card-text">
            <h5>{name}</h5>
            <span>As {character}</span>
        </div>
    </div>
)
}
export default CastCard;