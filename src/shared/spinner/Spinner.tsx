import { keyframes, styled } from "styled-components";

const RevolveAnimation = keyframes`
  30% {
    transform: rotate(-65deg);
  }
  40% {
    transform: rotate(-50deg);
  }
  60% {
    transform: rotate(-60deg);
  }
  100% {
    transform: rotate(-60deg);
  }
`;

const RevolverSpinner = styled.div`
  position: absolute;
  top: 45%;
  left: calc(50% - 15px);
  animation: ${RevolveAnimation} 1s infinite;
  animation-delay: 0.25s;
  animation-timing-function: cubic-bezier(0.42, 0.13, 0.745, 1.75);
  height: 30px;
  width: 30px;
  &:after {
    content: "";
    height: 100%;
    width: 100%;
    top: 0%;
    left: 0%;
    position: absolute;
    border-radius: 50%;
    border: 8px solid #fff;
    box-sizing: border-box;
  }
`;

type BulletProps = {
  $index: number;
};
const Bullet = styled.div<BulletProps>`
  height: 30px;
  width: 30px;
  display: block;
  border-radius: 50%;
  border: 6px solid #fff;
  box-sizing: border-box;
  position: absolute;
  transform: ${(props) => `rotate(${props.$index * 60}deg) translateY(-25px);`};

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translate(-50%, -100%);
    width: 20px;
    height: 7px;
    background: #fff;
  }
`;

const SpinnerWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

type SpinnerProps = {
  showHeader?: boolean;
};
export const Spinner = ({ showHeader }: SpinnerProps) => {
  return (
    <>
      {showHeader ? (
        <div
          style={{
            minHeight: "60px",
            maxHeight: "60px",
            borderBottom: "1px solid #3f3f3f",
          }}
        ></div>
      ) : null}
      <SpinnerWrapper>
        <RevolverSpinner>
          {Array(6)
            .fill(null)
            .map((_, index) => {
              return <Bullet key={index} $index={index} />;
            })}
        </RevolverSpinner>
        <div style={{ marginTop: "160px" }}>Loading...</div>
      </SpinnerWrapper>
      {showHeader ? (
        <div
          style={{
            minHeight: "68px",
            maxHeight: "68px",
            borderTop: "1px solid #3f3f3f",
          }}
        ></div>
      ) : null}
    </>
  );
};
