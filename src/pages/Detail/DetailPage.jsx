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
      <div className="w-9/12 p-6 m-3 space-y-10 bg-white shadow-2xl rounded-3xl md:p-40 ">
        {
          selectedMusicData.map((music) => {
            return (
              <article className="flex flex-row space-x-6" key={music.id.attributes['im:id']}>
                <img 
                  src={music['im:image'][2].label}
                  alt="selected-music" 
                  className="w-1/2 object-cover rounded-2xl"
                />
                <div className="space-y-1 md:space-y-4">
                  <h1 className="text-2xl font-semibold md:text-4xl ">{music['im:name'].label}</h1>
                  <p className="text-sm font-normal md:text-2xl"></p>
                  <p className="text-sm font-normal md:text-2xl">
                    <span className="text-xs text-zinc-500 md:text-xl">Artist: </span>
                    {music['im:artist'].label}
                  </p>
                  <p className="text-sm font-normal md:text-2xl">
                  <span className="text-xs text-zinc-500 md:text-xl">Release:</span> 
                    {music['im:releaseDate'].attributes.label}
                  </p>
                  <p className="text-sm font-normal md:text-2xl">
                    <span className="text-xs text-zinc-500 md:text-xl">Price:</span>
                    {music['im:price'].label}
                  </p>
                  <p className="text-sm font-normal md:text-2xl">
                    <span className="text-xs text-zinc-500 md:text-xl">Rights: </span>
                    {music.rights.label}
                  </p>
                  <p className="text-sm font-normal md:text-2xl"> <span className="text-xs text-zinc-500 md:text-xl">Title: </span>
                  {music.title.label}
                  </p>
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