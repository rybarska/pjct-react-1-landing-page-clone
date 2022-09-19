/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { ReactComponent as Logo } from './images/logo.svg';

const mainStyles = css`
  background: red;
`;

export default function App() {
  return (
    <div css={mainStyles}>
      <Logo />
      abc
    </div>
  );
}
