import { HashRouter as Router, Route, Routes } from "react-router-dom";
// import Provider from "@provider";
import Provider from "@provider";

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
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
