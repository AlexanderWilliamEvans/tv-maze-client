"use client"
import * as React from 'react';
import '../styles/searchbar.scss';
import { useRouter } from "next/navigation";
import { ISearch } from '../interfaces/search/Search';

export default function Searchbar(properties: ISearch) {
    const { searchParam } = properties;
    const router = useRouter();
    
    const [inputValue, setValue] = React.useState(searchParam);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchString = e.target.value;
        setValue(searchString);
    }

    const handleSearch = () => {

        if (inputValue) return router.push(`/?q=${inputValue}`);

        if (!inputValue) return router.push("/")

    }
    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") return handleSearch()
    }


    return (
       <div className='search-container'>
        <input 
            type="text" 
            placeholder="Search on TV shows"   
            value={inputValue ?? ""} 
            onChange={handleChange}
            onKeyDown={handleKeyPress}
             />
        <button className="search-button" onClick={handleSearch}>Search</button>
       </div> 
    )
}