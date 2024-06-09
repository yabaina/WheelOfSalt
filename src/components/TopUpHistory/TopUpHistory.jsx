import React from 'react';
import './TopUpHistory.css';

const TopUpHistory = ({ history }) => {
  return (
    <div className="topup-history">
      <h2>ประวัติการเติมเงิน</h2>
      <table>
        <thead>
          <tr>
            <th>รหัสรายการ</th>
            <th>วันที่และเวลา</th>
            <th>จำนวนเงิน</th>
            <th>รายละเอียด</th>
            <th>สถานะ</th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry, index) => (
            <tr key={index}>
              <td>{entry.itemcode} </td>
              <td>{entry.date} : {entry.time} </td>
              <td>{entry.amount} </td>        
              <td>{entry.refcode} </td>
              <td>{entry.status} </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TopUpHistory;
