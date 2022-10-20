import React from 'react';
import './body.css'
import { useState,useEffect } from 'react';
import Carded from '../components/blogcard/bob';
import { motion } from 'framer-motion'
import {useInView} from "react-intersection-observer"
import {useAnimation} from "framer-motion"
import { SEARCH_BASE_URL,
	  POPULAR_BASE_URL,  API_URL,  API_KEY,  IMAGE_BASE_URL,  BACKDROP_SIZE,
	  POSTER_SIZE,  REQUEST_TOKEN_URL,  LOGIN_URL,  SESSION_ID_URL,
       } from '../config'
const Body=(props)=>{
    const [toggle,settoggle]=useState(false)
    const {ref:article_ref,inView:article_view}=useInView()
    const {ref:projec_ref,inView:project_view}=useInView()
    const [dark,setdark]=useState(false)
    return(
	    <div ref={projec_ref} className="popular_movies">
	    {
		props.data.map((data,i)=>{
                        return(
                            <motion.div className='movie_container'  key={data.id}
			    initial={{opacity:0,transform:'scale(0)'}}
			    animate={project_view?{opacity:1, transform:'scale(1)'}:{}}
					transition= {{duration:1,delay:i*1.5}} > 
                                <Carded img_url={data.backdrop_path}/> 
                            </motion.div>
                        )
                    })
                }
	</div>
     )
}
export default Body;
