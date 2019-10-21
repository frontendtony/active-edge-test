import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > .main {
    flex-grow: 1;
  }
`;

const Layout = ({ children }) => {
  return (
    <StyledPage>
      <main className="main">{children}</main>
    </StyledPage>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
