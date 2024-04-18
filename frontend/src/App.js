// import React, { useState } from "react";
//sales person
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SalesmenDashboard from './pages/salesPerson/SalesmenDashboard';
import UpdateSalesmanDetails from './pages/salesPerson/UpdateSalesmanDetails';
import DeleteSalesman from './pages/salesPerson/DeleteSalesman';
import ChangeSalesmanPassword from './pages/salesPerson/ChangeSalesmanPassword';
import AddNewSale from './pages/salesPerson/AddNewSale';
import SalesSummary from './pages/salesPerson/SalesSummary';
import CurrentSale from './pages/salesPerson/CurrentSale';
import MyAccount from './components/MyAccount';
import DeleteSale from './pages/salesPerson/DeleteSale';
import RemainingStock from './pages/salesPerson/RemainingStock';
import Navigations from './components/Navigations';

//sales manager
import AddDailyStock from './pages/salesManager/AddDailyStock';
import SalesManagerDashboard from './pages/salesManager/SalesManagerDashboard';
import SalesPersonDetails from './pages/salesManager/SalesPersonDetails';
import RemainingInventoryStock from './pages/salesManager/RemainingInventoryStock';
import MonthlySales from './pages/salesManager/MonthlySales';
import MonthlyReport from './pages/salesManager/MonthlyReport';
import SalesManagerNavigations from './pages/salesManager/SalesManagerNavigations';

//inventory
import InventoryRoutes from "./InventoryRoutes";


//staf
import AddSalary from "./pages/staffManager/AddSalary";
import SalaryReport from "./pages/staffManager/SalaryReport";
import AddEmployee from './pages/staffManager/AddEmployee'
import AllEmployees from './pages/staffManager/AllEmployees'
import UpdateEmployee from './pages/staffManager/UpdateEmployee'
import DeleteEmployee from './pages/staffManager/DeleteEmployee'
import AllSalaries from './pages/staffManager/AllSalaries'
import ManagerRegistration from './pages/staffManager/ManagerRegistration'
import ManagerAccount from './components/ManagerAccount';

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

//supplier
import Details from './pages/supplierManager/details';
import SupplierHome from './pages/supplierManager/Home';
import Update from './pages/supplierManager/update';
import Supplierdetails from './pages/supplierManager/supplierdetails';
import Search from './pages/supplierManager/serach';

//login
import Login from "./components/Login";
import ForgetPassword from "./components/ForgetPassword";

