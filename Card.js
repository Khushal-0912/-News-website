
import React from 'react'

const Card = ({ data }) => {
  console.log(data);

  const readMore = (url) => {
    window.open(url)
  }
  return (
    <div className='cardContainer'>
      {data && data.map((item, index) => {
        if (!item.urlToImage) {
          return (
            null
          )
        }
        else {

          return (
            <div className='card'>
              <img src={item.urlToImage}></img>
              <div className='content'>
                <a className='title' onClick={() => window.open(item.url)}>{item.title}</a>
                <p>{item.description}</p>
                <button onClick={() => readMore(item.url)}>Read More</button>
              </div>
            </div>
          )

        }


      })}
    </div>
  )
}

export default Card