import React, { Component } from 'react';
import '../assets/css/Schedule.css'

class Schedule extends Component {
  constructor(props) {
    super(props);

    this.state = {
      meetings: [],
      newMeeting: {
        title: '',
        date: '',
        time: '',
      },
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      newMeeting: {
        ...prevState.newMeeting,
        [name]: value,
      },
    }));
  };

  handleAddMeeting = () => {
    const { newMeeting, meetings } = this.state;
    this.setState({
      meetings: [...meetings, newMeeting],
      newMeeting: {
        title: '',
        date: '',
        time: '',
      },
    });
  };

  render() {
    const { meetings, newMeeting } = this.state;

    return (
      <div>
        <h1>Meeting Scheduler</h1>

        <div>
          <input
            type="text"
            name="title"
            placeholder="Meeting Title"
            value={newMeeting.title}
            onChange={this.handleInputChange}
          />
          <input
            type="date"
            name="date"
            value={newMeeting.date}
            onChange={this.handleInputChange}
          />
          <input
            type="time"
            name="time"
            value={newMeeting.time}
            onChange={this.handleInputChange}
          />
          <button onClick={this.handleAddMeeting}>Add Meeting</button>
        </div>

        <ul>
          {meetings.map((meeting, index) => (
            <li key={index}>
              <strong>{meeting.title}</strong> - {meeting.date} at {meeting.time}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Schedule;
