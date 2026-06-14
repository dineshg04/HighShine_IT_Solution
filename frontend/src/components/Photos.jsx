import React from 'react'
import "../App.css"
import photos from '../assets/groupphoto.jpg'
import { groupphoto, groupphoto1, officephoto, officephoto1, outingphoto } from '../assets/images';

const Photos = () => {
 

  const teamPhotos = [
  { bg: groupphoto1},
  { bg: photos },
  { bg: outingphoto},
  { bg: officephoto },
  { bg: officephoto1},
  
  ];


  const duplicatedPhotos = [...teamPhotos, ...teamPhotos,...teamPhotos ];

  return (
    <>
    <div className="bg-[#0d0b1e] py-20 px-6">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">
          Inside the World of Highshine
        </h2>
        <p className="text-gray-400 text-sm">Our People, Our Story</p>
      </div>



      <div className="overflow-hidden  w-full h-72 place-content-center">
  <div className="flex animate-scroll w-max">

    {duplicatedPhotos.map((photo, i) => (
            <img
                key={i}
                src={photo.bg}
                className={`flex-none w-auto h-72 rounded-4xl p-4 mr-3  hover:scale-125 transition-transform duration-300 shadow-lg`}
                />
           
          
        ))}
      </div> 
     </div> 




    </div>
    </>
  )
}

export default Photos