import Navbar from './components/Navbar';
import Footer from './components/Footer';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CategoriesScreen from './Screen/CategoriesScreen';
import HomeScreen from './Screen/HomeScreen';
import FavoriteScreen from './Screen/FavoriteScreen';
import ContactsScreen from './Screen/ContactsScreen';
import RecipeScreen from './Screen/RecipeScreen';
import SearchedScreen from './Screen/SearchedScreen';
import ErrorPage from './Screen/ErrorPage';


function App() {
  
  return (
    
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/searched/:query' element={<SearchedScreen/>}/>
        <Route path='/categories/:type' element={<CategoriesScreen/>}/>
        <Route path='/recipe/:id' element={<RecipeScreen/>}/>
        <Route path='/favorite' element={<FavoriteScreen/>}/>
        <Route path='/contacts' element={<ContactsScreen/>}/>
        <Route path='*' element={<ErrorPage/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
