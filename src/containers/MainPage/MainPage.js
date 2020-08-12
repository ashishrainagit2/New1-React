import React, {Component} from "react";
import classes from "./MainPage.module.css";

export class MainPage extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <h3 className={classes.MainHeading}>This is Main Page!</h3>
        <div>
          <p> Ex esse sit eu proident officia magna enim. Labore eu aliquip irure minim incididunt reprehenderit sint. Deserunt sunt excepteur amet est. Consequat enim est voluptate consequat irure elit enim cupidatat exercitation nostrud.</p>

          <p>Nisi duis consectetur labore nulla ullamco nulla dolore culpa. Non voluptate deserunt pariatur cillum deserunt magna elit incididunt in officia do consectetur ex in. Eiusmod do quis incididunt excepteur non sunt quis nisi esse tempor sint. Pariatur eu nisi sunt in nisi ut culpa aliquip reprehenderit aute officia velit deserunt.</p>
        </div>
      </div>
    );
  }
}

export default MainPage;
