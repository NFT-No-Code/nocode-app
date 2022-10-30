import { LogDescription } from "ethers/lib/utils";
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react";

interface IConfirmationProviderProps {
  children: ReactNode;
}

interface IConfimationContext {
  cloneEvent: LogDescription[] | undefined;
  setCloneEvent: Dispatch<SetStateAction<LogDescription[] | undefined>>;
}

export const ConfirmationContext = createContext({} as IConfimationContext);

export default function ConfirmationProvider({ children }: IConfirmationProviderProps) {
  const [cloneEvent, setCloneEvent] = useState<LogDescription[] | undefined>();

  return <ConfirmationContext.Provider value={{ cloneEvent, setCloneEvent }}>{children}</ConfirmationContext.Provider>;
}
