import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import Provider from "@provider";

import Login from "./pages/Login";

interface AppProps {}

// const App: React.FC<AppProps> = () => {
//   return (
//     <>
//       <Provider>
//         <Router>
//           <Routes>
//             <Route path="/" element={<Login />} />
//             <Route path="/dashboard" element={<Dashboard />} />
//           </Routes>
//         </Router>
//       </Provider>
//     </>
//   );
// };

const App: React.FC<AppProps> = () => {
  return (
    <Provider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<p>dashboard</p>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
