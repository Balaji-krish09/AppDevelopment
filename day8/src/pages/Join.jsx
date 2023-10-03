import React, { useState } from 'react';

function JoinMeeting() {
  // Define state variable for meeting ID input
  const [meetingID, setMeetingID] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // You can handle the meeting ID here, for example, by navigating to the meeting.
    // For this example, we'll just log the meeting ID to the console.
    console.log('Meeting ID:', meetingID);

    // Clear the form field after submission
    setMeetingID('');
  };

  return (
    <div className="join-meeting-container">
      <h2>Join a Meeting</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="meetingID">Meeting ID:</label>
          <input
            type="text"
            id="meetingID"
            value={meetingID}
            onChange={(e) => setMeetingID(e.target.value)}
            required
          />
        </div>
        <div>
          <button type="submit">Join</button>
        </div>
      </form>
    </div>
  );
}

export default JoinMeeting;
