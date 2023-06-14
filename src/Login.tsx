import { signInWithGoogle } from "./utils/firebase/firebase";

export function Login() {
  return (
    <div>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
}
