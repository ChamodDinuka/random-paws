import './App.css';
import Header from './components/header/Header'
import NewFavourite from './components/newFavourite/newFavourite'
import Collection from './components/collection/collection'
import Alert from './components/alert/alert';
import { Routes, Route } from "react-router-dom";
import { useSelector } from 'react-redux'

function App() {
  const show = useSelector((state) => state.alert.show);
  return (
    <>
    {show ? <Alert/> : ''}
    <Header />
        <Routes>
          <Route path="/" element={<NewFavourite />} />
          <Route path="/collection" element={<Collection />} />
       </Routes>
    </>
  );
}

export default App;
