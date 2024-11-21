import React, { useState } from 'react';
import ChildminderRegistration from '../components/ChildminderRegistration';
import ParentRegistration from '../components/ParentRegistration';

const Register: React.FC = () => {
  const [userType, setUserType] = useState<'parent' | 'childminder'>('parent');

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="text-center mb-5">
            <h1 className="display-5 mb-3">Join ChildMinderConnect</h1>
            <p className="lead text-muted">Register as a parent or childminder to get started</p>
          </div>

          <div className="btn-group w-100 mb-5">
            <button
              type="button"
              className={`btn btn-lg ${userType === 'parent' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setUserType('parent')}
            >
              I'm a Parent
            </button>
            <button
              type="button"
              className={`btn btn-lg ${userType === 'childminder' ? 'btn-primary' : 'btn-outline-primary'}`}
              onClick={() => setUserType('childminder')}
            >
              I'm a Childminder
            </button>
          </div>

          {userType === 'parent' ? <ParentRegistration /> : <ChildminderRegistration />}
        </div>
      </div>
    </div>
  );
};

export default Register;