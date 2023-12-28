import { createContext, useState } from 'react';

// import '../assets/PostData.json'
// Create a context with an initial value
export const PostDataContext = createContext();

export const PostDataProvider = ({ children }) => {
    

    return (
        <PostDataContext.Provider>
            {children}
        </PostDataContext.Provider>
    );
};