import {Routes, Route} from 'react-router-dom';
import Nav from './components/Nav';
import Page01 from './pages/01';
import Page02 from './pages/02';
import Page03 from './pages/03';


function App() {
  

  return (
    <>
      <header>
        <Nav></Nav>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Page01/>}/>
          <Route path="/employer-details/:id" element={<Page02/>}/>
          <Route path="/deneme" element={<Page03/>}/>
          <Route path="*" npm element={<h2>404 Page not found </h2>} />
        </Routes>
      </main>
       
    </>
  )
}

export default App
