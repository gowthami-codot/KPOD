import React, { createContext, useContext, useState } from 'react';

// Create a context
const UserContext = createContext();

// Export a hook to use the context
export const useUser = () => useContext(UserContext);

// Provider component that wraps your app and provides the user state
export const UserProvider = ({ children }) => {
    const [userDetails, setUserDetails] = useState(null);

    return (
        // <UserContext.Provider value={{ userDetails, setUserDetails }}>
        <div>
            {children}
        </div>
        // </UserContext.Provider>
    );
};
