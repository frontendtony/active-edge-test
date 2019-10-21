import { Card } from 'antd';
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

const cards = new Array(6).fill(0);

export default () => {
  return (
    <StyledArtistsContainer>
      {cards.map((item, index) => {
        return <Card key={index} style={{ width: 300, marginTop: 16 }} loading={true}></Card>;
      })}
    </StyledArtistsContainer>
  );
};
