import React, { createContext, useState } from 'react';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [selectedLabel, setSelectedLabel] = useState(null);

  const fetchCategories = () => {
    // Perform the API call to fetch categories data
    fetch('https://api.example.com/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data))
      .catch((error) => console.log(error));
  };

  return (
    <AppContext.Provider value={{ categories, selectedLabel, setSelectedLabel, fetchCategories }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
