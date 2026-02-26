import { AsyncLocalStorage } from "async_hooks";
import { v4 as uuidv4 } from "uuid";

export const asyncLocalStorage = new AsyncLocalStorage();

export default function requestContext(req, res, next) {
  const requestId = uuidv4();

  asyncLocalStorage.run({ requestId }, () => {
    next();
  });
}