
import './App.css';
import'../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Presentation from './presentation/Presentation';
import Dashboard from './Pages/Dashboard/Dashboard';
import Recap from './Pages/Recap/Recap';
import Sidebar from './Components/NewCharts/Sidebar/Sidebar';
import {Routes, Route} from 'react-router-dom';
import ThemeContextProvider from './Context/ThemeContext';

function App() {
  return (
     <div className="App">
      {/* <Dashboard /> */}
      <ThemeContextProvider>
        <Sidebar />  
      <Routes> 
      
        <Route path="/" element={<Presentation />} />
        <Route path="/recap" element={<Recap />} />
        <Route path="/dashboard" element={<Dashboard />} />
        
     </Routes> 
     </ThemeContextProvider>
     </div>
  );
}

export default App;
