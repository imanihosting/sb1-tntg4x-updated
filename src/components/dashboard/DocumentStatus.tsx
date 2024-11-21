import React from 'react';
import { Shield, AlertCircle, CheckCircle } from 'lucide-react';

interface Document {
  type: string;
  status: 'valid' | 'expiring' | 'expired';
  expiryDate: string;
}

interface DocumentStatusProps {
  documents: Document[];
}

const DocumentStatus: React.FC<DocumentStatusProps> = ({ documents }) => {
  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'valid':
        return <CheckCircle size={18} className="text-success" />;
      case 'expiring':
        return <AlertCircle size={18} className="text-warning" />;
      case 'expired':
        return <AlertCircle size={18} className="text-danger" />;
      default:
        return <Shield size={18} className="text-muted" />;
    }
  };

  return (
    <div className="list-group list-group-flush">
      {documents.map((doc, index) => (
        <div key={index} className="list-group-item px-0">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              {getStatusIcon(doc.status)}
              <div className="ms-3">
                <h6 className="mb-0">{doc.type}</h6>
                <small className="text-muted">Expires: {doc.expiryDate}</small>
              </div>
            </div>
            {doc.status === 'expiring' && (
              <button className="btn btn-sm btn-warning">Renew</button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DocumentStatus;