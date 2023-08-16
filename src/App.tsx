import {
  //Route,
  Routes,
} from "react-router-dom";

import Header from "./components/Layout/Header";
import Container from "./components/Common/Container";

function App() {
  return (
    <Container>
      <Header />
      <div className="wrapper">
        as.fmasmfawmjlkfjalflsafawfasfwfasf Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Pariatur temporibus aperiam porro cum
        numquam tempora veniam ipsa, voluptates modi ad error? Deserunt nihil
        voluptatem, in harum natus inventore mollitia ex. Ogilvy Ogilvy Ogilvy
        Ogilvy Ogilvy Ogilvy Ogilvy Ogilvy
        <Routes>
          {/* <Route path="/welcome" element={< />} />
        <Route path="/dashboard" element={</>} />
        <Route path="/:id/offers/" element={< />} /> */}
        </Routes>
      </div>
    </Container>
  );
}

export default App;
