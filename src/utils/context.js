// AppContext.js
import React, { createContext, useEffect, useReducer,useState } from 'react';
import { fetchData } from './api.js';

export const AppContext = createContext();

const initialState = {
  data: [],
  isLoading: true,
  error: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS':
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: null,
      };
    case 'FETCH_ERROR':
      return {
        ...state,
        data: [],
        isLoading: false,
        error: action.payload,
      };
      case 'DELETE_ITEM':
        return {
          ...state,
          data: state.data.filter((item) => item.id !== action.payload),
        };
    default:
      return state;
  }
};

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //for categories
  const [categories, setCategories] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState(null);

  const fetchCategories = async () => {
    // Perform the API call to fetch categories data
    fetch('https://646312614dca1a661353d0ee.mockapi.io/api/Category')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  };

  const fetchDataFromApi = async () => {
    try {
      const jsonData = await fetchData();
      dispatch({ type: 'FETCH_SUCCESS', payload: jsonData });
    } catch (error) {
      dispatch({ type: 'FETCH_ERROR', payload: error });
    }
  };

  useEffect(() => {
    fetchCategories();
    fetchDataFromApi();
  }, []);
  const deleteItem = (itemId) => {
    dispatch({ type: 'DELETE_ITEM', payload: itemId });
  };

  return (
    <AppContext.Provider value={{...state,deleteItem,categories, selectedLabel, setSelectedLabel, fetchCategories}}>
      {children}
    </AppContext.Provider>
  );
};

// import React, { useContext, useEffect, useReducer } from "react";
// import reducer from "./api";

// let API = "https://646312614dca1a661353d0ee.mockapi.io/api/Files"

// const initialState = {
//     data: [],
//     isLoading: true,
    
// };

// const AppContext = React.createContext();

// const AppProvider = ({ children }) => {

//     const [state, dispatch] = useReducer(reducer, initialState);

//     // let API = "https://646312614dca1a661353d0ee.mockapi.io/api/Files"

//     const fetchApiData = async (url) => {
//         try {
//             const response = await fetch(url);
//             const data = await response.json();
//             console.log(data);
//             dispatch({
//                 type: "GET_FILES",
//                 payload: data
//             })
//         } catch (error) {
//             console.log(error)
//         }
//     };

//     useEffect(() => {
//         fetchApiData(API);
//     }, []);

//     return <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>;
// }

// //creating custom hook
// const useGlobalContext = () => {
//     return useContext(AppContext)
// }
// export { AppContext, AppProvider, useGlobalContext };