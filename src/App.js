import './App.css';
import Login from './login';
import Home from './home';
import FormPage from './form';
import TemplateList from './display';
import { Form } from 'react-router-dom';
import FormData from './formData'
import RandomFormGenerator from './random';
function App() {
  return (
   <div>
     {/* <Login /> */}
     {/* < Home /> */}
     {/* <TemplateList /> */}
     {/* <FormPage />  */}
     {/* <FormData/> */}
     <RandomFormGenerator />
     
    </div>
  );
}
 
export default App;