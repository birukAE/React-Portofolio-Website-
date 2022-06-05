import './App.css'
import  Homepage from "./homepage/homepage"
import SignIn from "./Sign-in/Sign-in";
import {BrowserRouter as Router, Route,Routes} from  'react-router-dom'
import Project1 from './portocontainer/Portofolio/project1';
import Project2 from './portocontainer/Portofolio/project2';
import Project3 from './portocontainer/Portofolio/project3';
import Project4 from './portocontainer/Portofolio/project4';


function App() {
  return (
    <> <Router>
    
     <Routes>
       <Route path='/' exact element={ <Homepage />}   />
      </Routes>
      <Routes>
       <Route path='/signin' exact element={<SignIn />}   />
      </Routes>
      <Routes>
       <Route path='/project1' exact element={<Project1 />}   />
      </Routes>
      <Routes>
       <Route path='/project2' exact element={<Project2 />}   />
      </Routes>
      <Routes>
       <Route path='/project3' exact element={<Project3 />}   />
      </Routes>
      <Routes>
       <Route path='/project4' exact element={<Project4 />}   />
       </Routes>
       <Routes>
       <Route path='/project5' exact element={<Project2 />}   />
      </Routes>
      <Routes>
       <Route path='/project' exact element={<Project1 />}   />
      </Routes>
      
    </Router>
    </>
    
  );
}

export default App;
