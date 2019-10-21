import Link from 'next/link';
import styled from 'styled-components';

const LogoWrapper = styled.div`
  & > .logo {
    height: 100%;
    transform: scale(0.7);
  }
`;

export default () => (
  <Link href="/">
    <a>
      <LogoWrapper>
        <img src="/static/img/app-logo.png" alt="Chocolate City logo" className="logo" />
      </LogoWrapper>
    </a>
  </Link>
);
