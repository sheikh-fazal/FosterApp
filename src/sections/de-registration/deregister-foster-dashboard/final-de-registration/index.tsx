import agencyDecisionImg from "../../../../assets/img/de-register/agency-decision-img.svg";
import resignationFosterCarerImg from "../../../../assets/img/de-register/resignation-foster-carers-img.svg";
import movedDeRegisterStatusImg from "../../../../assets/img/de-register/moved-deregister-status-img.svg";


export const DeRegContractsAgreementsData = [
  {
    id: 1,
    informationIcon: [
      {
        content: `A report must be presented to the Fostering Panel on the foster carer's first review for a recommendation and thereafter may be presented to the fostering panel every three years. West Berkshire Children and Family Service complete the First Foster Care Review within 6 months of the carers approval. Other reasons to return to panel would include the following: where significant changes to the foster carer's approval or the termination of the foster carer's approval are recommended or where any circumstances exist which in the opinion of the Agency Decision Maker require consideration by the Fostering Panel. This may include the situation where an updating Disclosure and Barring Service check reveals a new concern about the foster carer or a member of the household.
    `,

      },
      {
        content: `Whether presented to the fostering panel or not, the report will be presented to the Agency Decision Maker for a decision as to whether the foster carer remains suitable to foster and whether the terms of approval remain suitable. Where it has been presented to the fostering panel, the Agency Decision Maker will take into account the panel's recommendation.
    `,

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
