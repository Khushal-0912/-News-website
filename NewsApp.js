import React, { useEffect, useState } from 'react'
import Card from './Card';

function NewsApp() {
    const [search, setSearch] = useState("India")
    const [newsData, setNewsData] = useState(null)
    const API_KEY = '8ddd99e0e6784811bb72455053d56fe4';

    const getData = async () => {

        const response = await fetch(`https://newsapi.org/v2/everything?q=${search}&apiKey=${API_KEY}`);
        const jsonData = await response.json();
        console.log(jsonData.articles)
        setNewsData(jsonData.articles)
    }

    useEffect(()=>{
       getData() 
    },[])

    const handleInput = (e) => {
        console.log(e.target.value)
        setSearch(e.target.value)
       
    }

    const userInput = (e) =>{
        setSearch(e.target.value)

    }

    return (
        <div>
            <nav>
                <div>
                    <h1>Trendy News</h1>
                </div>

                <ul>
                    <a>All News</a>
                    <a>Trending</a>
                </ul>

                <div className='searchBar'>
                    <input type='text' placeholder='search news' value={search} onChange={handleInput}></input>
                    <button onClick={getData}>search</button>
                </div>
            </nav>

            <div className='categoryBtn'>
                <button onClick={userInput} value="Sports">Sports</button>
                <button onClick={userInput} value="Share market">Share market
                    
                </button>
                <button onClick={userInput} value="Politics">Politics</button>
                <button onClick={userInput} value="Entertaiment">Entertaiment</button>
                <button onClick={userInput} value="IT">IT</button>
                <button onClick={userInput} value="Health">Health</button>
            </div>

            <div>
               <Card data={newsData} />
                
            </div>

        </div>

    )
}

export default NewsApp