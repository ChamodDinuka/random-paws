import './App.css';
import Header from './components/header/Header'
import NewFavourite from './components/newFavourite/newFavourite'
import Collection from './components/collection/collection'
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <Header />
        <Routes>
          <Route path="/" element={<NewFavourite />} />
          <Route path="/collection" element={<Collection />} />
       </Routes>
    </>
  );
}

export default App;
