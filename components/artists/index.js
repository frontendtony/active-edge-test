import { Avatar, Card, Icon } from 'antd';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const { Meta } = Card;

const StyledArtistsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 20px;
  row-gap: 30px;

  .ant-card {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .body {
      margin-top: 20px;
    }
  }

  .action {
    display: grid;
    gap: 10px;
  }
`;

const Artists = ({ artists }) => {
  return (
    <StyledArtistsContainer>
      {artists.map(artist => {
        const { id, email, name, phone, username, website, company } = artist;

        return (
          <Card
            key={id}
            actions={[
              <div className="action">
                <Icon type="unordered-list" key="tweets" /> <span>View Tweets</span>
              </div>,
              <div className="action">
                <Icon type="folder" key="albums" /> <span>View Albums</span>
              </div>
            ]}
          >
            <Meta avatar={<Avatar icon="user" />} title={name} description={company.bs} />
            <div className="body">
              <p className="email">{email}</p>
              <p className="phone">{phone}</p>
              <p className="username">{username}</p>
              <p className="website">{website}</p>
            </div>
          </Card>
        );
      })}
    </StyledArtistsContainer>
  );
};

Artists.propTypes = {
  artists: PropTypes.array
};

Artists.defaultProps = {
  artists: []
};

export default Artists;
