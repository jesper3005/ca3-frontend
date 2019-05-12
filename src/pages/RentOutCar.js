import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Col } from 'reactstrap';
import styled from 'styled-components';

class FormContainer extends Component {
  state = {
    manufactor: '',
    model: '',
    seats: '',
    regNo: '',
    driveDist: '',
    productionYear: '',
    drive: '',
    fuelType: '',
    address: '',
    streetNumber: '',
    country: '',
  };

  handleSubmit = event => {
    event.preventDefault();
    this.createCar()
  };

  handleChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({ [name]: value });
  };

  createCar = () => {
    const {
      manufactor,
      model,
      seats,
      regNo,
      driveDist,
      productionYear,
      drive,
      fuelType,
      address,
      country,
    } = this.state;
    var url = `https://www.fenonline.dk/SYS_Backend/api/car/createcar/${manufactor}/${model}/${seats}/${regNo}/${driveDist}/${productionYear}/${drive}/${fuelType}/${address}/${country}`
    alert(url)
    fetch(url).then(handleHttpErrors)
  }

  render() {
    const {
      manufactor,
      model,
      seats,
      regNo,
      driveDist,
      productionYear,
      drive,
      fuelType,
      address,
      country,
    } = this.state;

    return (
      <Container>
        <Form onSubmit={this.handleSubmit}>
          <Title>Here you can rent out your own Car</Title>
          <Input
            type="text"
            name="manufactor"
            value={manufactor}
            onChange={this.handleChange}
            placeholder="What's the Manufactor?"
          />
          <Input
            type="text"
            name="model"
            value={model}
            onChange={this.handleChange}
            placeholder="What model do you own?"
          />
          <Input
            type="number"
            name="seats"
            value={seats}
            onChange={this.handleChange}
            placeholder="Number of seats"
          />
          <Input
            type="text"
            name="regNo"
            value={regNo}
            onChange={this.handleChange}
            placeholder="Registration no."
          />
          <Input
            type="text"
            name="driveDist"
            value={driveDist}
            onChange={this.handleChange}
            placeholder="Driving distance (km)"
          />
          <Input
            type="text"
            name="productionYear"
            value={productionYear}
            onChange={this.handleChange}
            placeholder="Production year"
          />
          <Input
            type="text"
            name="drive"
            value={drive}
            onChange={this.handleChange}
            placeholder="Drive"
          />
          <Input
            type="text"
            name="fuelType"
            value={fuelType}
            onChange={this.handleChange}
            placeholder="Fuel Type"
          />
          <Input
            type="text"
            name="address"
            value={address}
            onChange={this.handleChange}
            placeholder="Address"
          />
          <Input
            type="text"
            name="country"
            value={country}
            onChange={this.handleChange}
            placeholder="Country"
          />
          <Submit type="submit">Submit</Submit>
        </Form>
    </Container>
    );
  }
}

export default withRouter(FormContainer);

const Container = styled(Col)`
`;
Container.defaultProps = {
  xs: 12, sm: 12, md: 12, lg: 12,
};

const Form = styled.form`
  min-height: calc(100vh - 4rem);
`;

const Title = styled.h1`
  text-align: center;
  margin: 1rem 0;
`;

const Input = styled.input`
  display: inline-block;
  min-width: 32%; max-width: 32%;
  min-height: 3rem; max-height: 3rem;
  margin: 1rem 0.5rem;
  font-size: 120%;
  border: 1px solid #787878; border-radius: 5px;
  color: white; background-color: #787878;
  &::placeholder {
    color: #dddddd;
  }
`;

const Submit = styled.button`
  position: absolute; bottom: 20rem; right: 2rem;
  min-width: 10rem; max-width: 10rem;
  min-height: 3rem; max-height: 3rem;
  font-size: 120%;
  border: 1px solid #787878; border-radius: 5px;
  color: white; background-color: #787878;
`;


function handleHttpErrors(res) {
  if (!res.ok) {
      return Promise.reject({ status: res.status, fullError: res.json() })
  }
  return res.json();
}