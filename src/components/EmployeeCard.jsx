import React from "react";
import { Button, Card } from "react-bootstrap";

export default function EmployeeCard({ employee, onCheckInOut }) {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body>
        <Card.Title>{employee.name}</Card.Title>
        <Button variant="primary" onClick={() => onCheckInOut(employee)}>
          Chấm công
        </Button>
      </Card.Body>
    </Card>
  );
}