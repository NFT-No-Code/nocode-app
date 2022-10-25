import PageProvider from "./PageProvider";
import { ReactNode } from "react";

interface IAppProviderProps {
  children: ReactNode;
}

export default function AppProviders({ children }: IAppProviderProps) {
  return <PageProvider>{children}</PageProvider>;
}
