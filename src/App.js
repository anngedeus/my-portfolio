import {BrowserRouter, Route, Switch} from "react-router-dom"
import react from 'react'
import home from "./components/Home"
import about from "./components/About"
import resume from "./components/Resume"
import project from "./components/Projects"
import NavBar from "./components/Navbar"
import research from "./components/projectDescriptions/Research"
import portfolio from "./components/projectDescriptions/Portfolio"
import teamtech from "./components/projectDescriptions/TeamTech"
import "./App.css"


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar />
    <div className="Sections">
      <Switch>
        <Route component={home} path='/' exact/>
        <Route component={about} path='/About' />
        <Route component={resume} path='/Resume' />
        <Route component={project} path='/Project' />
        <Route component={research} path='/Research' />
        <Route component={teamtech} path='/TeamTech' />
        <Route component={portfolio} path='/Portfolio' />
      </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
