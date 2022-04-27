import React from "react";
import ItemData from "./ItemData";

export default function Meme(){
    let url = "";
    const [num,setNum] = React.useState(0)
    const [memeImage,setMemeImage] = React.useState("")
    const memesArray = ItemData.data.memes;
      
    // latihan 2
    const [items,setItems] = React.useState([]);
    const printItems = items.map((item)=>{
        return <p key={item}>{item}</p>
    })

    function addItem(){
        setItems(prevItems => {
            return [...items,`item ${items.length+1}`]
        })
    }

    function getMemeImage(){
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[randomNumber].imageUrl)
         console.log("click" + memeImage);
    }


    function handleClick(){
        setNum(prevNum => prevNum +1);
    }

     // latihan 3
     const [profile,setProfile] = React.useState(
        {
            "name":"sukma",
            "alamat" : "surabaya",
            "phone" :"1234",
            "is_favorite" : "false"
        }
    )

    let is_favorite = profile.is_favorite ? memesArray[0].imageUrl :memesArray[1].imageUrl

    function setFavorite(){
        // setProfile(prevProfile => ({
        //     ...prevProfile,
        //     is_favorite : !prevProfile.is_favorite
        // }))
        setProfile(prevProfile => {
            return {
                ...prevProfile,
                is_favorite : !prevProfile.is_favorite
            }
        })
    }

    // end latihan 3

    //  latihan 4
    const [memesObj,setMemeObj] = React.useState(
        {
            "upText" :"",
            "botText" : "",
            "img" : "http://i.imgflip.com/bij.jpg"
        }
    )

    function updateMemeObj(){
        setMemeObj(prevObj =>{
            return {

            }
        })
    }
    //  end 

    return (
    <div className='test-body'>
          <main>
              <div className="form">
                <img width="30%" src={is_favorite} />
                <br/>
                <p  className="form-input">Nama : {profile.name}</p>
                <br/>
                <p  className="form-input">Alamat : {profile.alamat}</p>
                <br/>
                <p  className="form-input">telp : {profile.phone}</p>
                <br/>
                  <input type="text" className="form-input" name="upText" id="upText"/>
                  <input type="text" className="form-input" name="botText" id="botText" value={num}/>
                  <button onClick={setFavorite} className="form-button">Pilih gambar</button>
                  {/* <button onClick={getMemeImage} className="form-button">Pilih gambar</button> */}
                  <img className="form-picture" src={memeImage} />
                  {printItems}
              </div>
          </main>
      </div>
    )
}