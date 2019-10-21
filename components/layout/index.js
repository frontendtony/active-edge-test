import PropTypes from 'prop-types';
import styled from 'styled-components';
import AppFooter from './AppFooter';
import AppHeader from './AppHeader';

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  > .main {
    flex-grow: 1;
    width: 1300px;
    max-width: 100vw;
    margin: 30px auto;
    padding: 30px;
    font-size: 16px;
  }
`;

const Layout = ({ children }) => {
  return (
    <StyledPage>
      <AppHeader />
      <main className="main">{children}</main>
      <AppFooter />
    </StyledPage>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
