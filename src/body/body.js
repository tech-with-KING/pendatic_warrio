import React from 'react';
import './body.css'
import { useState,useEffect } from 'react';
import Carded from '../components/blogcard/bob';
import { motion } from 'framer-motion'
import Carded_Two from '../components/blogcard/bob2';
import img from "./sc/img-removebg-preview.png"
import {useInView} from "react-intersection-observer"
import {useAnimation} from "framer-motion"
import About from "./about"
const Body=(props)=>{
    const [toggle,settoggle]=useState(false)
    const {ref:article_ref,inView:article_view}=useInView()
    const {ref:projec_ref,inView:project_view}=useInView()
    const [dark,setdark]=useState(false)
  const datas =[
      {
          id:1,
          text:"this is going to be some of the best articles yuo will ever get to read",
          img:'/img/pythondev1.jpeg',
	  name:'python/django'
	  
      },
      {
        id:2,
        text:"this is going to be some of the best articles yuo will ever get to read",
          img:'/img/bn.png',
	  name:'Reac/js'
    },
    {
        id:3,
        text:"this is going to be some of the best articles yuo will ever get to read",
        img:'/img/cforme.jpeg',
	name:'C'
    },
      {
        id:4,
        text:"this is going to be some of the best articles yuo will ever get to read",
        img:'/img/git.png',
	name:'git'
    }
  ]

    return(
            <div className='body'>
	    <div ref={projec_ref} className="popular_movies">
	    {
		props.data.map((data,i)=>{
                        return(
                            <motion.div key={data.id}
			    initial={{opacity:0,transform:'scale(0)'}}
			    animate={project_view?{opacity:1, transform:'scale(1)'}:{}}
					transition= {{duration:1,delay:i*1.5}} > 
                                <Carded img_url={data.backdrop_path}/> 
                            </motion.div>
                        )
                    })
                }
		    </div>
	    </div>    
     )
}
export default Body;
