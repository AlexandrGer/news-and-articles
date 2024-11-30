import Header from "../Header/Header";
import CardList from "../CardList/CardList";
import Footer from "../Footer/Footer";
import "./App.scss";

export default function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <div className="container">
          <div className="page">
            <h1 className="title">Новости и стать</h1>
            <CardList />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
