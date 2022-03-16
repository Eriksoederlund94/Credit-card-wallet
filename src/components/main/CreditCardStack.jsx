import CreditCard from './CreditCard';
import styled from 'styled-components';

function CreditCardStack({ creditCards, setCreditCards, detailsCreditCard, setdetailsCreditCard }) {
  const detialsCardIdArray = detailsCreditCard.map((card) => {
    return card.id;
  });

  const cardId = detialsCardIdArray.toString();

  const filterCardStack = (id, items) => {
    return items.filter((card) => card.id !== id);
  };

  const filteredCards = filterCardStack(cardId, creditCards);

  return (
    <CreditCardStackWrapper>
      {filteredCards.map((item) => (
        <CreditCard
          key={item.id}
          {...item}
          creditCards={creditCards}
          setCreditCards={setCreditCards}
          detailsCreditCard={detailsCreditCard}
          setdetailsCreditCard={setdetailsCreditCard}
        />
      ))}
    </CreditCardStackWrapper>
  );
}

const CreditCardStackWrapper = styled.div`
  width: 500px;
  height: 350px;
  position: relative;
`;

export default CreditCardStack;
