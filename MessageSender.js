import { Avatar, Icon, IconButton, ImageList, Modal,ImageListItem  } from '@material-ui/core'
import React, { useState } from 'react'
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import CloseIcon from '@material-ui/icons/Close';
import "./css/messagesender.css"
import {db,Storage,Storageref} from './firebase';
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import './css/Popover.css' 




function MessageSender() {
    // const [{}, dispatch] = useStateValue();
    const [open, setOpen] = useState(false);
    const [image, setImage]=useState("");
    const [message, setMessage] = useState("");
    const [progress, setProgress]= useState(0);
    const[on ,setOn] = useState(false)

    let [gifs, setGifs] = useState([])
    let [search, setSearch] = useState([])
    let [loadingState, setLoadingState] =useState(false)
    const [selectedGif, setSelectedGif] = useState("");
    let[displayon,setDisplayon] = useState(false)

    const GIPHY_API = "https://api.giphy.com/v1/gifs/search?api_key=mnZTVEun15luziEmyAdoXf20xdSZqNhQ&limit=20&offset=0&q=";

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

      
    const handleClose=()=>{
        setOpen(false)
    }

    const uploadFilewithClick=()=>{
            document.getElementById("imageFile").click();
    }

    const handleChange=(e)=>{
        if(e.target.files[0])
        {
            setImage(e.target.files[0]);
        }
       
    
    }

    const handleUpload=(e)=>{
        e.preventDefault();
        if(image==="" && selectedGif.length<1 ) {
            db.collection("posts").add({
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                message:message,
                name:"sam",
                photoURL:"",
                

            }
            )
            handleClose();
            setProgress(0);
            setMessage("");
        }
        else if (selectedGif.length>0){
               
            db.collection("posts").add({
                timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                message:message,
                username:"shubham",
                photoURL:selectedGif,
                image:selectedGif
                
            });
            handleClose();
            setMessage("");
            setSelectedGif("");  
            
            

        }
        else
        {
            const uploadTask = Storage.ref(`images/${image.name}`).put(image);

            uploadTask.on(
                "state_changed",
                (snapshot)=>{
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgress(progress);
                },
                (error)=>{
                    console.log(error);
                    alert(error.message);
                },
                ()=> {
                    Storage.ref("images").child(image.name).getDownloadURL().then(url=>{
                        db.collection("posts").add({
                            timestamp:firebase.firestore.FieldValue.serverTimestamp(),
                            message:message,
                            username:"shubham",
                            photoURL:url,
                            image:url
                        });
                        handleClose();
                        setMessage("");
                        setImage("");
                        setProgress(0);
                    })
                }
            )

        }
       
    }

    const handleOpen = ()=>{
        setOpen(true)
    }


    // gif data
    const gifOption =(e)=>{
        if(e.target.files[0])
        {
            // setImage(e.target.files[0]);
            console.log(e.target.files[0]);
        }
        
    
    }

    const gifOptionClicked =(e)=>{
           const data= document.getElementById('GifImageFile')
           data.style.display = "block"
           
    }
    return (
        <>
        <Modal open={open} onClose={handleClose}>
            <div className="modal_pop">
                <form>
                    <div className="modalHeading">
                        <h3>Create Post</h3>
                        <IconButton onClick={handleClose}>
                            <CloseIcon/>
                        </IconButton>
                    </div>

                    <div className="modalHeader__top">
                        <Avatar src={""}/>
                        <h5>{"shubham"}</h5>
                    </div>

                    <div className="modalBody">
                        <textarea rows="4" placeholder="What's on your mind Shubham ?" onChange={e=>setMessage(e.target.value)}>{message}</textarea>
                        <img src={selectedGif}></img>
                    </div>

                    <div className="modalFooter">
                        <div className="modalFooterLeft">
                            <h4>Add to your post</h4>
                         </div>
                         <div className="modalFooterRight">
                            <IconButton onClick={uploadFilewithClick}>
                                <PhotoLibraryIcon fontSize="large" style={{color:'lightgreen'}}/>
                            </IconButton>

                            <input type="file" id="imageFile" onChange={handleChange} style={{display:"none"}}/>

                            <IconButton>
                                <VideoCallIcon fontSize="large"  style={{color:'red'}}/>
                            </IconButton>

                            <IconButton onClick={gifOptionClicked}>
                                <InsertEmoticonIcon fontSize="large"  style={{color:'#ffb100'}} />
                            </IconButton>

                            
                         </div>

                    </div>

                    
                    {image!=="" && <h2 style={{"fontSize": "15px",
    "marginBottom": "20px",
    "color": "green"}}>Image in added and will be displayed after clicking on post button</h2>}
                    
                    {
    progress!="" && <progress value={progress} max="100" style={{"width":"100%","marginBottom":"20px"}}/>
}


<div style={{display:"none"}} className="SubmitButton" id='GifImageFile'>
                        <input placeholder="search"  className='Input_1' id='GifImageFile' onChange={(e)=>setSearch(e.target.value)} onClick={searchGif}></input>

                        <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={164}>

<div className="list">
  {
    gifs.map((gif,index)=>{
      return (
        <div className="item">
            
          <img src={gif} tabIndex={index} onClick={(e)=>{setSelectedGif(gif)}}/>  
         
        {console.log(selectedGif)}
        
        </div>
      )
    })

    
  }
</div>   


 </ImageList>
 </div>




                    <input type="submit" onClick={handleUpload} className="post__submit" value="Post"/>

                    
                </form>
            </div>
                
            
        </Modal>
{/* modal */}




        <div className="messagesender">
                <div className="messagesender__top">
                    <Avatar src={".photoURL"}/>

                    <form>
                        <input type="text" placeholder="What's on you mind User?" onClick={handleOpen}/>
                    </form>
                </div>

                <div className="messagesender__bottom">
                    <div className="messangerOptions">
                        <VideoCallIcon style={{color:'red'}} fontSize="large"/>
                        <p>Live Video</p>
                    </div>

                    <div className="messangerOptions">
                        <PhotoLibraryIcon  style={{color:'lightgreen'}} fontSize="large"/>
                        <p>Photo/Video</p>
                    </div>

                    <div className="messangerOptions" > 
                        <InsertEmoticonIcon  style={{color:'#ffb100'}} fontSize="large"/>
                        <p>Feeling/Activity</p>
                    </div>
                   
                </div>
        </div>
        </>
    )
}

export default MessageSender
