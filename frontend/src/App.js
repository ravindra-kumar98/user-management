import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
//import Breadcrumbs from './components/sub-component/Breadcrumbs';
//import MainContent from './components/MainContent';
import EmployeeList from './components/EmployeeList';
import Dashboard from './components/Dashboard';
import EmployeeForm from './components/EmployeeForm';
import EmpDetails from './components/EmpDetails';

function App()
{
  return (
    <>
      <BrowserRouter>
        <Header />
        {/* <Breadcrumbs /> */}
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/employee' element={<EmployeeList />} />
          <Route path='/add-employee' element={<EmployeeForm />} />
          <Route path='/emp-details' element={<EmpDetails />} />
          <Route path='*' element={<h1>404</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
