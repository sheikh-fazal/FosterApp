import agencyDecisionImg from "../../../../assets/img/de-register/agency-decision-img.svg";
import resignationFosterCarerImg from "../../../../assets/img/de-register/resignation-foster-carers-img.svg";
import movedDeRegisterStatusImg from "../../../../assets/img/de-register/moved-deregister-status-img.svg";


export const DeRegContractsAgreementsData = [
  {
    id: 1,
    informationIcon: [
      {
        content: `The Agency Decision Maker will be sent a copy of all papers considered by the panel when reaching their recommendation.`,

      },
      {
        content: `Based on the Recommendation ,Agency Decision Maker (ADM ) will either approve or reject the Foster Carer`,

      },
    ],
    imgIcon: agencyDecisionImg,
    textForApi: "initalContact",
    text: "Agency Decision ",
    informationText: "Agency Decision ",
    viewForms: ["View Form"],
    href: "/recruitment/enquiry-stage/initial-contact",
    status: "Failed"
  },
  {
    id: 2,
    informationIcon: [
      {
        content: `The review findings and recommendations to the Fostering Panel  will be presented in a written report which incorporates the views of the child or children placed, the written views of the foster carer and any report provided by a social worker particularly where concerns have been expressed about a placement with the foster carer. Any recommendations for change in the foster carer's approval should be highlighted in the report. Foster Carers are invited to the review and are expected to attend.
    `,
      },
    ],
    imgIcon: resignationFosterCarerImg,
    textForApi: "initalEnquiryStage",
    text: "Resignation by Foster Carers",
    informationText: "Resignation by Foster Carers",
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
    imgIcon: movedDeRegisterStatusImg,
    textForApi: "digitalInfo",
    text: "Moved to De-register status",
    informationText: "Moved to De-register status",
    viewForms: ["De-registeration Done Successfully",],
    href: "#",
    status: "Pending"
  },
];
