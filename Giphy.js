import './css/Popover.css'
import React,{useEffect, useState} from 'react'

import { ImageList,Modal} from '@material-ui/core'
const GIPHY_API = "https://api.giphy.com/v1/gifs/search?api_key=tZBbpvhnQE5A1dQte1quWodHTP4uVXIO";
function Giphy() {
    let [gifs, setGifs] = useState([])
    let [search, setSearch] = useState([])
    let [loadingState, setLoadingState] =useState(false)
    const [selectedGif, setSelectedGif] = useState("");

    const GIPHY_API = "https://api.giphy.com/v1/gifs/search?api_key=mnZTVEun15luziEmyAdoXf20xdSZqNhQ&limit=20&offset=0&q=";
    // const api_key = 'tZBbpvhnQE5A1dQte1quWodHTP4uVXIO'

    // useEffect(()=>{
    //   const fetchData = async ()=>{
    //     const result = await fetch(`${apiRoot}trending?api_key=${api_key}`);
    //   console.log(result);
    //   }
    // },[])


    let searchGif = () => {
      if(search.length > 0){
        setLoadingState(true);
        fetch(GIPHY_API+search)
        .then((res)=>{
          setLoadingState(false);
          return res.json();
        })
        .then((result)=>{
          console.log(result);
          setGifs(result.data.map((gif)=>{
            return gif.images.fixed_height.url;
          }))
        })
        .catch(()=>{
          alert("Something went wrong");
          setLoadingState(false);
        })
      }
    }
  return (
    
      <div>
      <div className="header">
        <div className='Input'>
          <input 
            className='input'
            type="text" 
            placeholder="Search GIF"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          />
          <button onClick={searchGif}>
            Search
          </button>

          <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>    



<div className="list">
  {
    gifs.map((gif,index)=>{
      return (
        <div className="item">
          <img src={gif} tabIndex={index} onClick={(e)=>{setSelectedGif(gif)}}/>  
        </div>
      )
    })

    
  }
</div>
</ImageList>


        </div>
      </div>
      <div className="result">
        {
          (loadingState) ? (
            <div className="loading">
              <div className="loader">
              </div>
            </div>
          ) : (

            <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>    



            <div className="list">
              {
                gifs.map((gif,index)=>{
                  return (
                    <div className="item">
                      <img src={gif} tabIndex={index} onClick={(e)=>{setSelectedGif(gif)}}/>  
                    </div>
                  )
                })

                
              }
            </div>
            </ImageList>
          )
        }
      </div>

      <div>
        <img src={selectedGif}></img>
      </div>
    </div>
    
  )
    
   
      
}

export default Giphy