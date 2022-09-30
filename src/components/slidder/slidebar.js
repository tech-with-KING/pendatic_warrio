import React, { Component } from 'react';
import Card_componnt,{Carded} from '../cardbar/cardbar';
import {motion ,AnimatePresence} from 'framer-motion'
import './slidebar.css'

class Slide_Bar extends Component {
    constructor(props) {
        super(props);
	this.state = {
	    index:0,
	    loading:false,
	    results : []
	}
    };



    
    
    componentDidMount() {
	const set_movies = ()=>{
	    if(this.props.movies){
		this.setState({loading:true})
		
	    }
	}
	set_movies()
	const manimante= ()=>{

	    if(this.state.index == 3){
		this.setState({index:0})
	    }
	    else{
  		this.setState({index:this.state.index+1})
	    }
	}
	     const timerID = setInterval(() => manimante(), 5000);
	    return () => clearInterval(timerID);

	}
    // render function

    render() {
	// the animate array
	const {movies} = this.props
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
	    if(movies){
			return ( 
		<div class="slideshow-container" style={{backgroundImage:`url(${datas[2].img})`}}>   
                <div class="mySlides" >
				<h1>{console.log('hello '+this.prop.movies[0].adult)} hello</h1>
		<AnimatePresence exitBeforeEnter>
                <motion.div
	                key={index}
	    exitBeforeEntry={true}
            initial={{opacity:1, translateX:"-100vw"}}
	    
                            animate={{opacity:1.5, translateX:"0vw"}}
            transition={{duration:1,ease:'easeOut'}}
	    exit={{translateX:"100vw", transition:{duration:0.5}}}
				>{console.log(this.props.movies)} </motion.div>
		</AnimatePresence>
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
}
 
export default Slide_Bar;
