import React, { useState } from 'react';
import { Upload, X, AlertCircle } from 'lucide-react';

interface AttachmentModalProps {
  show: boolean;
  onHide: () => void;
}

const AttachmentModal: React.FC<AttachmentModalProps> = ({ show, onHide }) => {
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    // Handle file upload
  };

  if (!show) return null;

  return (
    <div className="modal fade show d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header border-0">
            <h5 className="modal-title">Add Attachment</h5>
            <button type="button" className="btn-close" onClick={onHide}></button>
          </div>
          <div className="modal-body">
            <div className="alert alert-info d-flex align-items-center">
              <AlertCircle size={18} className="me-2" />
              <small>
                Files are stored securely and automatically deleted after 12 months
                in accordance with GDPR guidelines.
              </small>
            </div>
            
            <div
              className={`border-2 border-dashed rounded-3 p-4 text-center ${
                dragActive ? 'border-primary bg-light' : ''
              }`}
              onDragEnter={handleDrag}
              onDragLeave={handleDrag}
              onDragOver={handleDrag}
              onDrop={handleDrop}
            >
              <Upload size={48} className="text-muted mb-3" />
              <p className="mb-2">Drag and drop files here or</p>
              <button type="button" className="btn btn-outline-primary">
                Choose Files
              </button>
              <p className="text-muted small mt-2 mb-0">
                Maximum file size: 10MB
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttachmentModal;