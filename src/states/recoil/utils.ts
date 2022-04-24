import { RecoilValue, Snapshot } from "recoil";

export const getContent = <T>(snapshot: Snapshot, atom: RecoilValue<T>): T => {
  const loadable = snapshot.getLoadable(atom);
  return loadable.getValue();
};

export const getContentAsync = <T>(
  snapshot: Snapshot,
  atom: RecoilValue<T>
): Promise<T> => {
  const promise = snapshot.getPromise(atom);
  return promise;
};

export const Storage = (cartItems) => {
  localStorage.setItem(
    "cart",
    JSON.stringify(cartItems.length > 0 ? cartItems : [])
  );
};
