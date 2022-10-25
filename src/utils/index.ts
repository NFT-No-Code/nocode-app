import { ProviderRpcError } from "../interfaces/Provider";

export function isRpcError(object: any): object is ProviderRpcError {
  return (<ProviderRpcError>object).code !== undefined;
}
