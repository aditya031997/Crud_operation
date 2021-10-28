import React from "react";
class New extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Crud operation",
      val: 0,
      index: "",
      datas: [],
    };
  }

  SubmitData = (e) => {
    e.preventDefault();
    let datas = this.state.datas;
    let name = this.refs.name.value();
    let email = this.refs.email.value();

    let data = {
      name,
      email,
    };
    datas.push(data);

    this.setState({
      datas: datas,
    });
    this.refs.myForm.reset();
    this.refs.name.focus();
  };
  render() {
    let datas = this.state.datas;
    return (
      <div>
        <h1>{this.state.title}</h1>
        <form ref="myForm">
          <label>Name</label>
          <input type="text" ref="name" placeholder="enter name" />
          <label>Email</label>
          <input type="text" ref="email" placeholder="enter email" />
          <button onClick={(e) => this.SubmitData(e)}>Submit</button>
        </form>
        <div>
          {datas.map((item, i) => (
            <div key={i}>
              <p>
                {i + 1}.{item.name},{item.email}
              </p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default New;
