import React from "react";

const Contexto = React.createContext({
      mensaje: 'default'
});

export const CtxProvider = Contexto.Provider;
export const CtxConsumer = Contexto.Consumer;