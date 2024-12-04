import { useLocation } from 'react-router-dom';
import RegisterRecruiter from './RegisterRecruiter';
import RegisterJobSeeker from './RegisterJobSeeker';

const Register = () => {
  const location = useLocation();
  const userType = location.state?.userType || 'jobseeker'; // Retrieve userType from state

  if (!userType) {
    return <div>Error: User type not specified. Please go back and try again.</div>;
  }

  return (
    <div>
      {userType === 'recruiter' ? (
        <RegisterRecruiter />
      ) : userType === 'jobseeker' ? (
        <RegisterJobSeeker />
      ) : (
        <div>Error: Invalid user type.</div>
      )}
    </div>
  );
};

export default Register;
