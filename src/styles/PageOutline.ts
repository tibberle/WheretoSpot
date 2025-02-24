import { createGlobalStyle } from 'styled-components';

const PageOutline = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
	border: 0;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }

`;

export default PageOutline;