function App() {
  return (
    <Router>
      <div className='App'>

        {/* inventory routes */}
        <Routes>
          <Route path="/inventory/*" element={<InventoryRoutes />} />
        </Routes>

        {/* salesperson routes */}
        <Routes>
          <Route path="/salesmenDashboard/:id" element={<Navigations />} />
        </Routes>
        <Routes>
          <Route path='/salesmenDashboard/:id' element={<SalesmenDashboard />} />
        </Routes>

        <Routes>
          <Route path="/updateSalesman/:salespersonID" element={<Navigations />} />
        </Routes>
        <Routes>
          <Route path='/updateSalesman/:salespersonID' element={<UpdateSalesmanDetails />} />
        </Routes>

        <Routes>
          <Route path="/deleteSalesman/:id" element={<Navigations />} />
        </Routes>
        <Routes>
          <Route path='/deleteSalesman/:id' element={<DeleteSalesman />} />
        </Routes>

        <Routes>
          <Route path="/changeSalesmanPassword/:id" element={<Navigations />} />
        </Routes>
        <Routes>
          <Route path='/changeSalesmanPassword/:id' element={<ChangeSalesmanPassword />} />
        </Routes>

        <Routes>
          <Route path="/myAccount/:id" element={<Navigations />} />
        </Routes>
        <Routes>
          <Route path='/myAccount/:id' element={<MyAccount />} />
        </Routes>

        {/* sales routes */}
        <Routes>
          <Route path="/addNewSale/:id" element={<Navigations />} />
        </Routes>
        <Routes>
          <Route path='/addNewSale/:id' element={<AddNewSale />} />
        </Routes>

        <Routes>
          <Route path="/SalesSummary/:id" element={<Navigations />} />
        </Routes>
        <Routes>
          <Route path='/SalesSummary/:id' element={<SalesSummary />} />
        </Routes>

        <Routes>
          <Route path="/currentSale/:id/:cusID" element={<Navigations />} />
        </Routes>
        <Routes>
          <Route path='/currentSale/:id/:cusID' element={<CurrentSale />} />
        </Routes>

        <Routes>
          <Route path="/deleteSale/:id/:cusID/:saleID" element={<Navigations />} />
        </Routes>
        <Routes>
          <Route path='/deleteSale/:id/:cusID/:saleID' element={<DeleteSale />} />
        </Routes>

        <Routes>
          <Route path="/remainingStock/:id" element={<Navigations />} />
        </Routes>
        <Routes>
          <Route path='/remainingStock/:id' element={<RemainingStock />} />
        </Routes>

        {/* sales manager routes */}
        <Routes>
          <Route path="/addStock/:id" element={<SalesManagerNavigations />} />
        </Routes>
        <Routes>
          <Route path='/addStock/:id' element={<AddDailyStock />} />
        </Routes>

        <Routes>
          <Route path="/salesManagerDashboard/:id" element={<SalesManagerNavigations />} />
        </Routes>
        <Routes>
          <Route path='/salesManagerDashboard/:id' element={<SalesManagerDashboard />} />
        </Routes>

        <Routes>
          <Route path="/salesPersonDetails/:id" element={<SalesManagerNavigations />} />
        </Routes>
        <Routes>
          <Route path='/salesPersonDetails/:id' element={<SalesPersonDetails />} />
        </Routes>

        <Routes>
          <Route path="/remainingInventoryStock/:id" element={<SalesManagerNavigations />} />
        </Routes>
        <Routes>
          <Route path='/remainingInventoryStock/:id' element={<RemainingInventoryStock />} />
        </Routes>

        <Routes>
          <Route path="/monthlySales/:salesPersonID/:id" element={<SalesManagerNavigations />} />
        </Routes>
        <Routes>
          <Route path='/monthlySales/:salesPersonID/:id' element={<MonthlySales />} />
        </Routes>

        <Routes>
          <Route path="/monthlyReport/:id" element={<SalesManagerNavigations />} />
        </Routes>
        <Routes>
          <Route path='/monthlyReport/:id' element={<MonthlyReport />} />
        </Routes>

        <Routes>
          <Route path="/managerAccount/:id" element={<SalesManagerNavigations />} />
        </Routes>
        <Routes>
          <Route path='/managerAccount/:id' element={<ManagerAccount />} />
        </Routes>

        {/* staff routes */}
        <Routes>
          <Route path='/addSalary' element={<AddSalary />} />
        </Routes>

        <Routes>
          <Route path='/salary/:empId/:month/:year' element={<SalaryReport />} />
        </Routes>

        <Routes>
          <Route path='/addEmployee' element={<AddEmployee />} />
        </Routes>

        <Routes>
          <Route path='/allEmployees' element={<AllEmployees />} />
        </Routes>

        <Routes>
          <Route path='/updateEmployee/:empId' element={<UpdateEmployee />} />
        </Routes>

        <Routes>
          <Route path='/deleteEmployee/:id' element={<DeleteEmployee />} />
        </Routes>

        <Routes>
          <Route path='/allSalaries' element={<AllSalaries />} />
        </Routes>

        <Routes>
          <Route path='/managerRegistration' element={<ManagerRegistration />} />
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

        {/* supplier routes */}
        <Routes>
          <Route path="/details" element={<Details />}></Route>
        </Routes>

        <Routes>
          <Route path="/home" element={<SupplierHome />}  ></Route >
        </Routes>

        <Routes>
          <Route path="/update/:id" element={<Update />} ></Route >
        </Routes>

        <Routes>
          <Route path="/supplierdetails" element={<Supplierdetails />} ></Route >
        </Routes>

        <Routes>
          <Route path="/search" element={< Search />} ></Route >
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