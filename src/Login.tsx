import { signInWithGoogle } from "./utils/firebase/Firebase";

export function Login() {
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}
