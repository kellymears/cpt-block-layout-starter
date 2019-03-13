import { css } from 'astroturf';

export const columns = css`
  .container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  .one {
    grid-column: span 1;

    @media screen and (max-width: 480px) {
      grid-column: span 2;
    }
  }

  .two {
    grid-column: span 2;
  }
`;

