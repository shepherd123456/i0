import { createContext, useContext, useState } from "react";

const Ctx = createContext();

export function useCtx() {
  return useContext(Ctx);
}

export function CtxProvider({ children }) {
  const [ctx, setCtx] = useState();

  return (
    <Ctx.Provider value={{
      ctx,
      setCtx
    }}>
      {children}
    </Ctx.Provider>
  )
}