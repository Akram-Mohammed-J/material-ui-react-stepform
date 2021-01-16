import React, { useState } from "react";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import Confrim from "./Confrim";
import Success from "./Success";

function UserForm(props) {
  const [state, setState] = useState({
    step: 1,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: "",
  });
  const nextStep = () => {
    const { step } = state;
    setState((prevState) => {
      return {
        ...prevState,
        step: step + 1,
      };
    });
  };
  const prevStep = () => {
    const { step } = state;
    setState((prevState) => {
      return {
        ...prevState,
        step: step - 1,
      };
    });
  };

  //handle fields change

  const handleChange = (input) => (e) => {
    setState((prevState) => {
      return {
        ...prevState,
        [input]: e.target.value,
      };
    });
  };
  const { step } = state;
  const { firstName, lastName, email, occupation, city, bio } = state;
  const values = { firstName, lastName, email, occupation, city, bio };
  switch (step) {
    case 1:
      return (
        <FormUserDetails
          nextStep={nextStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 2:
      return (
        <FormPersonalDetails
          nextStep={nextStep}
          prevStep={prevStep}
          handleChange={handleChange}
          values={values}
        />
      );
    case 3:
      return (
        <Confrim nextStep={nextStep} prevStep={prevStep} values={values} />
      );
    case 4:
      return <Success />;
  }
}

export default UserForm;
