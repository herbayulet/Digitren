import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserHistory } from "history";
import { Container } from "react-bootstrap";
import Bill from "./components/Bill/Bill";
import Pin from "./components/Home/Pin/Pin";
import Modals from "./components/Modals/Modals";
import Opsi from "./components/Opsi/Opsi";
import Scan from "./components/Scan/Scan";
import Kirim from "./components/Home/Lupa_password/Kirim/Kirim";
import Terkirim from "./components/Home/Lupa_password/Terkirim/Terkirim";
import Gantipassword from "./components/Home/Lupa_password/Gantipassword/Gantipassword";
import Login from "./components/Login/Login";
import Pembayaran from "./components/Pembayaran/Pembayaran";
import Wallet from "./components/Wallet/Wallet";
import Home from "./components/Home/Home";
import Berhasil from "./components/Home/Lupa_password/Berhasil/Berhasil";

function App() {
  const history = createBrowserHistory();
  return (
    <div className="App">
      <Container>
        {/* <Navigation /> */}
        <Router history={history}>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/pembayaran" element={<Pembayaran />} exact />
            <Route path="/wallet" element={<Wallet />} />
            <Route path="/pin" element={<Pin />} />
            <Route path="/modal" element={<Modals />} />
            <Route path="/bill" element={<Bill />} />
            <Route path="/opsi" element={<Opsi />} />
            <Route path="/scan" element={<Scan />} />
            <Route path="/kirim" element={<Kirim />} />
            <Route path="/terkirim" element={<Terkirim />} />
            <Route path="/gantipassword" element={<Gantipassword />} />
            <Route path="/berhasil" element={<Berhasil />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;
