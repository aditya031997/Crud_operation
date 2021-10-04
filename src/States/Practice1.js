import React from "react";
class Practice1 extends React.Component {
  state = {
    name: "",
  };

  Change = () => {
    this.setState({ name: "Samir" });
  };
  render() {
    return (
      <div>
        <h1>hello {this.state.name}</h1>
        <button type="button" onClick={this.Change}>
          Change name
        </button>
      </div>
    );
  }
}
export default Practice1;
