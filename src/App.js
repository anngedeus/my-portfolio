import {BrowserRouter, Route, Switch} from "react-router-dom"
import home from "./components/home"
import about from "./components/about"
import resume from "./components/resume"
import project from "./components/projects"
import NavBar from "./components/navbar"
import { useEffect } from "react"
import React, {useState} from "react"


const viewportContext = React.createContext({});

const ViewportProvider = ({ children }) => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const handleWindowResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  return (
    <viewportContext.Provider value={{ width, height }}>
      {children}
    </viewportContext.Provider>
  );
};

const useViewport = () => {
  const { width, height } = React.useContext(viewportContext);
  return { width, height };
};

const MobileComponent = () => <p></p>;
const DesktopComponent = () => <p></p>;

const MyComponent = () => {
  const { width } = useViewport();
  const breakpoint = 620;

  return width < breakpoint ? <MobileComponent /> : <DesktopComponent />;
};


function App() {
  return (
    <ViewportProvider>
    <BrowserRouter>
    <NavBar />
    <MyComponent/>
      <Switch>
        <Route component={home} path='/' exact/>
        <Route component={about} path='/about' />
        <Route component={resume} path='/resume' />
        <Route component={project} path='/project' />
      </Switch>
    </BrowserRouter>
    </ViewportProvider>
  );
}

export default App;
