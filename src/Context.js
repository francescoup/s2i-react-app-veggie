import { useState, useContext, createContext, useEffect } from "react";


const AppContext = createContext();


const AppProvider = ({children}) => {
  
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
 
  // toggle main menu
  const toggleModal = () => setIsModalOpen(!isModalOpen);

  //handler favorite item
  const[favourites, setFavourites] =useState([])
  
  

  // handler favorite
  useEffect(() => {
  const recipeFavourites = JSON.parse(
    localStorage.getItem('react--favourites')
  );

  if (recipeFavourites) {
    setFavourites(recipeFavourites);
  }
  }, []);
  
  const saveToLocalStorage = (items) => {
    localStorage.setItem('react-favourites', JSON.stringify(items));
  };
  
  const addFavourite = (recipes) => {
    if(!favourites.find((fav) => fav.id === recipes.id)){
    const newFavouriteList = [...favourites, recipes];
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }
    else return  
  };
  
  const removeFavourite = (recipes) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.id !== recipes.id
    );
  
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList)
  };
  
  //end favorite item

    

    return (
        <AppContext.Provider
          value={{
            isModalOpen,
            toggleModal, 
            addFavourite,
            removeFavourite,
            favourites
           
          }}
        >
          {children}
        </AppContext.Provider>
      );
    };
    
    const useGlobalContext = () => {
      return useContext(AppContext);
    };
    
    export { AppProvider, useGlobalContext };
