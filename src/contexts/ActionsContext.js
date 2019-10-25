import {createContext} from "react";

export const ActionsContext = createContext();
ActionsContext.displayName = "Actions";

export const ActionsProvider = ActionsContext.Provider;