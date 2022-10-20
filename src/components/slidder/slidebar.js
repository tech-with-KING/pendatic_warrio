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
	    return ( 
		    <div className="slideshow-container" style={{backgroundImage:`url(${IMAGE_BASE_URL+BACKDROP_SIZE+this.props.movies})`}}>
		    <div className="mySlides" >
		    <h3>{this.props.title}</h3>
		    <p>{this.props.overview}</p>
                 </div>
                <div className="dot-container" >
		<a  ></a>
                    <span className="dot" ></span>
                    <span className="dot" ></span>
                <span className="dot"></span>

                </div>
		    <div className="search_bar" >

                </div>

            </div>
        
	); 
	    
	}


    
}
 
export default Slide_Bar;
