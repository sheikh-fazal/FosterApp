import { RHFRadioGroup, RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from 'yup'
export const initialValues = {};
export const formSchema = {}
export const childDetailForm = {
  details: [
    {
      title: 'Carer Name:',
      value: 'John Snow'
    },
    {
      title: 'Placing Authority:',
      value: 'Redbridge'
    },
    {
      title: "Child's LA Social Worker:",
      value: 'worker'
    },
    {
      title: 'Ethnicity:',
      value: 'Pakistani'
    },
    {
      title: 'LA SW Email Address:',
      value: 'abc@mail.com'
    },
    {
      title: 'Legal Status:',
      value: 'Pending'
    },
    {
      title: 'LA SW Contact Number:',
      value: '123456789'
    },
  ],
  fields: [
    {
      gridLength: 6,
      title: 'LA OOH Contact Number:',
      otherOptions: {
        name: 'contactNumber',
        fullWidth: true,
        type: 'number'
      },
      component: RHFTextField
    },
    {
      gridLength: 12,
      title: 'Please complete this Child Exploitation Matrix if you suspect or know a child or young person is at risk of Child Sexual Exploitation or Child Criminal Exploitation:',
    },
    {
      gridLength: 6,
      title: 'Has the Child Profile and Risk Assessment been updated with the below indicators:',
      otherOptions: {
        name: "hasChildProfile",
        options: ["Yes", "No"],
        sx: { ml: '0 !important' },
        fullWidth: true,
      },
      component: RHFRadioGroup
    },
    {
      gridLength: 6,
      title: 'Date',
      otherOptions: {
        name: "date",
        fullWidth: true,
      },
      component: RHFDatePicker
    },
    {
      gridLength: 6,
      title: 'Frequently coming home late or going missing through the day or overnight with no plausible explanation ',
      otherOptions: {
        name: 'frequentlyComing',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: 'Sudden Change in their appearance to look older or younger; i.e. wearing more makeup, waring revealing clothing. :',
      otherOptions: {
        name: 'suddenChange',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: 'Sexualised risk-taking behaviour including on the internet (taking/sharing indecent images, visiting adult networking sites) :',
      otherOptions: {
        name: 'sexualised',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: 'Unexplainable gifts of money / mobile phones / credit / clothing / jewellery etc). :',
      otherOptions: {
        name: 'unexplainable',
        fullWidth: true,
        select: true,
        sx: { mt: { md: 2.2, xs: 0 } },
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: 'Associating with unknown adults or other sexually / criminally exploited children / young people :',
      otherOptions: {
        name: 'associating',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: 'Reduced engagement/contact with foster carer/s/family/usual friends :',
      otherOptions: {
        name: 'reducedEngagement',
        fullWidth: true,
        select: true,
        sx: { mt: { md: 2.2, xs: 0 } },
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: 'Sexually transmitted infections',
      otherOptions: {
        name: 'infections',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: 'Experimenting with drugs/ alcohol. :',
      otherOptions: {
        name: 'drugAlcohol',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: 'increased interest in making money:',
      otherOptions: {
        name: 'makingMoney',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: 'Poor self-image, eating, disorders, self-harming :',
      otherOptions: {
        name: 'selfHarming',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: 'Expression around invincibility or not caring about what happens to them',
      otherOptions: {
        name: 'expressionAroundInvincibility',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: 'Increasingly disruptive, hostile or physically aggresive at home or school: Including use of sexualised language and language in relation to drug dealing and / or violence:',
      otherOptions: {
        name: 'increasinglyAggresive',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: 'Getting into unknown cars with unknown adults or known adults who pose a risk to children or young people :',
      otherOptions: {
        name: 'unknownPerson',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: 'Being groomed via the internet :',
      otherOptions: {
        name: 'groomed',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: 'Receiving reward for recruting ithers / peers to CSE / CCE :',
      otherOptions: {
        name: 'reward',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: 'Reports of involvement in CSE (areas which are known to be used for sexual exploitation) :',
      otherOptions: {
        name: 'involvement',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: 'Older boyfriend / girlfriend :',
      otherOptions: {
        name: 'older',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: 'Non-school attendance or excluded due to behaviour :',
      otherOptions: {
        name: 'attendance',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: 'Breakdown of foster placement due to behaviour :',
      otherOptions: {
        name: 'breakdown',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: 'Staying out overnight with no explanation as to why :',
      otherOptions: {
        name: 'overNight',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: "Repeated STI's and / or pregnancy :",
      otherOptions: {
        name: 'pregnancy',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: "Unaccounted mobile phone, drugs, alcohol :",
      otherOptions: {
        name: 'unaccounted',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: "Reports being taken to parties, people houses, unknown areas, hotels, nightclubs, takeaways or out of area by unknown adults :",
      otherOptions: {
        name: 'reports',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: "Chronic drug / alcohol misuse :",
      otherOptions: {
        name: 'chronic',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: "Frequent missing episodes and being found out of their normal area :",
      otherOptions: {
        name: 'frequentMissing',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: "Possession of hotel keys / cards or keys to unknown premises :",
      otherOptions: {
        name: 'possession',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: "Having multiple mobile phones, SIM cards or use of a phone that causes concern - multiple callers or more texts / pings than usual :",
      otherOptions: {
        name: 'havingMultiple',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: "Fear of reprisals from gang members or violence from young people or adults :",
      otherOptions: {
        name: 'reprisals',
        fullWidth: true,
        select: true,
        sx: { mt: { md: 2.2, xs: 0 } },
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
    {
      gridLength: 6,
      title: "Multiple miscarraiges or terminations :",
      otherOptions: {
        name: 'miscarraiges',
        fullWidth: true,
        select: true,
        options: [
          { value: 'select 1', label: 'select 1' },
          { value: 'select 2', label: 'select 2' },
          { value: 'select 3', label: 'select 3' },
        ],
      },
      component: RHFSelect
    },
  ]
}