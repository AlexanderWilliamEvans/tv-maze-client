
import Image from "next/image";
import "../../styles/index.scss";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa6";
import '../../styles/showDetails.scss';
import StarRating from "@/app/components/StarRating";
import "../../styles/showDetailPage.scss";
import CastCard from "@/app/components/CastCard";
import { Suspense } from "react";
import LoadingSpinner from "@/app/components/LoadingSpinner";



 const MovieDetailPage = async({params}: {params: {id: string}}) => {

    const  {id} = await params;
    function removeTags(str: string) {
        if ((str === null) || (str === ''))
            return false;
        else
            str = str.toString();
        return str.replace(/(<([^>]+)>)/ig, '');
    }
    const res = await fetch(`https://api.tvmaze.com/shows/${id}?embed=cast`);
    const data = await res.json();
    return (
        <Suspense fallback={<LoadingSpinner />}>
                <div className="grid-container-one-item">
                    <div className="grid-item">
                    <Image src="/tvm-header-logo.png" alt="404" width={250} height={100} priority={true}/>
                    </div>
                    <div className="grid-item">
                    <Link href={"/"}>
                    <div className="go-back-link-btn">
                    <FaArrowLeft className="go-back-icon"/>
                    <span>Back to search results</span>
                    </div>
                    </Link>
                    </div>
                </div>  
            <div className="grid-container-two-item">
        <div className="grid-item">
        <Image  
            aria-hidden
            src={data.image?.medium ?? "/not-found-img.png"}
            priority={true}
            alt="File icon" 
            width={0}
            height={0}
            sizes="100vw"
            style={{height: "auto", width: "100%"}}
        />
        </div>
        <div className="grid-item">
        <h2 className="show-name-header">{data.name}</h2>
        <StarRating rating={data.rating.average} large={true} />
        <br />
        <p><b>Genres: </b>{data.genres.toString()}</p>
        <p className="show-summary-text">{removeTags(data.summary)}</p>
        <br />
            </div>
            </div>
            <div className="grid-container-one-item">
        <div className="grid-item">
        <h1 className="show-name-header">Cast</h1>
        <br />
        </div>
            </div>
            <div className="grid-container-two-item bt">
                {
                    data._embedded.cast.map((cast: { person: { id: number; name: string; image: { medium: string; }; }; character: {name: string} }, i: number) => (
                     <div key={`${i}-id-${cast.person.id}`} className="grid-item">
                        <CastCard id={cast.person.id} imageUrl={cast.person.image?.medium ?? "/not-found-img.png"} name={cast.person.name} character={cast.character.name} />
                      </div>
                      )
                    )
                }
            </div>
        </Suspense>
    )
}
export default MovieDetailPage;