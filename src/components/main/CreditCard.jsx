import styled from 'styled-components';
import chip from '../../assets/chip.png';

function CreditCard({
  id,
  cardNummer,
  cardHolderName,
  valid,
  vendorLogo,
  vendorColor,
  creditCards,
  setdetailsCreditCard,
}) {
  const onClickHandler = () => {
    const currentDetailsCard = creditCards.filter((item) => item.id === id);

    setdetailsCreditCard(currentDetailsCard);
  };

  return (
    <>
      <CreditCardWrapper onClick={onClickHandler} style={{ backgroundColor: vendorColor }}>
        <div className='chip-and-logo-container'>
          <img className='credit-chip' src={chip} alt='credit-card-chip' />
          <img src={vendorLogo} alt='credit-card-vendor-logo' />
        </div>
        <div className='card-nummer-container'>
          <h2>{cardNummer}</h2>
        </div>
        <div className='cardholder-and-valid-container'>
          <div className='name-container'>
            <p>CARDHOLDER NAME</p>
            <h3>{cardHolderName}</h3>
          </div>
          <div className='valid-container'>
            <p>VALID THRU</p>
            <p>{valid}</p>
          </div>
        </div>
      </CreditCardWrapper>
    </>
  );
}

const CreditCardWrapper = styled.div`
  min-width: 350px;
  min-height: 180px;
  background-color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  border-radius: 10px;
  font-family: sans-serif;
  color: #00000080;
  box-shadow: 0 5px 10px 0 #00000040, 0 15px 20px 0#00000020;
  transition: transform 200ms;
  cursor: pointer;
  font-family: 'PT Mono', monospace;

  &:nth-last-child(5) {
    --y: calc(-50% + -110px);
    transform: translate(-50%, var(--y)) scale(0.9);
    box-shadow: 0 0 1px 1px #00000003;
  }

  &:nth-last-child(4) {
    --y: calc(-50% + -80px);
    transform: translate(-50%, var(--y)) scale(0.9);
    box-shadow: 0 0 1px 1px #00000003;
  }
  &:nth-last-child(3) {
    --y: calc(-50% + -45px);
    transform: translate(-50%, var(--y)) scale(0.95);
  }
  &:nth-last-child(2) {
    --y: calc(-50%);
    transform: translate(-50%, var(--y)) scale(1);
  }
  &:nth-last-child(1) {
    --y: calc(-50% + 45px);
    transform: translate(-50%, var(--y)) scale(1.05);
  }

  &:nth-last-child(5):hover {
    --y: calc(-50% + -120px);
    transform: translate(-50%, var(--y)) scale(0.9);
    box-shadow: 0 0 1px 1px #00000003;
  }

  &:nth-last-child(4):hover {
    --y: calc(-50% + -90px);
    transform: translate(-50%, var(--y)) scale(0.9);
    box-shadow: 0 0 1px 1px #00000003;
  }
  &:nth-last-child(3):hover {
    --y: calc(-50% + -60px);
    transform: translate(-50%, var(--y)) scale(0.95);
  }
  &:nth-last-child(2):hover {
    --y: calc(-50% + -20px);
    transform: translate(-50%, var(--y)) scale(1);
  }

  @keyframes swap {
    50% {
      transform: translate(-50%, calc(var(--y) - 250px)) scale(0.85) rotate(-5deg);
      animation-timing-function: ease-in;
    }
    100% {
      transform: translate(-50%, calc(var(--y) - 15px)) scale(0.85);
      z-index: -1;
    }
  }

  h3,
  img,
  p {
    font-size: 1rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
  }

  .chip-and-logo-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .credit-chip {
      width: 50px;
    }
  }

  .card-nummer-container {
    text-align: center;
  }

  .name-container {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
  }

  .cardholder-and-valid-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
`;

export default CreditCard;
