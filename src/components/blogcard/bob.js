import React, { Component } from 'react';
import './bob.css'
import bob from './img.JPG'
import { SEARCH_BASE_URL,
	  POPULAR_BASE_URL,  API_URL,  API_KEY,  IMAGE_BASE_URL,  BACKDROP_SIZE,
	  POSTER_SIZE,  REQUEST_TOKEN_URL,  LOGIN_URL,  SESSION_ID_URL,
       } from '../../config'
class Carded extends Component {
    constructor(props) {
        super(props);
    }
    state = { 
        
    }
    
    render() { 
        return ( 
                <div class="card" style={{backgroundImage:`url(${IMAGE_BASE_URL+BACKDROP_SIZE+this.props.img_url})`}}>

                </div>
   
         );
    }
}
 
export default Carded;
