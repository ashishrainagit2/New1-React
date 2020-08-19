import React, {Component} from "react";
import classes from "./ContactUs.module.css";
// import { connect } from 'react-redux'

export class ContactUs extends Component {
  constructor(props) {
    super(props);
    console.log("props", props);
    this.state = {
      formIsValid: false,
      formControls: {
        name: {
          value: "",
          placeholder: "Name",
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true,
          },
          touched: false,
        },
        street: {
          value: "",
          placeholder: "Street",
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true,
          },
          touched: false,
        },
        zipcode: {
          value: "",
          placeholder: "Zipcode",
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true,
          },
          touched: false,
        },
        country: {
          value: "",
          placeholder: "Country",
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true,
          },
          touched: false,
        },
        email: {
          value: "",
          placeholder: "Name",
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true,
            isEmail: true,
          },
          touched: false,
        },
        cars: {
          value: "volvo",
          placeholder: "cars",
          valid: false,
          validationRules: {
            minLength: 4,
            isRequired: true,
          },
          touched: false,
        },
      },
    };
    this.textInput = React.createRef();
  }

  componentDidMount() {
    const inputNode = this.textInput.current;
    inputNode.focus();
  }

  validate = (value, rules) => {
    let isValid = true;

    for (let rule in rules) {
      switch (rule) {
        case "minLength":
          isValid = isValid && this.minLengthValidator(value, rules[rule]);
          break;

        case "isRequired":
          isValid = isValid && this.requiredValidator(value);
          break;

        case "isEmail":
          isValid = isValid && this.emailValidator(value);
          break;

        default:
          isValid = true;
      }
    }
    return isValid;
  };

  /**
   * minLength Val
   * @param  value
   * @param  minLength
   * @return
   */
  minLengthValidator = (value, minLength) => {
    return value.length >= minLength;
  };

  /**
   * Check to confirm that feild is required
   *
   * @param  value
   * @return
   */
  requiredValidator = (value) => {
    return value.trim() !== "";
  };

  /**
   * Email validation
   *
   * @param value
   * @return
   */
  emailValidator = (value) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
  };

  changeHandler = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    const updatedControls = {...this.state.formControls};
    const updatedFormElements = {...updatedControls[name]};

    updatedFormElements.value = value;
    updatedFormElements.touched = true;
    updatedFormElements.valid = this.validate(value, updatedFormElements.validationRules);

    updatedControls[name] = updatedFormElements;

    let updatedFormIsValid = true;
    for (let inputIdentifier in updatedControls) {
      updatedFormIsValid = updatedControls[inputIdentifier].valid && updatedFormIsValid;
    }

    this.setState(
      {
        formControls: updatedControls,
        formIsValid: updatedFormIsValid,
      },
      () => console.log("state", this.state)
    );
  };

  formSubmitHandler = (event) => {
    event.preventDefault();
    const formData = {};
    for (let formElementId in this.state.formControls) {
      formData[formElementId] = this.state.formControls[formElementId].value;
    }
    console.log("object", "object");
    console.dir(formData);
    this.props.history.push("/");
  };

  render() {
    return (
      <div className={classes.wrapper}>
        <p> Please fill the form and submit </p>
        <form onSubmit={this.formSubmitHandler}>
          <div>
            <label>
              Name : <br />
              <input
                type="text"
                name="name"
                value={this.state.formControls.name.value}
                onChange={this.changeHandler}
                ref={this.textInput}
              />
              {!this.state.formControls.name.valid &&
                this.state.formControls.name.touched && <p> error</p>}
            </label>
          </div>

          <div>
            <label>
              Street : <br />
              <input
                type="text"
                name="street"
                value={this.state.formControls.street.value}
                onChange={this.changeHandler}
              />
              {!this.state.formControls.street.valid &&
                this.state.formControls.street.touched && <p> error</p>}
            </label>
          </div>

          <div>
            <label>
              Zip Code : <br />
              <input
                type="text"
                name="zipcode"
                value={this.state.formControls.zipcode.value}
                onChange={this.changeHandler}
              />
              {!this.state.formControls.zipcode.valid &&
                this.state.formControls.zipcode.touched && <p> error</p>}
            </label>
          </div>

          <div>
            <label>
              Country : <br />
              <input
                type="text"
                name="country"
                value={this.state.formControls.country.value}
                onChange={this.changeHandler}
              />
              {!this.state.formControls.country.valid &&
                this.state.formControls.country.touched && <p> error</p>}
            </label>
          </div>

          <div>
            <label>
              Email : <br />
              <input
                type="text"
                name="email"
                value={this.state.formControls.email.value}
                onChange={this.changeHandler}
              />
              {!this.state.formControls.email.valid &&
                this.state.formControls.email.touched && <p> error</p>}
            </label>
          </div>

          <div>
            <label htmlFor="cars">Choose a car:</label>
            <br />
            <select
              id="cars"
              name="cars"
              value={this.state.formControls.cars.value}
              onChange={this.changeHandler}
            >
              <option value="volvo">Volvo</option>
              <option value="saab">Saab</option>
              <option value="fiat">Fiat</option>
              <option value="audi">Audi</option>
            </select>
            {!this.state.formControls.name.valid &&
              this.state.formControls.name.touched && <p> error</p>}
          </div>

          <div>
            <button disabled={!this.state.formIsValid}>ORDER</button>
          </div>
        </form>
      </div>
    );
  }
}

export default ContactUs;
