/* eslint-disable no-unused-vars */
import './App.css';
import CreateAccountPage from './pages/CreateAccountPage';
import HomePage from './pages/HomePage';
import ProductPreview from './pages/ProductPreviewPage';
import MenPage from './pages/MenPage';
import SignIn from './pages/SignInPage';
import CartPage from './pages/CartPage';
import AppRouter from './routes/AppRouter';

function App() {
  return (
    <div>
      <AppRouter/>
      {/* <HomePage /> */}
      {/* <ProductPreview /> */}
      {/* <SignIn /> */}
      {/* <CreateAccountPage /> */}
      {/* <MenPage /> */}
      {/* <CartPage /> */}
    </div>
  );
}

export default App;
