import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import "./style.css";
class Json extends React.Component {
  constructor() {
    super();
    this.state = {
      act: 0,
      index: "",
      datas: [],
    };
  }
  componentDidMount() {
    this.refs.name.focus();
  }

  SubmitData = (e) => {
    e.preventDefault();
    let datas = this.state.datas;
    let name = this.refs.name.value;
    let email = this.refs.email.value;

    if (this.state.act === 0) {
      let data = {
        name,
        email,
      };
      datas.push(data);
      localStorage.setItem("mydata", JSON.stringify(data));
      let stoage = localStorage.getItem("mydata");
      stoage = JSON.parse(stoage);
      console.log(stoage);
    } else {
      let index = this.state.index;
      datas[index].name = name;
      datas[index].email = email;
    }

    this.setState({
      datas: datas,
      act: 0,
    });
    this.refs.myForm.reset();
    this.refs.name.focus();
  };

  Remove = (i) => {
    let datas = this.state.datas;
    datas.splice(i, 1);
    this.setState({
      datas: datas,
    });
    localStorage.setItem("mydata", JSON.stringify(datas));
    let stoage = localStorage.getItem("mydata");
    stoage = JSON.parse(stoage);
    console.log(stoage);
    this.refs.myForm.reset();
    this.refs.name.focus();
  };

  Edit = (i) => {
    let data = this.state.datas[i];
    this.refs.name.value = data.name;
    this.refs.email.value = data.email;
    this.setState({
      act: 1,
      index: i,
    });
    localStorage.setItem("mydata", JSON.stringify(data));
    let stoage = localStorage.getItem("mydata");
    stoage = JSON.parse(stoage);
    console.log(stoage);
    this.refs.name.focus();
  };
  render() {
    let datas = this.state.datas;
    return (
      <div>
        <Container>
          <Form ref="myForm">
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" ref="name" placeholder="Enter name" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref="email" placeholder="Email" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit" onClick={(e) => this.SubmitData(e)}>
              Submit
            </Button>
          </Form>
        </Container>
        {/* <h1 className="modify">Crud Apllication</h1>
        <form ref="myForm">
          <label className="modify">Name</label>
          <input type="text" ref="name" placeholder="enter name" />
          <label className="modify">Email</label>
          <input type="email" ref="email" placeholder="enter email" />
          <button onClick={(e) => this.SubmitData(e)} className="clr">
            Submit
          </button>
        </form> */}
        <div>
          {datas.map((item, i) => (
            <div key={i}>
              {i + 1}.{item.name},{item.email}
              <Button
                style={{ marginRight: 16 }}
                variant="primary"
                type="submit"
                onClick={() => this.Edit(i)}
              >
                edit
              </Button>
              <Button
                style={{ marginRight: 16 }}
                variant="primary"
                type="submit"
                onClick={() => this.Remove(i)}
              >
                Remove
              </Button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default Json;
