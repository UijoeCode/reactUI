import './App.scss';
import Header from './Header';
import Footer from './Footer';
import Button from './UI/Button/Button';

function App() {
  return (
    <div data-scope-rui>
      <Header />

      <div className="container">
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
        <Button />
      </div>

      <Footer />

    </div>
  );
}

export default App;
