import React, { Component } from 'react';
import Card_componnt,{Carded} from '../cardbar/cardbar';
import {motion ,AnimatePresence} from 'framer-motion'
import './slidebar.css'

class Slide_Bar extends Component {
    constructor(props) {
        super(props);
    }
    state = { index:0 }
    render() {
	        const animae=[
            {
                id:1,
                item:<Card_componnt/>,
            },
           {
               id:2,
               item: <Carded/>,
           },
           {
            id:3,
            item:   <Card_componnt/>
        },
        {
            id:4,
            item:  <Carded/>
        }
		]
	const{index}=this.state
 // setInterval(()=>{
 //     if(this.state.index == 3){
 // 	 this.setState({index:0})
 //     }
 //     else{
 // 	 this.setState({index:this.state.index+1})
 //     }
 //     	console.log(this.state.index)
 // },2000)
	const manimante= ()=>{
	      if(this.state.index == 3){
	 this.setState({index:0})
   }
    else{
  	 this.setState({index:this.state.index+1})
 }
	}
        return (  
          <div class="slideshow-container">   
                <div class="mySlides">
		<AnimatePresence exitBeforeEnter>
                            <motion.div 
            key={index}
	    	    exitBeforeEntry={true}
            initial={{opacity:1, translateX:"-100vw"}}
	    
                            animate={{opacity:1.5, translateX:"0vw"}}
            transition={{duration:1,ease:'easeOut'}}
	    exit={{translateX:"100vw", transition:{duration:0.5}}}
                            >{animae[index].item }</motion.div>
		</AnimatePresence>
                 </div>
                <div class="dot-container">
		<a  ></a>
                    <span class="dot" ></span>
                    <span class="dot" ></span>
                <span onClick={()=>{manimante()}}class="dot"></span>
		
                </div>

            </div>
        
 );
    }
}
 
export default Slide_Bar;
