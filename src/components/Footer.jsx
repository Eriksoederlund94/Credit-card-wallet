import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import AddNewCardBtn from './btns/AddNewCardBtn';

function Footer() {
  const { pathname } = useLocation();

  return <FooterWrapper>{pathname === '/' ? <AddNewCardBtn /> : null}</FooterWrapper>;
}

const FooterWrapper = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Footer;
