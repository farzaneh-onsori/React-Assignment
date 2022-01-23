import LeftImage from './components/LeftImage';
import BigImage from './components/BigImage';

import { useEffect, useState } from 'react';
import Thumbnails from './components/Thumbnails';

function App() {

  const [images, setImages] = useState([])
  const [selectedImage, setSelectedImage] = useState("")

  useEffect(() => {
  
    fetch('https://api.pexels.com/v1/search?query=nature&per_page=2', { 
      method: 'get', 
      headers: new Headers({
          'Authorization': '563492ad6f917000010000017f488949f5c24f7cb9fc4ad4069c1050', 
      }) })
      .then(res => res.json())
      .then(data => setImages(data.photos))
    
     
    }, [])
    
    console.log(images)

  function handleClickBtn(id){
    console.log("btn click : " + id)
    const foundimage = images.filter(img => {
      return img.id=== id
    })
    setSelectedImage(foundimage[0])
    console.log(foundimage[0])
  }

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-3'>
          <h1>left panel</h1>
          {images.map(i => 
            <LeftImage key={i.id} id={i.id} clickBtn={handleClickBtn}/>
          )}
        </div>
        <div className='col'>
          <div>
            <h1>top</h1>
            {selectedImage && <BigImage image={selectedImage}/>}
          </div>
          <div>
            <h1>bottom</h1>
            { images.map(i => 
              <Thumbnails key={i.id} id={i.id} image={i.src.tiny} selectedId={selectedImage.id} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
