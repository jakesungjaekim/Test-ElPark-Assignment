import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const Search = () => {
  const [musicData, setMusicData]= useState([])
  const [searchMusic, setSearchMusic] = useState('')
  const [sortOption, setSortOption] = useState('')
  
  const filteredMusic = musicData.filter((music) => {
    return music['im:name'].label.toLowerCase().includes(searchMusic.toLowerCase())
  }) 

  const handleSearch = (e) => {
    setSearchMusic(e.target.value)
  }
  const handleSortOptionChange = (e) => {
    setSortOption(e.target.value)
  }

  useEffect(() => {
    axios.get('/data/MockData-chart.json')
    .then(res => {
      const modifiedData = res.data.feed.entry.map((music) => {
        const releaseData = music['im:releaseDate'].label.split('T')[0].split('-').slice(1).join('.')
        return {
          ...music, releaseData
        }
      })
      setMusicData(modifiedData)
    })
    .catch(err => {
      console.log(err)
    })
  },[])

  useEffect(()=>{
    if(sortOption === 'nameAsc') {
      const sortedMusicByNameAsc = [...musicData].sort((a,b) => {
        return a['im:name'].label < b['im:name'].label ? -1 : 1
      })
      setMusicData(sortedMusicByNameAsc)
    } else if (sortOption === 'nameDesc') {
      const sortedMusicByNameDesc = [...musicData].sort((a,b) => {
        return a['im:name'].label > b['im:name'].label ? -1 : 1
      })
      setMusicData(sortedMusicByNameDesc)
    }
  },[sortOption])

  useEffect(()=>{
    console.log(musicData)
  },[musicData])

  return (
    <>
     {/* Search Container */}
      <section className='flex flex-col justify-between space-y-5 md:flex-row md:space-y-0'>
          <div className='flex justify-between border-b'>
            <input 
              type="text"
              className="ml-6 border-none md:w-80 placeholder:font-thin focus:outline-none"  
              placeholder='Search'
              value={searchMusic}
              onChange={handleSearch}
              />
            <button>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                strokeWidth={1.5} 
                stroke="currentColor" 
                className="w-8 h-8 text-gray-300 duration-200 hover:scale-110">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
            </button>
          </div>
          <div className='flex flex-col items-center justify-center space-y-4 md:space-y-0 md:flex-row md:space-x-4'>
            <label className='text-xs text-zinc-400'>Sort By:</label>
           <select 
            value={sortOption} 
            onChange={handleSortOptionChange}
            className='text-sm text-zinc-700 border-none focus:outline-none'>
            <option value="nameAsc">오름차순</option>
            <option value="nameDesc">내림차순</option>
           </select>
          </div>

      </section>
      {/* Music Gallery Container */}
      <section className='grid gap-4 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-5'>
          {
            filteredMusic.map((music) => {
              return(
                <article className='relative group' key={music['id'].label}>
                  <Link to={`/detail/${music['id'].attributes['im:id']}`}>
                  <img 
                    src={music['im:image'][2].label} 
                    alt="music-list"
                    className='w-96'
                    />
                  </Link>
                  <div className='absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-40'>
                    <div className='flex justify-between w-full'>
                      <div className='font-normal'>
                        <p className="text-sm">{music['im:name'].label}</p>
                        <p className="text-xs">{music['im:artist'].label}</p>
                        <p className="text-xs">{music['im:releaseDate'].attributes.label}</p>
                      </div>
                      <div className='flex items-center'>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z" />
                      </svg>
                      </div>
                    </div>
                  </div>
                </article>
              )
            })
          }
         
      </section>
    </>
   
  )
}

export default Search