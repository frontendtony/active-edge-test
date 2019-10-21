import styled from 'styled-components';
import AppLogo from './AppLogo';

const StyledHeader = styled.header`
  height: 64px;
  padding: 0 30px;
  box-shadow: 0 2px 8px #f0f1f2;
  background-color: #ffffff;

  .header-content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-width: 1400px;
    margin: 0 auto;
  }
`;

export default () => {
  return (
    <StyledHeader>
      <div className="header-content">
        <AppLogo />
      </div>
    </StyledHeader>
  );
};
