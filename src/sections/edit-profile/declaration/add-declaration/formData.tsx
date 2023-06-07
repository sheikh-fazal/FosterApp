import * as Yup from "yup";

export const defaultValues = {
  agreeToAboveDec: true,
  rightToWork: "No",
  moreDetails: "Provides Details",
  areYouWilling: "No",
  agreeToAboveDec2: false,
  understandEntirly: true,
  confidentialAgre: true,
  penOpt: true,
};

export const FormSchema = Yup.object().shape({
  agreeToAboveDec: Yup.boolean(),
  rightToWork: Yup.string(),
  moreDetails: Yup.string(),
  areYouWilling: Yup.string(),
  agreeToAboveDec2: Yup.boolean(),
  understandEntirly: Yup.boolean(),
  confidentialAgre: Yup.boolean(),
  penOpt: Yup.boolean(),
});

// export const fieldsInfo = [
//   [
//     {
//       type: "TEXT",
//       name: "addressFirstLine",
//       label: "Address First Line",
//       fieldHeader: null,
//     },
//     {
//       type: "TEXT",
//       name: "addressSecondLine",
//       label: "Address Second Line",
//       fieldHeader: null,
//     },
//   ],
//   [
//     {
//       type: "TEXT",
//       name: "town",
//       label: "Town/City",
//       fieldHeader: null,
//     },
//     {
//       type: "TEXT",
//       name: "county",
//       label: "County",
//       fieldHeader: null,
//     },
//   ],
//   [
//     {
//       type: "TEXT",
//       name: "country",
//       label: "Country Name",
//       fieldHeader: null,
//     },
//     {
//       type: "TEXT",
//       name: "postcode",
//       label: "Post Code",
//       fieldHeader: null,
//     },
//   ],
// ];
