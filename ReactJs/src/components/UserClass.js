import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // Initial state with dummy data
    this.state = {
      userInfo: {
        name: "Dummy",
        location: "com",
        avatar_url:""
      }
    };
  }

  async componentDidMount() {
    console.log("Component Did Mount");
    const response = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await response.json();
    console.log(json);
    // Update state with fetched data
    this.setState({
      userInfo: json,
    });
  }
  componentDidUpdate(prevProps,prevState) {
    if(this.state.count !== prevState.count )
    console.log("Component Did Update");
  }

  render() {
    // Destructure state within the render method
    const { name, location,avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url}></img>
        <h2>Name: {name}</h2>
        <h2>Location: {location}</h2>
        {/* <h2>Phone: {this.props.num}</h2> */}
        {/* Uncomment the following lines if you want to use state */}
        {/* <h2>Count: {this.state.count}</h2> */}
        {/* <button onClick={() => {
          this.setState({ count: this.state.count + 1 });
        }}>
          Save
        </button> */}
      </div>
    );
  }
}

export default UserClass;
