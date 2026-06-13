'use client'
import { createContext, useContext, useState } from "react";

const BookContext = createContext(null);

export const  BookProvider = ({children}) => {
    const [bookData, setBookData] = useState({
      title: "",
      author: "",
      genres: [],
      description: "",
      frontCover: "",
      backCover: "",
      bookPages: [],
      price: "",
      discountPrice: "",
      free: null,
      allowDownload: null,
      filter:"",
    });

    const updateBookData = (field, value) => {
        setBookData((prev) => ({...prev, [field]:value}));
    };

    return(
        <BookContext.Provider value={{bookData, updateBookData}}>
            {children}
        </BookContext.Provider>
    );
};

export const useBook = () => useContext(BookContext);