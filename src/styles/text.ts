import { createGlobalStyle } from 'styled-components';

const textStyles = createGlobalStyle`
  h1 {
    font-family: var(--h1-desk-tabl-font-family);
    font-size: var(--h1-desk-tabl-font-size);
    font-style: var(--h1-desk-tabl-font-style);
    font-weight: var(--h1-desk-tabl-font-weight);
    letter-spacing: var(--h1-desk-tabl-letter-spacing);
    line-height: var(--h1-desk-tabl-line-height);
    margin: 0;
  }

  h2 {
    font-family: var(--h2-font-family);
    font-size: var(--h2-font-size);
    font-style: var(--h2-font-style);
    font-weight: var(--h2-font-weight);
    letter-spacing: var(--h2-letter-spacing);
    line-height: var(--h2-line-height);
    margin: 0;
  }

  h3 {
    font-family: var(--h3-font-family);
    font-size: var(--h3-font-size);
    font-style: var(--h3-font-style);
    font-weight: var(--h3-font-weight);
    letter-spacing: var(--h3-letter-spacing);
    line-height: var(--h3-line-height);
    margin: 0;
  }

  b {
    font-family: var(--content-text-bold-font-family);
    font-size: var(--content-text-bold-font-size);
    font-style: var(--content-text-bold-font-style);
    font-weight: var(--content-text-bold-font-weight);
    letter-spacing: var(--content-text-bold-letter-spacing);
    line-height: var(--content-text-bold-line-height);
    margin: 0;
  }

  p {
    font-family: var(--content-text-normal-font-family);
    font-size: var(--content-text-normal-font-size);
    font-style: var(--content-text-normal-font-style);
    font-weight: var(--content-text-normal-font-weight);
    letter-spacing: var(--content-text-normal-letter-spacing);
    line-height: var(--content-text-normal-line-height);
    margin: 0;
  }

  .small-text-bold {
    font-family: var(--small-text-bold-font-family);
    font-size: var(--small-text-bold-font-size);
    font-style: var(--small-text-bold-font-style);
    font-weight: var(--small-text-bold-font-weight);
    letter-spacing: var(--small-text-bold-letter-spacing);
    line-height: var(--small-text-bold-line-height);
    margin: 0;
  }

  .small-text-normal {
    font-family: var(--small-text-normal-font-family);
    font-size: var(--small-text-normal-font-size);
    font-style: var(--small-text-normal-font-style);
    font-weight: var(--small-text-normal-font-weight);
    letter-spacing: var(--small-text-normal-letter-spacing);
    line-height: var(--small-text-normal-line-height);
    margin: 0;
  }

  .navigated-text-bold {
    font-family: var(--navigated-text-bold-font-family);
    font-size: var(--navigated-text-bold-font-size);
    font-style: var(--navigated-text-bold-font-style);
    font-weight: var(--navigated-text-bold-font-weight);
    letter-spacing: var(--navigated-text-bold-letter-spacing);
    line-height: var(--navigated-text-bold-line-height);
    margin: 0;
  }

  .navigated-text-normal {
    font-family: var(--navigated-text-normal-font-family);
    font-size: var(--navigated-text-normal-font-size);
    font-style: var(--navigated-text-normal-font-style);
    font-weight: var(--navigated-text-normal-font-weight);
    letter-spacing: var(--navigated-text-normal-letter-spacing);
    line-height: var(--navigated-text-normal-line-height);
    margin: 0;
  }

  .slogan {
    font-family: var(--slogan-desktop-tablet-font-family);
    font-size: var(--slogan-desktop-tablet-font-size);
    font-style: var(--slogan-desktop-tablet-font-style);
    font-weight: var(--slogan-desktop-tablet-font-weight);
    letter-spacing: var(--slogan-desktop-tablet-letter-spacing);
    line-height: var(--slogan-desktop-tablet-line-height);
    margin: 0;
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: var(--h1-mobile-font-size);
      line-height: var(--h1-mobile-line-height);
    }

    .slogan {
      font-family: var(--slogan-mobile-font-family);
      font-size: var(--slogan-mobile-font-size);
      font-style: var(--slogan-mobile-font-style);
      font-weight: var(--slogan-mobile-font-weight);
      letter-spacing: var(--slogan-mobile-letter-spacing);
      line-height: var(--slogan-mobile-line-height);
    }
  }
`;

export default textStyles;