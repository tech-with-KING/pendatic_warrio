import React, { Component } from 'react';
import Card_componnt,{Carded} from '../cardbar/cardbar';
import {motion ,AnimatePresence} from 'framer-motion'
import './slidebar.css'
import { SEARCH_BASE_URL,
	  POPULAR_BASE_URL,  API_URL,  API_KEY,  IMAGE_BASE_URL,  BACKDROP_SIZE,
	  POSTER_SIZE,  REQUEST_TOKEN_URL,  LOGIN_URL,  SESSION_ID_URL,
       } from '../../config'


class Slide_Bar extends Component {
    constructor(props) {
        super(props);
	this.state = {
	    index:0,
	    loading:false,
	    results : []
	}

    };
    render() {
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
	{

	    return ( 
		    <div class="slideshow-container" style={{backgroundImage:`url(${IMAGE_BASE_URL+BACKDROP_SIZE+this.props.movies})`}}>
		    <div class="mySlides" >
                 </div>
                <div class="dot-container" >
		<a  ></a>
                    <span class="dot" ></span>
                    <span class="dot" ></span>
                <span onClick={()=>{manimante()}}class="dot"></span>

                </div>

            </div>
        
	); 
	    
	}


    }
}
 
export default Slide_Bar;
