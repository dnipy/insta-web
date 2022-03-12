import { useEffect, useState } from 'react'
import Slick from 'react-slick'


export default function Stories () {
    const [stories, setStories] = useState([])
    const [isLoad,setIsLoad] = useState(false)

    const responsive =[
        {
            breakpoint: 400,
            settings: {
              slidesToShow: 4,
              infinite: true,
            }
        },
        {
            breakpoint : 600 ,
            settings : {
                slidesToShow : 6,
                infinite:true
            }
        },
        {
            breakpoint : 800 ,
            settings : {
                slidesToShow : 8,
                infinite:true
            }
        },
        {
            breakpoint : 1200 ,
            settings : {
                slidesToShow : 9,
                infinite:true
            }
        },
        
    ]


    useEffect(()=>{
 
            
            fetch('http://jsonplaceholder.typicode.com/albums/1/photos')
                .then((data)=>data.json())
                .then((response)=>setStories(response))
                .then(()=>setIsLoad(true))
                .then(()=>{
                    console.log(stories);
                })
                .catch((e)=>console.log(e))
                .finally(()=>console.log('fetch ok'))
     
    },[])


    if(!isLoad){
        return(
            <div>
                loading
            </div>
        )
    }
    else {
        return(
            <div className="story-part">
                <Slick autoplay={false} draggable={true} speed={500} slidesToShow={8} responsive={responsive} >  
                    {stories.map((one)=>{
                        return (
                            <div key={one.id } className='single-story'>
                                <div className="story-item">
                                    <div className="inside-story">
                                        
                                    </div>
                                    <p>usr name</p>
                                </div>
                                
                            </div>
                            )
                    })}
                </Slick>
            </div>
        )
    }
 
}