"use client"
import { useSearchParams } from 'next/navigation';
import Image from "next/image";
import * as React from 'react'
import { IShow } from '../interfaces/show/Show';
import ShowCard from '../components/ShowCard';
import Searchbar from '../components/Searchbar';
import LoadingSpinner from '../components/LoadingSpinner';

export const Shows = () => {

    const [shows, setShows] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const [isError, setIsError] = React.useState(false);

    const searchParams = useSearchParams()


    const searchQuery = searchParams && searchParams.get("q");

    async function getShows() {
        if(searchQuery && searchQuery.length > 0) {
            try {
                setIsLoading(true);
                const data = await fetch(`https://api.tvmaze.com/search/shows?q=${searchQuery}`);
                const result = await data.json();
                const posts = result.map((s: {score: number, show: IShow}) => {return s.show})
                setShows(posts)
            } catch(e) {
                setIsError(true)
                console.error( `Failed to get shows: ${e}`)
            }
            setIsLoading(false)
        }
        else {
            try {
                setIsLoading(true)
                const data = await fetch(`https://api.tvmaze.com/shows`)
                const posts = await data.json()
                setShows(posts)
            } catch(e) {
                setIsError(true)
                console.error( `Failed to get shows: ${e}`)
            }
            setIsLoading(false)
        }
      }

    React.useEffect(() => {
      getShows();

    }, [searchQuery])


    return (
        <>
        <div className="grid-container-two-item page-header">
        <div className="grid-item">
              <Image src="/tvm-header-logo.png" alt="404" width={250} height={100} priority={true}/>
            </div>
      <div className="grid-item">
        <Searchbar searchParam="" />
      </div>
        </div>
        {
            isLoading ? (
              <LoadingSpinner />
            ) : (
                <div className="grid-container">
                {
                   isError ? (
                      <p>Something went wrong, check the console for more info</p> 
                   ) : (
                      shows.map((show:IShow) => (
                          <div key={show.id} className="grid-item">
                          <ShowCard name= {show.name} id= {show.id} rating= {show.rating.average} imageUrl= {show.image?.medium ?? "/not-found-img.png"} />
                        </div>
                        ))   
                   )
                }
              </div>
            )
        }
      </>
    )
}
export default Shows;