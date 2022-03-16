import styled from 'styled-components';

// Components
import DetailsCreditCard from '../components/main/DetailsCreditCard';
import CreditCardStack from '../components/main/CreditCardStack';

function HomePage({ creditCards, setCreditCards, detailsCreditCard, setdetailsCreditCard }) {
  return (
    <HomePageWrapper>
      <DetailsCreditCard
        creditCards={creditCards}
        setCreditCards={setCreditCards}
        detailsCreditCard={detailsCreditCard}
        setdetailsCreditCard={setdetailsCreditCard}
      />
      <CreditCardStack
        creditCards={creditCards}
        setCreditCards={setCreditCards}
        detailsCreditCard={detailsCreditCard}
        setdetailsCreditCard={setdetailsCreditCard}
      />
      {creditCards.length > 0 ? <p>Card amout {creditCards.length}/6</p> : null}
    </HomePageWrapper>
  );
}

const HomePageWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default HomePage;
