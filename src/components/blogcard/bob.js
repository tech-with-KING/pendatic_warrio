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
        <>
            <div class="container_" style={{width:'400px'}}>
                <div class="card_">
                    <div class="card__header">
                        <div className='project_img' style={{backgroundImage:`url(${IMAGE_BASE_URL+BACKDROP_SIZE+this.props.img_url})`}}></div>
                    </div>
                    <div class="card__body_">
                <span class="tag tag-red" >react</span>
                    <h4>Race to your heart content</h4>
                    <p style={{margin:'5px'}}>Loestiae ihil! At ea atque quidem!</p>
                    </div>
                    <div class="card__footer">
                        
                
                    </div>
                </div>
            </div>
        </>
         );
    }
}
 
export default Carded;
