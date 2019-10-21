import styled from 'styled-components';

const StyledFooter = styled.header`
  height: 64px;
  padding: 0 30px;
  box-shadow: 0 2px 8px #f0f1f2;
  background-color: #333;
  color: #fff;

  .footer-content {
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
    <StyledFooter>
      <div className="footer-content">© Chocolate City, {new Date().getFullYear()}</div>
    </StyledFooter>
  );
};
