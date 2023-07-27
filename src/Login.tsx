import { styled } from "styled-components";
import { signInWithGoogle } from "./utils/firebase/Firebase";
import Page from "./shared/page/Page";
import { IconButton } from "./shared/buttons/IconButton";
import { Icons } from "./icons/Icons";
import SkullIcon from "./icons/skulllogo192.png";

const LoginStyle = styled.div`
  display: flex;
  gap: 64px;
  flex-direction: column;
  height: 100%;
  //justify-content: center;
  align-items: center;
`;

const LogoText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 16px;
`;

const SkullLogo = styled.div`
  height: 192px;
  width: 192px;
  background: url(${SkullIcon}) center no-repeat;
`;

const LoginText = styled.div`
  font-family: "Rye";
  font-size: 20px;
`;

export function Login() {
  const signIn = () => {
    signInWithGoogle();
  };
  return (
    <Page pageName="">
      <LoginStyle>
        <LogoText>
          <SkullLogo></SkullLogo>
          <LoginText>Deadlands Companion</LoginText>
        </LogoText>
        <IconButton
          icon={Icons.Google}
          viewbox="0 0 186.69 190.5"
          text="Sign in with Google"
          onClick={signIn}
        ></IconButton>
      </LoginStyle>
    </Page>
  );
}
