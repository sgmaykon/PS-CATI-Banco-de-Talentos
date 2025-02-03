import Home from './pages/Home'
import Test from './pages/Test'
import {Route, BrowserRouter as Router,Routes} from 'react-router-dom' 
import { ToastContainer, toast } from 'react-toastify';

function App() {
  return(
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </Router>
    <ToastContainer toastStyle={{backgroundColor:"transparent", boxShadow:"none"}}/>
    </>
    
  );
}
export default App;
