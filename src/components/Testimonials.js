import React from "react";
import Fade from "react-reveal/Fade";
import { translate } from "react-i18next";

import ScrollToTopOnMount from "./helpers/ScrollToTopOnMount";
import Texttestem from "./helpers/Texttestem";
import testimonials from "../data/testimonials";

class Testimonials extends React.Component {
  render() {
    return (
      <div className="main-content">
        <ScrollToTopOnMount />

        <Texttestem />

        <div className="pages ">
          <div className="container-fluid bottom">
            <div className="row">
              <div className="col-md-4 offset-md-1">
                <div className="huge">
                  <p className="">
                    <Fade bottom cascade>
                      {this.props.t("testim.text1a")}
                    </Fade>
                  </p>
                  <p className=" pleft">
                    <Fade bottom cascade>
                      {this.props.t("testim.text1b")}
                    </Fade>
                  </p>
                  <p className="">
                    <Fade bottom cascade>
                      {this.props.t("testim.text1c")}
                    </Fade>
                  </p>
                </div>
              </div>

              <div className="col-md-5">
                {testimonials.map(testimonial => (
                  <div key={testimonial.id} className="bq">
                    <Fade bottom cascade />

                    <div className="blockquote">
                      <Fade delay={100}>
                        <p>{testimonial.blockq}</p>
                      </Fade>

                      <Fade cascade delay={200}>
                        <div className="foot">
                          <h1>
                            {testimonial.name}, <span>{testimonial.post}</span>
                          </h1>
                          <div className="company">{testimonial.company}</div>
                        </div>
                      </Fade>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default translate("common")(Testimonials);
