import React from "react";
import faqImg from "../../images/FaqImg.png"
const FaQ = () => {
  return (
    <div>
      <div
        className="bg-primary text-light d-flex justify-content-center align-items-center mb-5"
        style={{ height: "15vh" }}
      >
        <h2 className="fs-1">Frequently Asked Questions</h2>
      </div>
      <div className="container">
      <section className="row my-5">

        <div className="accordion col-md-6" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                What’s the right way to replace my missing teeth?
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="text-start">
                  At Just Smile Dental Care, we offer several high-quality solutions
                  for recompleting capable smiles. In most cases, our team is
                  likely to recommend dental implants as the ideal choice
                  because of their valuable benefits regarding both patient
                  health and aesthetic appearance. However, there is no option
                  that’s universally “right” for every single patient in need.
                  We’re not interested in overselling you or forcing you to
                  accept a treatment plan that doesn’t work for your unique
                  situation and budget – that’s why our team of doctors goes
                  over every recommendation in detail, outlining the benefits
                  and potential disadvantages of each so that patients can make
                  a confident decision regarding their smile’s future.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Do you treat children?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="text-start">
                  Yes, of course! We enjoy seeing whole families at each of our
                  two office locations in Lafayette and Boulder, CO. Our team is
                  always kind and patient with younger visitors, and
                  pediatric-friendly services like dental sealants and fluoride
                  treatment can provide valuable protection for their growing
                  smiles.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Do my wisdom teeth need to be removed?
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="text-start">
                  It depends. In most cases, wisdom teeth will not have enough
                  room to emerge into the mouth properly, causing overcrowding,
                  impaction, infection, and other dangerous consequences.
                  However, if these teeth have an adequate amount of space and
                  don’t threaten the health of surrounding teeth, they may be
                  able to thrive. Our doctors will keep a close eye on the
                  progression of wisdom teeth and recommend extraction if it
                  becomes necessary to preserve your overall oral health and
                  wellbeing.
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                How do I know if my gums are healthy?
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p className="text-start">
                Healthy gums are pink in color and do not bleed under normal circumstances (when eating or flossing, for example). If your soft tissue does bleed on occasion or is overly red or swollen, this is a common sign of periodontal (gum) disease. At Just Smile Dental Care, we provide periodontal screenings as a vital part of every checkup and will recommend further treatment if needed.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6">
            <img className="img-fluid" src={faqImg} alt="" />
        </div>
      </section>
      </div>
    </div>
  );
};

export default FaQ;
