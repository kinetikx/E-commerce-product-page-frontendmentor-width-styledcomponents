import {useState} from 'react'
import { Productimagedisplay,Bigimage, Imagecatalog, Imagecatalogelement } from './Productimagesstyles'
import shoe1 from "../../../Assets/Shoes/shoe-1.jpg"
import shoe2 from "../../../Assets/Shoes/shoe-2.jpg"
import shoe3 from "../../../Assets/Shoes/shoe-3.jpg"
import shoe4 from "../../../Assets/Shoes/shoe-4.jpg"
const Productimages = () => {


  const images = [shoe1,shoe2,shoe3,shoe4]
  const [selectedimage, setSelectedimage] = useState(images[0]);
  
  const changeImage=(image)=>{
    setSelectedimage(image)
    console.log("image",image,"selectedimage:",selectedimage)

  }

  const isCheck = (image)=>{
    if(selectedimage==image){
      return true
    }
    else{
      return false
    }
  }

  return (
    <Productimagedisplay>
    <Bigimage src={selectedimage}/>
    <Imagecatalog>
    {images.map((image, key)=>{
      console.log("mapimage",image)
      return(
        <Imagecatalogelement src={image} checked={isCheck(image)} key={key} onClick={()=>changeImage(image)}/>
      )
    })}

    </Imagecatalog>
    </Productimagedisplay>
  )
}

export default Productimages