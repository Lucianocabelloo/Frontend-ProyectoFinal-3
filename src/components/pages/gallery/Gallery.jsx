import React, { useState } from 'react'
import { Container } from 'react-bootstrap'
import  img1 from "../../../assets/img/room1.jpg"
import  img2 from "../../../assets/img/room2.jpg"
import  img3 from "../../../assets/img/room3.jpg"
import  img4 from "../../../assets/img/room4.jpg"
import  img5 from "../../../assets/img/room5.jpg"
import  img6 from "../../../assets/img/room6.jpg"
import  img7 from "../../../assets/img/room7.jpg"
import  img8 from "../../../assets/img/room8.jpg"
import CarouselGalery from './CarouselGalery'
import "./gallery.css"

const Gallery = () => {

    const data = [
        {
        id: 1,
        imgSrc: img1
    },
        {
        id: 2,
        imgSrc: img2
    },
    {
        id: 8,
        imgSrc: img8
    },
    {
    id: 5,
    imgSrc: img5
},
        {
        id: 3,
        imgSrc: img3
    },
        {
        id: 4,
        imgSrc: img4
    },
        {
        id: 6,
        imgSrc: img6
    },
        {
        id: 7,
        imgSrc: img7
    },

    
]
const [model, setModel] = useState(false)
const [tempImgSrc, setTempImgSrc] = useState("")
const getImg = (imgSrc)=> {
    setTempImgSrc(imgSrc)
    setModel(true)
}

  return (
    <Container fluid className='my-5'>
        <CarouselGalery/>
        <div className={model? "model open": "model"}>
        <img src={tempImgSrc}></img>
            <svg onClick={() => setModel(false)} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
  <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z"/>
</svg>
        </div>
        <h2>Gallery</h2>
        <div className='gallery'>
            {
                data.map((item, index) => {
                    return(
                        <div className='pics' key={index} onClick={()=> getImg(item.imgSrc) }>
                            <img src={item.imgSrc} alt={`Room ${item.id}`} style={{width: '100%'}} />
                        </div>
                    )
                })
            }
        </div>
    </Container>
  )
}

export default Gallery