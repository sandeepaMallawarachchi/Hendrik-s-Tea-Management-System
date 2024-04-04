import React, { useState } from 'react';
import axios from 'axios';

function AddSalary() {
    const [empId, setEmpId] = useState("");
    const [name, setName] = useState("");
    const [designation, setDesignation] = useState("");
    const [month, setMonth] = useState("");
    const [basicSalary, setBasicSalary] = useState(0);
    const [ETFbonus, setETFbonus] = useState(0);
    const [EPFbonus, setEPFbonus] = useState(0);

    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const sendData = async (e) => {
        e.preventDefault();

        const newSalary = {
            empId,
            name,
            designation,
            month,
            basicSalary,
            ETFbonus,
            EPFbonus,
        };

        try {
            await axios.post(`http://localhost:8070/staff/salary/addSalary`, newSalary);
            alert("Success! Salary added");
        } catch (error) {
            alert("Error! Failed to add salary");
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <form onSubmit={sendData}>
                <div className="mb-3">
                    <label htmlFor="empId" className="form-label">Enter Employee ID: </label>
                    <input type="text" className="form-control" id="empId" value={empId} onChange={(e) => setEmpId(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Employee Name: </label>
                    <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="designation" className="form-label">Designation: </label>
                    <input type="text" className="form-control" id="designation" value={designation} onChange={(e) => setDesignation(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="month" className="form-label">Select Month: </label>
                    <select className="form-select" id="month" value={month} onChange={(e) => setMonth(e.target.value)}>
                        <option value="">Select Month</option>
                        {months.map((month, index) => (
                            <option key={index} value={month}>{month}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="basicSalary" className="form-label">Enter Basic Salary: </label>
                    <input type="number" className="form-control" id="basicSalary" value={basicSalary} onChange={(e) => setBasicSalary(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="ETFbonus" className="form-label">ETF Bonus Amount: </label>
                    <input type="number" className="form-control" id="ETFbonus" value={ETFbonus} onChange={(e) => setETFbonus(e.target.value)} />
                </div>

                <div className="mb-3">
                    <label htmlFor="EPFbonus" className="form-label">EPF Bonus Amount: </label>
                    <input type="number" className="form-control" id="EPFbonus" value={EPFbonus} onChange={(e) => setEPFbonus(e.target.value)} />
                </div>

                <button type="submit" className="btn btn-primary">Add Salary</button>
            </form>
        </div>
    );
}

export default AddSalary;