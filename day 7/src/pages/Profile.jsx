import React, { Component } from 'react';
import '../assets/css/Profile.css'

class EditProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      bio: '',
      avatarURL: '',
      isEditing: false,
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleEditClick = () => {
    this.setState({ isEditing: true });
  };

  handleSaveClick = () => {
    this.setState({ isEditing: false });
    // Add logic to save the user's profile data to your backend
  };

  render() {
    const { username, email, bio, avatarURL, isEditing } = this.state;

    return (
      <div className="profile-container">
        <div className="user-profile">
          <div className="avatar">
            <img src={avatarURL} alt="User Avatar" />
          </div>
          <div className="user-details">
            {isEditing ? (
              <>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  value={username}
                  onChange={this.handleInputChange}
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  value={email}
                  onChange={this.handleInputChange}
                />
                <textarea
                  name="bio"
                  placeholder="Bio"
                  value={bio}
                  onChange={this.handleInputChange}
                />
              </>
            ) : (
              <>
                <h2 className="user-name">{username}</h2>
                <p className="user-email">{email}</p>
                <p className="user-bio">{bio}</p>
              </>
            )}
          </div>
          <div className="profile-actions">
            {isEditing ? (
              <button className="save-button" onClick={this.handleSaveClick}>
                Save
              </button>
            ) : (
              <button className="edit-button" onClick={this.handleEditClick}>
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default EditProfile;
