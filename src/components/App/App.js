import './App.css';
import { HashRouter ,Route } from 'react-router-dom'; 
import Home from './../Home/Home';
import Skills from './../Skills/Skills'; 
import Navbar from './../Navbar/Navbar'; 
import GoHome from './../GoHome/GoHome';
import About from './../About/About'; 
import Contact from './../Contact/Contact';
import Projects from './../Projects/Projects';

function App() {
  return (
    <div>
            <HashRouter>
                <div>
                   <Navbar />
                    <Route path='/' exact component={Home} />
                    <Route path='/Skills' exact component={Skills} />
                    <Route path='/About' exact component={About} />
                    <Route path='/Contact' exact component={Contact} />
                    <Route path='/Projects' exact component={Projects} />
                    <GoHome/>
                </div>
            </HashRouter>
        </div>
  );
}

export default App;
