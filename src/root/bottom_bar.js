import React from 'react';
import './bottom_bar.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import {FacebookSharp,GitHub, Twitter, LinkedIn, Instagram, ArrowDownward, ViewCarousel, ArrowDropUp, Email, YouTube, Message} from '@mui/icons-material';

const DownBar=()=>{
    return(
        <div className='downcomponent'>
            <div className='menue_bottom'>
                <ul className='menue_options' >
                    <li>home</li>
                    <li> Projects</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
                
            </div>
            <div className='our_socials'>
	    <div  className='modals'>
            <div className='goto_top'>
            <ArrowUpwardIcon style={{color:'white',fontSize:'30px',margin:"5px"}}/>
        </div>
	    </div>
            </div>
            <div className='text'>
            <p>copyright: Algophile.com 2021</p>
	    <p>Email: kingsley@algophile.com
	    </p>
                <p>This website was made responsively  with love
                </p>
            </div>
                
        </div>
    )
       
}
export default DownBar;
