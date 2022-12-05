import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dashbord from './components/pages/Dashboard/Dashbord';
import InformationProvider from './context/informationContext';

function App() {
  return (
  <>
  
  <InformationProvider/>
  <Dashbord/>
  </>

  )
}

export default App;
