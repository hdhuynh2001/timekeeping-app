import React from "react";
import { Table, Button } from "react-bootstrap";

export default function TimeLogTable({ logs, onClear }) {
  return (
    <div>
      <h3>Lịch sử chấm công</h3>
      <Button variant="danger" size="sm" onClick={onClear}>
        Xoá tất cả
      </Button>
      <Table striped bordered hover className="mt-3">
        <thead>
          <tr>
            <th>Nhân viên</th>
            <th>Thời gian</th>
          </tr>
        </thead>
        <tbody>
          {logs.length === 0 ? (
            <tr>
              <td colSpan="2" className="text-center">Chưa có dữ liệu</td>
            </tr>
          ) : (
            logs.map((log) => (
              <tr key={log.id}>
                <td>{log.name}</td>
                <td>{log.time}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </div>
  );
}