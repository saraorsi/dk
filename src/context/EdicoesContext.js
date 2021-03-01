import { createContext } from 'react';


export const EdicoesContext = createContext({});
export function EdicoesProvider({ children }) {



  return (
    <EdicoesContext.Provider >
      {children}
    </EdicoesContext.Provider>

  )

}


