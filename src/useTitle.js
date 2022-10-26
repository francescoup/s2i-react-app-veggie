import { useEffect } from "react";

const useTitle = (title) => {

    //custom hook for use the title of the page in the document

    useEffect(()=>{
        document.title = `Veggies Recipes - ${title}`;
    },[title])
}

export default useTitle