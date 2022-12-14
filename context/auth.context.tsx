import { createContext, useState, ReactNode } from 'react'

const initialState = {
  isLoggedIn: false,
  logIn: (_username: string) => { },
  logOut: () => { },
  checkLogStatus: () => { }
}

interface Props {
  children: ReactNode
}

const AuthContext = createContext(initialState)

const AuthProvider = ({ children }: Props) => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)

  const logIn = (username: string) => {
    setIsLoggedIn(true)
    window.localStorage.setItem("r&m-username", username)
  }
  const logOut = () => {
    setIsLoggedIn(false)
    window.localStorage.removeItem("r&m-username")
  }

  const checkLogStatus = () => {
    const username = window.localStorage.getItem("r&m-username")
    if (username) {
      setIsLoggedIn(true)
    } else {
      setIsLoggedIn(false)
    }
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, logIn, logOut, checkLogStatus }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }