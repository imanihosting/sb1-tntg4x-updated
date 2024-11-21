import React from 'react';
import { CreditCard, Download } from 'lucide-react';

const PaymentHistory: React.FC = () => {
  const payments = [
    {
      id: 1,
      childminder: "Mary O'Connor",
      amount: 240,
      date: "2024-03-15",
      status: "completed"
    },
    {
      id: 2,
      childminder: "Sarah Murphy",
      amount: 160,
      date: "2024-03-10",
      status: "completed"
    }
  ];

  return (
    <div className="table-responsive">
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Childminder</th>
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Receipt</th>
          </tr>
        </thead>
        <tbody>
          {payments.map(payment => (
            <tr key={payment.id}>
              <td>{payment.childminder}</td>
              <td>{payment.date}</td>
              <td>€{payment.amount}</td>
              <td>
                <span className="badge bg-success">{payment.status}</span>
              </td>
              <td>
                <button className="btn btn-sm btn-outline-primary">
                  <Download size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PaymentHistory;