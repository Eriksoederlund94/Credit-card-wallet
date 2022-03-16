import styled from 'styled-components';

function RemoveCardBtn({ creditCards, setCreditCards, detailsCreditCard, setdetailsCreditCard }) {
  const removeCardHandler = () => {
    let id = detailsCreditCard[0].id;

    const removeCardDetails = detailsCreditCard.filter((card) => card.id !== id);
    const removeCardFromStack = creditCards.filter((card) => card.id !== id);

    setdetailsCreditCard(removeCardDetails);
    setCreditCards(removeCardFromStack);
    localStorage.setItem('cards', JSON.stringify(removeCardFromStack));

    if (creditCards.length > 1) {
      localStorage.setItem('d-card', JSON.stringify([removeCardFromStack[0]]));
    } else {
      localStorage.setItem('d-card', JSON.stringify(removeCardFromStack));
    }
  };

  return <RemoveCardBtnWrapper onClick={removeCardHandler}>X</RemoveCardBtnWrapper>;
}

const RemoveCardBtnWrapper = styled.button`
  all: unset;
  cursor: pointer;
  width: 20px;
  height: 20px;
  text-align: center;
  border-radius: 50%;

  &:hover {
    color: red;
  }
`;

export default RemoveCardBtn;
