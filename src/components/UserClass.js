import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    const { name } = this.props;
    return (
      <div>
        <h1>Count = {this.state.count}</h1>
        <h2>Name - {name}</h2>
        <h3>Location - Ranchi</h3>
      </div>
    );
  }
}
export default UserClass;
