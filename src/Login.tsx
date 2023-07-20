import { signInWithGoogle } from "./utils/firebase/Firebase";

export function Login() {
  const signIn = () => {
    signInWithGoogle();
  };
  return (
    <div>
      <button onClick={signIn}>Sign in with Google</button>
    </div>
  );
}
