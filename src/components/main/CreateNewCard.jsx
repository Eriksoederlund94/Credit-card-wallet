import { useState } from 'react';
// Styled component import
import styled from 'styled-components';
// React router dom import
import { useNavigate } from 'react-router-dom';
// UUID import
import { v4 as uuidv4 } from 'uuid';
// MockData import
import { creditCardData } from '../../data/mockData';
// Helper Functions
import { reverseDate, addWhiteSpace } from '../../utils/helpers';

function CreateNewCard({ creditCards, setCreditCards }) {
  const [errorMessage, setErrorMessage] = useState('');

  let navigate = useNavigate();

  const addNewCardFormHandler = (event) => {
    event.preventDefault();

    const vendorFilter = creditCardData.filter((card) => card.vendorName === event.target.vendor.value);

    const newCreditCard = {
      id: uuidv4(),
      cardNummer: addWhiteSpace(event.target.card_number.value),
      cardHolderName: event.target.card_holder_name.value,
      valid: reverseDate(event.target.valid_thru.value),
      cvv: event.target.cvv.value,
      vendorName: event.target.vendor.value,
      vendorLogo: vendorFilter[0].vendorLogo,
      vendorColor: vendorFilter[0].vendorColor,
    };

    if (creditCards.length <= 5) {
      localStorage.setItem('cards', JSON.stringify([...creditCards, newCreditCard]));
      localStorage.setItem('d-card', JSON.stringify([newCreditCard]));
      setCreditCards([...creditCards, newCreditCard]);
      navigate('/');
    } else {
      setErrorMessage(`Your account already has the max amount of cards!`);
    }
  };

  return (
    <CreateNewCardWrapper>
      <form action='submit' onSubmit={addNewCardFormHandler}>
        <p className='error'>{errorMessage}</p>
        <div className='card-number-container'>
          <p>CARD NUMBER</p>
          <input type='text' name='card_number' minLength='16' maxLength='16' pattern='^[0-9]+$' required />
        </div>
        <div className='card-name-container'>
          <p>CARDHOLDER NAME</p>
          <input
            type='text'
            name='card_holder_name'
            minLength='3'
            maxLength='16'
            pattern='^(?! )[A-Za-z\s]*$'
            required
          />
        </div>
        <div className='valid-cvv-container'>
          <div className='valid-container'>
            <p>VALID THRU</p>
            <input className='date-input' type='date' name='valid_thru' required />
          </div>
          <div className='cvv-container'>
            <p>CVV</p>
            <input type='number' name='cvv' min='100' max='999' required />
          </div>
        </div>
        <div className='vendor-select-container'>
          <p>VENDOR</p>
          <select name='vendor'>
            <option value='Bitcoin Inc'>Bitcoin Inc</option>
            <option value='Ninja Bank'>Ninja Bank</option>
            <option value='Block Chain Inc'>Block Chain Inc</option>
            <option value='Evil Corp'>Evil Corp</option>
          </select>
        </div>
        <div className='btn-container'>
          <button type='submit'>ADD CARD</button>
        </div>
      </form>
    </CreateNewCardWrapper>
  );
}

const CreateNewCardWrapper = styled.div`
  form {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    min-width: 400px;

    .card-number-container,
    .card-name-container,
    .valid-cvv-container,
    .vendor-select-container,
    .btn-container {
      margin-top: 1rem;
      min-width: 320px;

      p {
        font-size: 0.8rem;
        color: #5c5959;
      }

      .date-input {
        font-size: 0.7rem;
      }

      input,
      select {
        all: unset;
        border: 1px solid #b6b3b3;
        padding: 0.8rem 1.5rem;
        border-radius: 8px;
        width: 80%;
        -moz-appearance: textfield;
      }
    }

    .valid-cvv-container {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .cvv-container,
      .valid-container {
        input {
          width: 100px;
        }
      }
    }

    .btn-container {
      display: flex;
      justify-content: center;

      button {
        all: unset;
        color: #fff;
        background-color: #000;
        font-size: 1.2rem;
        padding: 1rem 2rem;
        cursor: pointer;
        border-radius: 0.3rem;
        width: 80%;
        text-align: center;

        &:hover {
          background-color: #201e1e;
        }
      }
    }
  }

  .date-input {
    color: transparent;
  }
  .error {
    animation: blinker 1s linear infinite;
  }

  @keyframes blinker {
    50% {
      opacity: 0;
      color: red;
    }
  }
`;

export default CreateNewCard;
