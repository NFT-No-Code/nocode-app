import PageProvider from "./PageProvider";
import { ReactNode } from "react";
import ConfirmationProvider from "./ConfirmationProvider";

interface IAppProviderProps {
  children: ReactNode;
}

export default function AppProviders({ children }: IAppProviderProps) {
  return (
    <PageProvider>
      <ConfirmationProvider>{children}</ConfirmationProvider>
    </PageProvider>
  );
}
