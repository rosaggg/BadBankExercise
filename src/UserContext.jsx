import React from "react";

export const UserContext = React.createContext()


const UserContextProvider = ({ children }) => {
  return (
    <UserContext.Provider 
      value={{
        users: [
          {
            name: 'abel',
            email: 'abel@mit.edu',
            password: 'secret',
            balance: 100,
          },
        ],
      }}
    >
      { children }
    </UserContext.Provider>    
  )
}

export default UserContextProvider