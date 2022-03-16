import CreditCard from './CreditCard';
import RemoveCardBtn from '../btns/RemoveCardBtn';
import styled from 'styled-components';

function DetailsCreditCard({ creditCards, setCreditCards, detailsCreditCard, setdetailsCreditCard }) {
  return (
    <DetailsCreditCardWrapper>
      <div className='button-and-active-container'>
        {detailsCreditCard.length >= 1 ? (
          <RemoveCardBtn
            creditCards={creditCards}
            setCreditCards={setCreditCards}
            detailsCreditCard={detailsCreditCard}
            setdetailsCreditCard={setdetailsCreditCard}
          />
        ) : null}
        {detailsCreditCard.length >= 1 ? <p className='active-card'>Active Card</p> : null}
      </div>
      {detailsCreditCard?.map((item) => (
        <CreditCard
          key={item.id}
          {...item}
          creditCards={creditCards}
          setCreditCards={setCreditCards}
          detailsCreditCard={detailsCreditCard}
          setdetailsCreditCard={setdetailsCreditCard}
        />
      ))}
    </DetailsCreditCardWrapper>
  );
}

const DetailsCreditCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  height: 350px;
  position: relative;
  .active-card {
    text-align: center;
    color: #858181;
  }
`;

export default DetailsCreditCard;
