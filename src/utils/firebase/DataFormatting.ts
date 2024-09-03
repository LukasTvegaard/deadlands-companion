import { DataSnapshot } from "firebase/database";

export function snapshotToValue<T>(snapshot: DataSnapshot): T {
  const snapshotId = snapshot.key;
  const snapshotVal = snapshot.val();
  return { ...snapshotVal, id: snapshotId };
}
