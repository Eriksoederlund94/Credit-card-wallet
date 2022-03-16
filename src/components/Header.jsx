import styled from 'styled-components';
import { useLocation } from 'react-router-dom';

function Header() {
  const { pathname } = useLocation();

  return (
    <HeaderWrapper>
      {pathname === '/' ? <h1>E-Wallet</h1> : null}
      {pathname === '/add-new-card' ? <h1>ADD A NEW BANK CARD</h1> : null}
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.div`
  text-align: center;
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  h1 {
    width: 200px;
  }
`;

export default Header;
