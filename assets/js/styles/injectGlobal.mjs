import { injectGlobal } from '../modules/emotion.mjs';

injectGlobal`
  /* variables */
  :root {
    --pallete-gs-black-light2: #5a5a5a;
    --pallete-gs-grey-dark1: #7a7a7a;
    --pallete-gs-grey-light1: #dfdfdf;
    --pallete-gs-grey-light2: #e5e5e5;
    --pallete-gs-grey-light3: #fafafa;
    --pallete-gs-white: #ffffff;
    --pallete-blue-base: #1e87f0;
    --pallete-blue-light1: #28a5f5;
    --dark-transparent-32: rgba(0, 0, 0, 0.32);

    --media-mobile-and-below: only screen and (max-width: 768px);
  }

  /* global styles */
  html {
    font-size: 16px;
  }
  html, body, #app {
    margin: 0;
    width: 100%;
    height: 100%;
  }

  body * {
    box-sizing: border-box;
    word-break: break-word;
  }
`;
