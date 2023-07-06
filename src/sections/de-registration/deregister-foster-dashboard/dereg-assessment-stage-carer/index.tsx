import deRegConsulationFosterImg from "../../../../assets/img/de-register/dereg-consultation-foster-img.svg";
import deFosterReviewImg from "../../../../assets/img/de-register/dereg-foster-review-img.svg";
import deFinalOutcomeImg from "../../../../assets/img/de-register/final-outcome-img.svg";

export const DeRegAssessmentStageData = [
  {
    id: 1,
    informationIcon: [
      {
        content: `Initial  Consideration / Request to Deregister the Foster Carer.
    `,
      },
    ],
    imgIcon: deRegConsulationFosterImg,
    textForApi: "initalContact",
    text: "Consultation with Foster Carer",
    informationText: "Consultation with Foster Carer",
    viewForms: "View Form",
    href: "/de-registration/deregister-foster-carer/consultation-with-foster-carer",
    status: "Failed"
  },
  {
    id: 2,
    informationIcon: [
      {
        content: `Prospective Foster Carers / Customers makes initial enquiry by Phone / Social  media / Whatsapp  or use our Website - contact us form
    `,
      },
    ],
    imgIcon: deFosterReviewImg,
    textForApi: "initalEnquiryStage",
    text: "Formal Review Meeting",
    informationText: "Formal Review Meeting",
    viewForms: "View Form",
    href: "/de-registration/deregister-foster-carer/formal-review-meeting",
    status: "Passed"
  },
  {
    id: 3,
    informationIcon: [
      { content: `IFA Office admin will send out a Digital  info Pack` },
      {
        heading: `Deregistration Type`,
        subContentTwo: [
          { content: `Uncontested resignations.` },
          { content: `Termination of approval after allegations` },
          {
            content: `Termination of approval when there have been no allegations 
          and a resignation letter has not been received.` },
        ],
      },
    ],
    imgIcon: deFinalOutcomeImg,
    textForApi: "digitalInfo",
    text: "Final Outcome",
    informationText: "Final Outcome",
    viewForms: "Review Report",
    href: "#",
    status: "Pending"
  },

];
