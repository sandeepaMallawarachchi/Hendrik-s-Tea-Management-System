import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//sales
import SalesRoutes from './SalesRoutes';

//sales manager

import SalesManagerRoutes from './SalesManagerRoutes';

//inventory
import InventoryRoutes from "./InventoryRoutes";


//supplier
import SupplierRoutes from './SupplierRoutes';

//login
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";


//delivery
import DeliveryRoutes from "./DeliveryRoutes";

//staff
import AddSalary from "./pages/staffManager/AddSalary";
import SalaryReport from "./pages/staffManager/SalaryReport";
import AddEmployee from './pages/staffManager/AddEmployee'
import AllEmployees from './pages/staffManager/AllEmployees'
import UpdateEmployee from './pages/staffManager/UpdateEmployee'
import DeleteEmployee from './pages/staffManager/DeleteEmployee'
import AllSalaries from './pages/staffManager/AllSalaries'
import ManagerRegistration from './pages/staffManager/ManagerRegistration'
import AddVacation from './pages/staffManager/AddVacation'
import AllVacations from './pages/staffManager/AllVacations'
import ManagerAccount from './components/ManagerAccount'
import StaffManagerNavigation from './pages/staffManager/StaffManagerNavigation'
import StaffManagerDashboard from './pages/staffManager/StaffManagerDashboard'

//financial
import AddExpenses from './pages/financialManager/addExpenses';
import Home from './pages/financialManager/expensesHome';
import HomeIn from './pages/financialManager/incomeHome';
import AddIncome from './pages/financialManager/addIncome';
import DeleteEx from './pages/financialManager/deleteExpenses';
import UpdateExpenses from './pages/financialManager/updateExpenses';
import DeleteIn from './pages/financialManager/deleteIncome';
import UpdateIncome from './pages/financialManager/updateIncome';
import BalanceSheet from './pages/financialManager/balanceSheet';
import AddLiabilities from './pages/financialManager/addLiabilities';


function App() {
  return (
    <Router>
      <div className='App'>

        {/* inventory routes */}
        <Routes>
          <Route path="/inventory/*" element={<InventoryRoutes />} />
        </Routes>

        {/* sales routes */}
        <Routes>
          <Route path='/sales/*' element={<SalesRoutes />} />
        </Routes>

        {/* sales manager routes */}
        <Routes>
          <Route path='/salesManager/*' element={<SalesManagerRoutes />} />
        </Routes>

        {/* supplier routes */}
        <Routes>
          <Route path='/supplierManager/*' element={<SupplierRoutes />} />
        </Routes>













        {/* delivery routes */}
       <Routes>
          <Route path='/deliveryManager/*' element={<DeliveryRoutes />} />
        </Routes>


        {/* staff routes */}
        <Routes>
          <Route path='/staffManagerDashboard/:id' element={<StaffManagerNavigation />} />
        </Routes>
        <Routes>
          <Route path='/staffManagerDashboard/:id' element={<StaffManagerDashboard />} />
        </Routes>

        <Routes>
          <Route path='/addSalary/:id' element={<StaffManagerNavigation />} />
        </Routes>
        <Routes>
          <Route path='/addSalary/:id' element={<AddSalary />} />
        </Routes>

        <Routes>
          <Route path='/salary/:empId/:month/:year' element={<StaffManagerNavigation />} />
        </Routes>
        <Routes>
          <Route path='/salary/:empId/:month/:year' element={<SalaryReport />} />
        </Routes>

        <Routes>
          <Route path='/addEmployee/:id' element={<StaffManagerNavigation />} />
        </Routes>
        <Routes>
          <Route path='/addEmployee/:id' element={<AddEmployee />} />
        </Routes>

        <Routes>
          <Route path='/allEmployees/:id' element={<StaffManagerNavigation />} />
        </Routes>
        <Routes>
          <Route path='/allEmployees/:id' element={<AllEmployees />} />
        </Routes>

        <Routes>
          <Route path='/updateEmployee/:empId' element={<StaffManagerNavigation />} />
        </Routes>
        <Routes>
          <Route path='/updateEmployee/:empId' element={<UpdateEmployee />} />
        </Routes>

        <Routes>
          <Route path='/deleteEmployee/:id' element={<StaffManagerNavigation />} />
        </Routes>
        <Routes>
          <Route path='/deleteEmployee/:id' element={<DeleteEmployee />} />
        </Routes>

        <Routes>
          <Route path='/allSalaries/:id' element={<StaffManagerNavigation />} />
        </Routes>
        <Routes>
          <Route path='/allSalaries/:id' element={<AllSalaries />} />
        </Routes>

        <Routes>
          <Route path='/managerRegistration/:id' element={<StaffManagerNavigation />} />
        </Routes>
        <Routes>
          <Route path='/managerRegistration/:id' element={<ManagerRegistration />} />
        </Routes>

        <Routes>
          <Route path='/addVacation/:id' element={<StaffManagerNavigation />} />
        </Routes>
        <Routes>
          <Route path='/addVacation/:id' element={<AddVacation />} />
        </Routes>

        <Routes>
          <Route path='/allVacations/:id' element={<StaffManagerNavigation />} />
        </Routes>
        <Routes>
          <Route path='/allVacations/:id' element={<AllVacations />} />
        </Routes>

        {/* financial manager routes */}
        <Routes>
          <Route path="/add" element={<AddExpenses />} />
        </Routes>

        <Routes>
          <Route path="/HomeExpenses" element={<Home />} />
        </Routes>

        <Routes>
          <Route path="/HomeIncome" element={<HomeIn />} />
        </Routes>

        <Routes>
        <Route path="/addLiabilities" element={<AddLiabilities />} />
        </Routes>


        <Routes>
          <Route path="/addIncome" element={<AddIncome />} />
        </Routes>

        <Routes>
          <Route path="/deleteExpen/:id" element={<DeleteEx />} />
        </Routes>

        <Routes>
          <Route path="/updateExpenses/:id" element={<UpdateExpenses />} />
        </Routes>

        <Routes>
          <Route path="/deleteIncome/:id" element={<DeleteIn />} />
        </Routes>

        <Routes>
          <Route path="/updateIncome/:id" element={<UpdateIncome />} />
        </Routes>

        <Routes>
          <Route path="/balanceSheetHome" element={<BalanceSheet />} />
        </Routes>

        

        {/* login routes */}
        <Routes>
          <Route path='/' element={<Login />} />
        </Routes>

        <Routes>
          <Route path='/forgetPassword' element={<ForgetPassword />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;