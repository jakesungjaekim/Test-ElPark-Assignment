import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

const DetailPage = () => {
  const params = useParams()
  const [selectedMusicData, setSelectedMusicData] =  useState([])
  const {id} = params;

  useEffect(() => {
    axios.get(`/data/MockData-chart.json`)
    .then(res => {
      const modifiedData = res.data.feed.entry.map((music) => {
        const releaseData = music['im:releaseDate'].label.split('T')[0].split('-').slice(1).join('.');
        return {
          ...music,
          releaseData
        };
      });
      setSelectedMusicData(modifiedData);

      const selectedData = modifiedData.filter((music) => {
        return music.id.attributes['im:id'] === id
      })
      setSelectedMusicData(selectedData)
    })
    .catch(err => {
      console.log(err)
    })
  }, [params])
  

  return (
    <div className='flex items-center justify-center min-h-screen bg-cyan-50'>
      <div className="container px-3 py-6 m-3 space-y-10 bg-white shadow-2xl rounded-3xl md:p-20">
        {
          selectedMusicData.map((music) => {
            return (
              <article className="flex flex-row space-x-10 justfity-between md:w-full" key={music.id.attributes['im:id']}>
                <img 
                  src={music['im:image'][2].label}
                  alt="selected-music" 
                  className="w-1/2 duration-200 rounded-2xl hover:scale-105 "
                />
                <div className="flex flex-col justify-between w-1/2 space-y-1 items-between md:space-y-4 md:text-left">
                  <h1 className="detailLabelH1">{music['im:name'].label}</h1>
                  <p className="detailLabelP">
                     <span className="detailLabelSpan">Title: </span>
                    {music.title.label}
                  </p>
                  <p className="detailLabelP">
                    <span className="detailLabelSpan">Artist: </span>
                    {music['im:artist'].label}
                  </p>
                  <p className="detailLabelP">
                  <span className="detailLabelSpan">Release:</span> 
                    {music['im:releaseDate'].attributes.label}
                  </p>
                  <p className="detailLabelP">
                    <span className="detailLabelSpan">Price:</span>
                    {music['im:price'].label}
                  </p>
                  <p className="detailLabelP">
                    <span className="detailLabelSpan">Rights: </span>
                    {music.rights.label}
                  </p>
                  <div className="flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row">
                    <button className="detailBtn">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                      </svg>
                      <span>Add to cart</span>
                    </button>
                    <button className="detailBtn">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                      </svg>
                      <span>Add to wishlist</span>
                    </button>
                  </div>
                </div>
              </article>
            )
          })
        }
      </div>
    </div>
  )
}

export default DetailPage