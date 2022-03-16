import { useState, useEffect } from 'react';

//Helpers
import { loadCreditCards } from './utils/helpers';

// Componetns
import Header from './components/Header';
import HomePage from './pages/HomePage';
import AddNewCardPage from './pages/AddNewCardPage';
import Footer from './components/Footer';

//React router dom import
import { Routes, Route } from 'react-router-dom';

//DATA
import { creditCardData } from './data/mockData';

function App() {
  const [creditCards, setCreditCards] = useState(loadCreditCards(creditCardData, 'cards'));
  const [detailsCreditCard, setdetailsCreditCard] = useState(loadCreditCards([creditCardData[0]], 'd-card'));

  return (
    <div className='App'>
      <header>
        <Header />
      </header>
      <main>
        <Routes>
          <Route
            path='/'
            element={
              <HomePage
                creditCards={creditCards}
                setCreditCards={setCreditCards}
                detailsCreditCard={detailsCreditCard}
                setdetailsCreditCard={setdetailsCreditCard}
              />
            }
          />
          <Route
            path='/add-new-card'
            element={
              <AddNewCardPage
                creditCards={creditCards}
                setCreditCards={setCreditCards}
                detailsCreditCard={detailsCreditCard}
                setdetailsCreditCard={setdetailsCreditCard}
              />
            }
          />
        </Routes>
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
