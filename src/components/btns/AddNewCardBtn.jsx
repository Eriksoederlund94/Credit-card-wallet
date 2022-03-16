import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

function AddNewCardBtn() {
  let navigate = useNavigate();

  const addNewCardBtnHandler = () => {
    navigate('/add-new-card');
  };

  return <AddNewCardBtnWrapper onClick={addNewCardBtnHandler}>ADD A NEW CARD</AddNewCardBtnWrapper>;
}

const AddNewCardBtnWrapper = styled.button`
  all: unset;
  color: #000;
  background-color: #fff;
  font-size: 1.2rem;
  padding: 1rem 2rem;
  cursor: pointer;
  border: 2px solid #000;
  border-radius: 0.3rem;

  &:hover {
    background-color: #f0eaea;
  }
`;

export default AddNewCardBtn;
