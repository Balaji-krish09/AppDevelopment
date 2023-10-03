import React from 'react';
import '../assets/css/Faq.css'

const Faq = () => {
  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      <div className="faq-item">
        <h3>1. How can I schedule a meeting using [Your Online Meeting App]?</h3>
        <p>
          To schedule a meeting, log in to your account, and navigate to the scheduling section. Follow the on-screen instructions to set the meeting date, time, and other details.
        </p>
      </div>

      <div className="faq-item">
        <h3>2. Is there a limit to the number of meetings I can schedule?</h3>
        <p>
          [Your Online Meeting App] offers different plans with varying limits. Check your subscription details to see the maximum number of meetings you can schedule.
        </p>
      </div>

      <div className="faq-item">
        <h3>3. Can I invite participants to the meeting from different time zones?</h3>
        <p>
          Yes, you can invite participants from different time zones. [Your Online Meeting App] will automatically adjust the meeting time based on each participant's local time zone.
        </p>
      </div>

      {/* Add more FAQ items as needed */}
    </div>
  );
};

export default Faq;
