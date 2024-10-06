import { HashRouter as Router, Route, Routes } from "react-router-dom";
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
    <>
      <Router>
        <Routes>
          <Route path="/" element={<p>hola</p>} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
