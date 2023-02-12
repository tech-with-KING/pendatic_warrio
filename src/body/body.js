import React from 'react';
import './body.css'
import { useState,useEffect } from 'react';
import Carded from '../components/blogcard/bob';
import { motion } from 'framer-motion'
import {useInView} from "react-intersection-observer"
import {useAnimation} from "framer-motion"
const Body=(props)=>{
    const {ref:projec_ref,inView:project_view}=useInView()
    return(
	<>
	    <h1>Discover</h1>
	    <div ref={projec_ref} className="popular_movies">

	    {
		props.data.map((data,i)=>{
                        return(
                            <motion.div className='movie_container'  key={data.id}
			    initial={{opacity:0,transform:'scale(0)'}}
			    animate={project_view?{opacity:1, transform:'scale(1)'}:{}}
					transition= {{duration:1,delay:i*1}} > 
                                <Carded img_url={data.poster_path} id={data.id}/> 
                            </motion.div>
                        )
                    })
                }
	</div></>
     )
}
export default Body;
