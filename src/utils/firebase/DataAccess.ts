import { DatabaseReference, set as firebaseSet } from "firebase/database";

export async function set<T>(ref: DatabaseReference, data: T): Promise<void> {
  return firebaseSet(ref, data);
}
