import { useState } from 'react';
import styled from 'styled-components';
import CreditCard from '../components/main/CreditCard';
import bitcoin from '../assets/bitcoin.png';

//import
import CreateNewCard from '../components/main/CreateNewCard';

const defaultCreditCard = [
  {
    id: '0d924ac5-8888-4917-839f-66425278bcb3',
    cardNummer: 'XXXX XXXX XXXX XXXX',
    cardHolderName: 'FIRSTNAME LASTNAME',
    valid: 'MM/YY',
    cvv: 689,
    vendorLogo: bitcoin,
    vendorName: 'Bitcoin Inc',
    vendorColor: '#d0d0d0',
  },
];

function AddNewCardPage({ creditCards, setCreditCards }) {
  const [showCaseCreditCard, setShowCaseCreditCard] = useState(defaultCreditCard);

  return (
    <AddNewCardPageWrapper>
      <div className='showcase-card-container'>
        <p>New Card</p>
        {showCaseCreditCard.map((card) => (
          <CreditCard key={card.id} {...card} creditCards={creditCards} setCreditCards={setCreditCards} />
        ))}
      </div>
      <CreateNewCard
        creditCards={creditCards}
        setCreditCards={setCreditCards}
        setShowCaseCreditCard={setShowCaseCreditCard}
      />
    </AddNewCardPageWrapper>
  );
}

const AddNewCardPageWrapper = styled.div`
  min-height: 80vh;
  min-width: 100%;
  background-color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .showcase-card-container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 500px;
    height: 350px;
    position: relative;

    p {
      text-align: center;
      color: #858181;
    }
  }
`;

export default AddNewCardPage;
