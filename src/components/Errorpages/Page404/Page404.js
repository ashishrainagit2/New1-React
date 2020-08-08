import React from "react";
import classes from "./Page404.module.css";
import {Link} from "react-router-dom";

function Page404() {
  return (
    <section className={classes.page_404}>
      <div className={classes.container}>
        <div className={classes.row}>
          <div>
            <div>
              <div className={classes.four_zero_four_bg}>
                <h1 className={classes.center}>404</h1>
              </div>

              <div className={(classes.contant_box_404, classes.center)}>
                <h3 className={classes.h2}>Look like you're lost</h3>
                <p>the page you are looking for not avaible!</p>
                <Link to="/" className={classes.link_404}>
                  Go to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Page404;
