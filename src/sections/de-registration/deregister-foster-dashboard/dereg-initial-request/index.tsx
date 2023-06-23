import initialRequestImg from "../../../../assets/img/de-register/initial-request-img.svg";
import finalOutcomeImg from "../../../../assets/img/de-register/final-outcome-img.svg";
import socialWorkerInitialImg from "../../../../assets/img/de-register/social-worker-initial-img.svg";

export const DeRegInitialRequestData = [
  {
    id: 1,
    informationIcon: [
      {
        content: `Initial  Consideration / Request to Deregister the Foster Carer.
    `,
      },
    ],
    imgIcon: initialRequestImg,
    textForApi: "initalContact",
    text: "Initial Request for Deregistration",
    informationText: "Initial Request for Deregistration",
    viewForms: ["View Form"],
    href: "/recruitment/enquiry-stage/initial-contact",
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
    imgIcon: socialWorkerInitialImg,
    textForApi: "initalEnquiryStage",
    text: "Social worker Initial Assessment",
    informationText: "Social worker Initial Assessment",
    viewForms: ["View Form"],
    href: "#",
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
    imgIcon: finalOutcomeImg,
    textForApi: "digitalInfo",
    text: " Final Outcome",
    informationText: "Digital Application Pack/ info Pack",
    viewForms: ["Uncontested resignations", "Termination of approval without Allegation", "Termination of approval after Allegation"],
    href: "#",
    status: "Pending"
  },

];
