import React, { useState, useEffect } from "react";
import EmployeeCard from "./components/EmployeeCard";
import TimeLogTable from "./components/TimeLogTable";
import "bootstrap/dist/css/bootstrap.min.css";

const initialEmployees = [
  { id: 1, name: "Nguyễn Văn A" },
  { id: 2, name: "Trần Thị B" },
  { id: 3, name: "Lê Văn C" },
];

export default function App() {
  const [employees] = useState(initialEmployees);
  const [logs, setLogs] = useState(() => {
    const saved = localStorage.getItem("timeLogs");
    return saved ? JSON.parse(saved) : [];
  });

  const handleCheckInOut = (employee) => {
    const now = new Date().toLocaleString("vi-VN");
    const newLog = {
      id: Date.now(),
      employeeId: employee.id,
      name: employee.name,
      time: now,
    };
    const updatedLogs = [newLog, ...logs];
    setLogs(updatedLogs);
    localStorage.setItem("timeLogs", JSON.stringify(updatedLogs));
  };

  const handleClearLogs = () => {
    setLogs([]);
    localStorage.removeItem("timeLogs");
  };

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">Chấm Công Quán Cafe</h1>
      <div className="row">
        {employees.map((emp) => (
          <div key={emp.id} className="col-md-4">
            <EmployeeCard employee={emp} onCheckInOut={handleCheckInOut} />
          </div>
        ))}
      </div>
      <hr />
      <TimeLogTable logs={logs} onClear={handleClearLogs} />
    </div>
  );
}