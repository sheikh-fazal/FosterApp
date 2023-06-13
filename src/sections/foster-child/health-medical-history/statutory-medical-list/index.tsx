import ClaMedicalList from "./cla-medical/ClaMedicalList";
import DentalCheckList from "./dental-check/DentalCheckList";
import EhcpList from "./ehcp/EhcpList";
import OpticianCheckList from "./optician-check/OpticianCheckList";

//Accordian Data
export const statutoryMedicalListAccordionData = [
  {
    title: "EHCP",
    component: <EhcpList />,
  },
  {
    title: "CLA Medical",
    component: <ClaMedicalList />,
  },
  {
    title: "Dental Check",
    component: <DentalCheckList />,
  },
  {
    title: "Optician Check",
    component: <OpticianCheckList />,
  },
];

//Carer Type Mock Data
export const carerTypeData = [
  {
    value: "Option 1",
  },
  {
    value: "Option 2",
  },
  {
    value: "Option 3",
  },
  {
    value: "Option 4",
  },
];
//Carer Name Mock Data
export const carerNameData = [
  {
    value: "Option 1",
  },
  {
    value: "Option 2",
  },
  {
    value: "Option 3",
  },
  {
    value: "Option 4",
  },
];
