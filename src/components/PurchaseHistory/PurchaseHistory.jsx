import React from 'react';
import './PurchaseHistory.css';

const PurchaseHistory = ({ history }) => {
  return (
    <div className="purchase-history">
      <h2>ประวัติการซื้อสินค้า</h2>
      <table>
        <thead>
          <tr>
            <th>วันที่และเวลา</th>
            <th>แพ็กเกจ</th>
            <th>จำนวนเงิน</th>
            <th>สถานะ</th>
            <th> รหัสอ้างอิง </th>
          </tr>
        </thead>
        <tbody>
          {history.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date} : {entry.time} </td>
              <td>{entry.package}</td>
              <td>{entry.amount}</td> 
              <td>{entry.status}</td>    
              <td>{entry.refcode} </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PurchaseHistory;
