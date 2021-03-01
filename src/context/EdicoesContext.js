import { createContext } from 'react';


export const EdicoesContext = createContext({});
export function EdicoesProvider({ children }) {

  const banana = 'banana'

  return (
    <EdicoesContext.Provider value={{ banana }}>
      {children}
    </EdicoesContext.Provider>

  )

}


