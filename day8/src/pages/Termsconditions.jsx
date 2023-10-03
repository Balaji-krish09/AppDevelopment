import React from 'react';
import '../assets/css/Termsconditions.css'

const TermsConditions = () => {
  return (
    <div className="terms-and-conditions">
      <h2>Terms and Conditions</h2>
      <p>
        Please read these Terms and Conditions carefully before using [Your Meeting Scheduler] website or mobile application.
      </p>

      <h3>1. Acceptance of Terms</h3>
      <p>
        By using [Your Meeting Scheduler], you agree to be bound by these Terms and Conditions, which govern your use of the service.
      </p>

      <h3>2. Meeting Scheduling</h3>
      <p>
        [Your Meeting Scheduler] allows you to schedule and manage meetings. You are responsible for the accuracy of the information provided when scheduling meetings.
      </p>

      <h3>3. User Conduct</h3>
      <p>
        You agree not to use [Your Meeting Scheduler] for any unlawful or prohibited purposes and to comply with all applicable laws and regulations.
      </p>

      {/* Add more terms and conditions as needed */}
    </div>
  );
};

export default TermsConditions;
