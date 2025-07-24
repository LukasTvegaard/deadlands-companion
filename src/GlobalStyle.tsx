import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  #root {
    height: 100dvh;
    display: flex;
    flex-direction: column;
  }
  html,
  body {
    font-family: "Roboto", sans-serif;
    height: 100%;
    overflow: hidden;
    margin: 0;
    padding: 0;
    color: white;
    background-color: #282828;

    /* MODAL */
    @keyframes modalfade {
      from {
        opacity: 0;
      }

      to {
        opacity: 1;
      }
    }

    @keyframes modalzoom {
      from {
        transform: scale(0.8);
      }

      to {
        transform: scale(1);
      }
    }

    .react-aria-ModalOverlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: var(--visual-viewport-height);
      background: rgba(0 0 0 / 0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 100;

      &[data-entering] {
        animation: modalfade 200ms;
      }

      &[data-exiting] {
        animation: modalfade 150ms reverse ease-in;
      }
    }

    .react-aria-Modal {
      box-shadow: 0 8px 20px rgba(0 0 0 / 0.1);
      border-radius: 6px;
      background: #575757;
      color: #ffffff;
      border: 1px solid #3f3f3f;
      outline: none;
      max-width: 300px;
      margin-top: -68px;
      padding: 16px;

      &[data-entering] {
        animation: modalzoom 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275);
      }

      .react-aria-TextField {
        margin-bottom: 8px;
      }
    }
    /* MODAL END */
  }
`;
