import { createContext, useContext } from 'react';

export const AuthContext = createContext({
  user: null,
  isLoading: false,
  setUser: () => {},
});

export const useAuthContext = () => useContext(AuthContext);
