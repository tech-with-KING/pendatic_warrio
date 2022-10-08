import React, { Component } from 'react';
import './App.css';
import Body from './body/body';
import {motion ,AnimatePresence} from 'framer-motion'
import Articles from "./article_page/index"
import Article from "./article_page/article_list"
import Slide_Bar from './components/slidder/slidebar'
import Top_Bar from './nav/topbar'
import DownBar from './root/bottom_bar';
import Projects from "./projects_page/index"
import Menue_Bar from './nav/menue'
import {fetch_movies} from './fetchapi'
import { BrowserRouter as Router, Routes, Route,Outlet } from "react-router-dom"


class App extends Component {
    constructor(props){
	super(props);
	this.state = {
	    toggle: false,
	    movies :[],
	    index:2,
	    loading:false,
	    loading:false
	    
    }}
    componentDidMount() {
	const manimante= ()=>{
	    if(this.state.index == 20){
		this.setState({index:0})
	    }
	    else{
  		this.setState((prev)=>{
		    return{index:prev.index+1}
		})
	    }

	}
	     const timerID = setInterval(() => manimante(), 5000);

	{/*timer fuction*/}
	try{
	    this.setState({loading:true})
	    this.setState({error:false})
	    const api = async () => {
		const movies = await fetch_movies()
		this.setState({movies:movies})
		
	    }
	    api(1)
	    	    this.setState({loading:false})
	}catch(error){
	    this.setState({error:true})
	}
		    return () => clearInterval(timerID);
    }

    render() {
	let {toggle} = this.state
	const set_toggle = () => { toggle ? this.setState({ toggle: false }) : this.setState({ toggle: true }) }
	const set_moves = () =>{
	    
	}
	const make_me = ()=>{

    return(
			<AnimatePresence exitBeforeEnter>
                <motion.div
	                key={this.state.index}
	    exitBeforeEntry={true}
            initial={{opacity:1, translateX:"-100vw"}}
	    
                            animate={{opacity:1.5, translateX:"0vw"}}
            transition={{duration:1,ease:'easeOut'}}
	    exit={{translateX:"100vw", transition:{duration:0.5}}}
	    >
	    <Slide_Bar movies = {this.state.movies[this.state.index].backdrop_path} />
	    </motion.div>
		</AnimatePresence>
    )
}

	return (
			<>
				<Router>
					<Menue_Bar toggle={toggle} />
					<Routes>
		<Route path="/" element={<>{this.state.movies[this.state.index] ?make_me() :null}<Top_Bar toggle={toggle} set_toggle={set_toggle} /><Body /></>} />
						<Route path="/articles" element={<><Top_Bar toggle={toggle} set_toggle={set_toggle} /><Article /></>} />
		<Route path="/projects" element={<><Top_Bar toggle={toggle} set_toggle={set_toggle} /><Projects /></>} />

						<Route path="/articles/one" element={<><Top_Bar toggfle={toggle} set_toggle={set_toggle} /><Articles /></>} />
					</Routes>
					<DownBar />
				</Router>

			</>
		);
	}
};

export default App;
