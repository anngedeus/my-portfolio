import {BrowserRouter, Route, Switch} from "react-router-dom"
import home from "./components/home"
import about from "./components/about"
import resume from "./components/resume"
import project from "./components/projects"
import NavBar from "./components/navbar"

function App() {
  return (
    <BrowserRouter>
    <NavBar />
      <Switch>
        <Route component={home} path='/' exact/>
        <Route component={about} path='/about' />
        <Route component={resume} path='/resume' />
        <Route component={project} path='/project' />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
