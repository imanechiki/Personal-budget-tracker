import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookie from 'js-cookie';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(() => {
    const cookieData = Cookie.get('userDetails');
    return cookieData ? JSON.parse(cookieData) : { name: '', income: '', goals: '' };
  });

  useEffect(() => {
    Cookie.set('userDetails', JSON.stringify(userDetails), { expires: 7 });
  }, [userDetails]);

  return (
    <UserContext.Provider value={{ userDetails, setUserDetails }}>
      {children}
    </UserContext.Provider>
  );
};
