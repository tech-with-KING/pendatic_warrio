import React, { Component } from 'react';
import './App.css';
import Body from './body/body';
import Modal from './components/modalbox/modalbox'
import Articles from "./article_page/index"
import Article from "./article_page/article_list"
import Slide_Bar from './components/slidder/slidebar'
import Top_Bar from './nav/topbar'
import DownBar from './root/bottom_bar';
import Projects from "./projects_page/index"
import Menue_Bar from './nav/menue'
import { BrowserRouter as Router, Routes, Route,Outlet } from "react-router-dom"


class App extends Component {
    state = {
	toggle: false
    }
    componentDidMount() {
	const api = async () => {
	    const ret = await fetch('https://api.themoviedb.org/3/movie/550?api_key=7c2dd11a7cca2cabc0ce2e539b616429')
	    const bar = await ret.json()
	    console.log(bar)
	}
	api()
    }

    render() {
	const { toggle } = this.state
	const set_toggle = () => { toggle ? this.setState({ toggle: false }) : this.setState({ toggle: true }) }
	const home = () => {
	    return (
		    <>
		    </>
	    )
	}
	return (
			<>
				<Router>
					<Menue_Bar toggle={toggle} />
					<Routes>
						<Route path="/" element={<><Slide_Bar /><Top_Bar toggle={toggle} set_toggle={set_toggle} /><Body /></>} />
						<Route path="/articles" element={<><Top_Bar toggle={toggle} set_toggle={set_toggle} /><Article /></>} />
		<Route path="/projects" element={<><Top_Bar toggle={toggle} set_toggle={set_toggle} /><Projects /></>} />

						<Route path="/articles/one" element={<><Top_Bar toggfle={toggle} set_toggle={set_toggle} /><Articles /></>} />
					</Routes>
					<DownBar />
				</Router>

			</>
		);
	}
}

export default App;
