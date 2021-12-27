import {BrowserRouter, Route, Switch} from "react-router-dom"
import home from "./components/home"
import about from "./components/about"
import resume from "./components/resume"
import project from "./components/projects"
import NavBar from "./components/navbar"
import "./App.css"


function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <NavBar />
    <div className="Sections">
      <Switch>
        <Route component={home} path='/' exact/>
        <Route component={about} path='/about' />
        <Route component={resume} path='/resume' />
        <Route component={project} path='/project' />
      </Switch>
      </div>
    </BrowserRouter>
    </div>
  );
}

export default App;
