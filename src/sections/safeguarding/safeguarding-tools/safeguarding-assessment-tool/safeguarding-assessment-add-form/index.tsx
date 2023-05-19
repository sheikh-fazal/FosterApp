import {Typography } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";


  // ----------------------------------------------------------------------
// Styles
const styles = {
  optionsFullWidth: {
     marginBottom: "20px !important",marginLeft:"0px !important",width:"100%",justifyContent:"space-between" 
  },
  optionsHalfWidth: {
     marginBottom: "20px !important",marginLeft:"0px !important",width:"50%",justifyContent:"space-between" 
  },
  marginBottom: {
     marginBottom: "39px !important",
  },
};

export const SafeguardingAssessmentAddForm = [
    {
      id: 1,
      title:"Child’s  Surname:",
      componentProps: {
        name: "childSurname",
        sx: styles.marginBottom,
      },
      component: RHFTextField,
      md: 6,
    },
    {
      id: 2,
      title:"Child’s Forenames:",
      componentProps: {
        name: "childForename",
        sx: styles.marginBottom,
      },
      component: RHFTextField,
      md: 6,
    },
    {
      id: 3,
      title:"Gender Identity:",
      componentProps: {
        name: "genderIdentity",
        sx: styles.marginBottom,
      },
      component: RHFTextField,
      md: 6,
    },
    {
        id: 4,
        title:"Date of Birth:",
        componentProps: {
          name: "dateOfBirth",
          fullWidth: true,
          sx: styles.marginBottom,
        },
        component: RHFDatePicker,
        md: 6,
      },

  
    {

         id: 5,
         title:"Who has parental responsibility for the child?",
        componentProps: {
         name: "parentalResponsibility",
         options: ["Parent", "Special Guardian", "Children’s Social Care", "Joint Parent & Social Care"],
         sx:  styles.optionsFullWidth ,
        },
        
         gridLength: 12,
         component: RHFRadioGroupWithLabel,
        
    },


    {
      id: 6,
      title:"Name and Contact Details:",
      componentProps: {
        name: "description",
        multiline: true,
        minRows: 3,
        sx: styles.marginBottom,
      },
      component: RHFTextField,
      md: 12,
    },


      {

        id: 7,
        title:"Are there any siblings or other children at the address?",
       componentProps: {
        name: "address",
        options: ["Yes", "No", ],
        sx:  styles.optionsHalfWidth ,
       },
       
        gridLength: 12,
        component: RHFRadioGroupWithLabel,
       
   },

   {
    id: 8,
    title:"Details:",
    componentProps: {
      name: "details",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },

  {

    id: 9,
    title:"Main Language(s) Spoken by the child:",
   componentProps: {
    name: "languageSpoken",
    options: ["English", "Other ", ],
    sx:  styles.optionsHalfWidth ,
   },
   
    md: 6,
    component: RHFRadioGroupWithLabel,
   
  },
  {
    id: 10,
    title:"Please Specify:",
    componentProps: {
      name: "pleaseSpecify",
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 6,
  },
  {

    id: 11,
    title:"Does the child require an interpreter:",
   componentProps: {
    name: "childInterpreter",
    options: ["Yes", "No", ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 6,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 12,
    title:"Does the child have a disability or communication impairment:",
   componentProps: {
    name: "communicationImpairment",
    options: ["Yes", "No", ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 6,
    component: RHFRadioGroupWithLabel,
   
  },

  {
    id: 13,
    title:"Details:",
    componentProps: {
      name: "impairmentDetail",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 14,
    title:"Preferred method of communication (e.g. signing, hearing loop, Makaton etc.):",
    componentProps: {
      name: "preferredCommunication",
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 6,
  },
  {

    id: 14,
    title:"What level is the child currently open to:",
   componentProps: {
    name: "childCurrentlyLevel",
    options: ["No Plan", "CAF/TAF/Early Help Plan","Child in Care of another Local Authority","Cared For","Undergoing Social Care Assessment","Child in Need Plan ","Child Protection Plan", ],
    sx: { mb: "20px !important",ml:"0px !important",width:"70%",justifyContent:"space-between" },
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {
    id: 15,
    title:"Details of potential risks to other children or vulnerable adults; links with other children, associates, perpetrators and locations the child frequents- please provide as much detail as is known ().  Please provide names (including nick names), descriptions of possible adult / peer perpetrators and any friendship groups",
    componentProps: {
      name: "detailPotentialRisks",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },
  {

    id: 16,
    title:"Was the child involved in completing the Assessment Tool?",
   componentProps: {
    name: "childCompletingAssessment",
    options: ["Yes", "No", ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {
    id: 17,
    title:"If No,Why Not:",
    componentProps: {
      name: "completingAssessmentToolReason",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 18,
    title:"What are the child’s views now?",
    componentProps: {
      name: "childViewsNow",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },
  {

    id: 19,
    title:"Was the child’s parent/carer involved in completing the Assessment Tool?",
   componentProps: {
    name: "parentInvolvedCompletingAssessment",
    options: ["Yes", "No", ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {
    id: 20,
    title:"If No,Why Not:",
    componentProps: {
      name: "parentInvolvedReason",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },
  {

    id: 21,
    title:"What are the child’s views now?",
   componentProps: {
    name: "parentInvolvedViews",
    options: ["Yes", "No", ],
    sx: { mb: "20px !important",ml:"0px !important" },
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {
    id: 22,
    heading: "ASSESSMENT CHECKLIST/ HIGHLIGHT AND COMMENT (Please note this list isn’t exhaustive):",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {
    id: 23,
    heading: "Abuse / Neglect ",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 24,
    title:"History of abuse or neglect",
   componentProps: {
    name: "historyAbuse",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 25,
    title:"Current experience of abuse or neglect",
   componentProps: {
    name: "currentExperienceAbuse",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {
    id: 26,
    title:"Analysis of Risk and Action already taken:",
    componentProps: {
      name: "analysisAction",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 27,
    heading: "Abduction ",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 28,
    title:"Thought to have been abducted",
   componentProps: {
    name: "abducted",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 29,
    title:"Child states they have been abducted  ",
   componentProps: {
    name: "childAbducted",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {
    id: 30,
    title:"Analysis of Risk and Action already taken:",
    componentProps: {
      name: "abductedAnalysisAction",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },



  {
    id: 31,
    heading: "Alcohol/ Drug ",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 32,
    title:"Experimenting with alcohol, drugs or other substances including novel psychoactive substances ",
   componentProps: {
    name: "experimentingAlcohol",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 33,
    title:"Regular use of alcohol or drugs – cannabis; novel psychoactive substances",
   componentProps: {
    name: "regularUseAlcohol",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 34,
    title:"Concern that the child is selling and/or providing drugs to others",
   componentProps: {
    name: "concernChildDrugs",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 35,
    title:"Long term / prolific alcohol  or drug use / dependence on alcohol or drugs",
   componentProps: {
    name: "longTermUseDrugs",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {
    id: 36,
    title:"Analysis of Risk and Action already taken:",
    componentProps: {
      name: "drugsRiskActionTaken",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },



  {
    id: 37,
    heading: "Associations ",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 38,
    title:"Associating with unknown peers/ associating with older peers ",
   componentProps: {
    name: "associatingOlderPeers",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 39,
    title:"Associating with unknown adults",
   componentProps: {
    name: "associatingUnknownAdults",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 40,
    title:"Associating with an adult or peer thought to pose risk to children",
   componentProps: {
    name: "associatingAdult",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 41,
    title:"Associating with other children thought at risk of being exploited",
   componentProps: {
    name: "associatingOtherChildren",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 42,
    title:"New contacts with people not local to the area",
   componentProps: {
    name: "newContacts",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 43,
    title:"Reports that child has been seen in or thought to have visited “hot spot” locations",
   componentProps: {
    name: "childVisited",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 44,
    title:"Travelling unaccompanied to meet an adult known to pose risk or an unknown adult ",
   componentProps: {
    name: "travellingUnaccompanied",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 45,
    title:"Entering vehicles or travelling with an adult known to pose risk/ an unknown adult ",
   componentProps: {
    name: "travellingAdult",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 46,
    title:"Associating with peers/adults known for drug intelligence and/or criminality",
   componentProps: {
    name: "associatingAdultCriminality",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 47,
    title:"Possessing keys to unknown properties",
   componentProps: {
    name: "possessingKeys",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {
    id: 48,
    title:"Analysis of Risk and Action already taken:",
    componentProps: {
      name: "associatingRiskActionTaken",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },



  {
    id: 49,
    heading: "Behaviour/Presentation  ",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 50,
    title:"Displaying a change in behaviour/ presentation/ mood/ attitude/ appearance",
   componentProps: {
    name: "displayingChangeBehaviour",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 51,
    title:"Volatile/ abusive behaviour / aggression to family member, carer or animal ",
   componentProps: {
    name: "volatileBehaviourToFamily",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 52,
    title:"Volatile/abusive behaviour/ aggression to member of community/ peer group",
   componentProps: {
    name: "volatileBehaviourToCommunity",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {
    id: 53,
    title:"Analysis of Risk and Action already taken:",
    componentProps: {
      name: "volatileBehaviourRiskActionTaken",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },

  {
    id: 54,
    heading: "Bereavement ",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 55,
    title:"Has the child/young person experienced a bereavement or loss impacting upon their behaviour or mental health",
   componentProps: {
    name: "personExperiencedBereavement",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {
    id: 56,
    title:"Analysis of Risk and Action already taken:",
    componentProps: {
      name: "bereavementRiskActionTaken",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },


  {
    id: 57,
    heading: "Bullying  ",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 58,
    title:"Being bullied",
   componentProps: {
    name: "BullyingBullied",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 59,
    title:"Bullying others",
   componentProps: {
    name: "BullyingOthers",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {
    id: 60,
    title:"Analysis of Risk and Action already taken:",
    componentProps: {
      name: "BullyingRiskActionTaken",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },



  // ////////////////////////////////////////////////////////////////////////


  {
    id: 61,
    heading: "Coercion/Control  ",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 62,
    title:"Reduced contact with family or friends ",
   componentProps: {
    name: "reducedContact",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 63,
    title:"Detachment/ isolation ",
   componentProps: {
    name: "isolation",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 64,
    title:"Threats made to child, family or  home /  child experiencing or  threatened with violence or intimidating behaviour",
   componentProps: {
    name: "childThreatenedBehaviour",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 65,
    title:"Child has engaged in sexual activity as a result of feeling threatened, coerced or intimidated ",
   componentProps: {
    name: "childEngagedSexualActivity",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 66,
    title:"Child has engaged in criminal activity or anti-social behaviour as a result of feeling threatened, coerced or intimidated",
   componentProps: {
    name: "childEngagedCriminalActivity",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 67,
    title:"Child experiencing sexual violence or bullying",
   componentProps: {
    name: "childExperiencingViolence",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 68,
    title:"Receiving payment or reward for recruiting others into exploitative or abusive situations  ",
   componentProps: {
    name: "receivingAwardAbusiveSituation",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 69,
    title:"Apparent use of mobile device or social media by another to control/ monitor ",
   componentProps: {
    name: "apparentUseSocialMedia",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {
    id: 70,
    title:"Analysis of Risk and Action already taken:",
    componentProps: {
      name: "coercionRiskActionTaken",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 71,
    heading: "Disability",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 72,
    title:"Has a disability/ learning disability or difficulty which impacts upon capacity to consent, decision making or perception of risk taking behaviour  ",
    componentProps: {
    name: "disabilityLearning",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {
    id: 73,
    title:"Analysis of Risk and Action already taken:",
    componentProps: {
      name: "disabilityRiskActionTaken",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },




  // ////////////////////////////////////////////////////////////////


  {
    id: 74,
    heading: "Education/Training",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 75,
    title:"Multiple change of education provider  ",
   componentProps: {
    name: "multipleChangeEduaction",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 76,
    title:"Educated at home ",
   componentProps: {
    name: "eduactionAtHome",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 77,
    title:"Temporary exclusion",
   componentProps: {
    name: "temporaryEducation",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 78,
    title:"Infrequent  or poor attendance  ",
   componentProps: {
    name: "infrequentAttendance",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 79,
    title:"Reduced timetable/ disengagement from school/lessons",
   componentProps: {
    name: "reducedTimetableSchool",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 80,
    title:"Permanent exclusion",
   componentProps: {
    name: "permanentExclusion",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  
  {
    id: 81,
    title:"Analysis of Risk and Action already taken:",
    componentProps: {
      name: "eduactionRiskActionTaken",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },




  // //////////////////////////////////////////
  {
    id: 82,
    heading: "Engagement in adult activity ",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 83,
    title:"Accessing pornography",
   componentProps: {
    name: "accessingPornography",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 84,
    title:"Introduction to adult activities (Isolated incident of attending an inappropriate or unsupervised party or other 18+ venue such as a nightclub)",
   componentProps: {
    name: "introductionAdultActivites",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 85,
    title:"Exposure to pornography by another person ",
   componentProps: {
    name: "exposurePonographyByAnotherPerson",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 86,
    title:"Multiple incidents of attending an inappropriate or unsupervised party or other 18+ venue such as a nightclub  ",
   componentProps: {
    name: "multipleIncidents",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  
  {
    id: 87,
    title:"Analysis of Risk and Action already taken:",
    componentProps: {
      name: "pornographyRiskActionTaken",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },


  // ///////////////////////////////////////
  {
    id: 88,
    heading: "Exchanging sexual or criminal activity for goods, money  ",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 89,
    title:"“Clipping” – promising sexual activity for money, goods etc. and then running off",
   componentProps: {
    name: "promisingSexualActivity",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 90,
    title:"Receiving gifts/new clothing or shoes which raises concern or suspicion",
   componentProps: {
    name: "receivingGifts",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 91,
    title:"Unaccounted for money/ mobile phone top ups/ bank deposits ",
   componentProps: {
    name: "unaccountedMoney",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  
  {
    id: 92,
    title:"Analysis of Risk and Action already taken:",
    componentProps: {
      name: "exchangingSexualRiskActionTaken",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },





  {
    id: 93,
    heading: "Family",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 94,
    title:"Relationship breakdown",
   componentProps: {
    name: "relationshipBreakdown",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 95,
    title:"Parent, carer or sibling  health problem / disability",
   componentProps: {
    name: "healthProblem",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 96,
    title:"Poor communication",
   componentProps: {
    name: "poorCommunication",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 97,
    title:"Reduced contact with family or friends",
   componentProps: {
    name: "reducedContactWithFamily",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 98,
    title:"Low warmth, high criticism household",
   componentProps: {
    name: "lowWarmth",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 99,
    title:"Parent(s) or carers not coping with behaviour/ parental limitations",
   componentProps: {
    name: "parentsNotCopingBehaviour",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 100,
    title:"Neglect – including associated domestic abuse / alcohol or drug use / mental health problems (If neglect is being identified, please ensure you are following Local Authority Procedures for Neglect)",
   componentProps: {
    name: "neglect",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 101,
    title:"Lack of boundaries related to CE issues",
   componentProps: {
    name: "lackOfBoundries",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 102,
    title:"Parent/ carer colluding with inappropriate behaviours/ relationships",
   componentProps: {
    name: "parentColluding",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 103,
    title:"Family/ carer unable to keep child safe despite efforts-  “beyond parental control",
   componentProps: {
    name: "safeDespiteEfforts",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  
  {
    id: 104,
    title:"Analysis of Risk and Action already taken:",
    componentProps: {
      name: "FamilyRiskActionTaken",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },


  {
    id: 105,
    heading: "Gang Association or Involvement / Criminal Behaviour",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 106,
    title:"Gang association",
   componentProps: {
    name: "gangAssociation",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 107,
    title:"Evidence of gang involvement associated with CE activity/ initiation",
   componentProps: {
    name: "evidenceGangInvolvement",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 108,
    title:"Tattoos/Scars/Marks believed to be linked to Gang Association",
   componentProps: {
    name: "tattoosLinkedGang",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 109,
    title:"Involvement in criminal offences/activity",
   componentProps: {
    name: "involvementInCriminal",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 110,
    title:"Current involvement with criminal justice system/ youth justice services",
   componentProps: {
    name: "currentInvolvement",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 111,
    title:"Repeat offending / Escalating anti-social or criminal behaviour",
   componentProps: {
    name: "repeatOffending",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 112,
    title:"Possession or access to weapons",
   componentProps: {
    name: "possessionToWeapons",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 113,
    title:"Taking part in sexual activity/ offending behaviour as part of the gang association/ coercion.",
   componentProps: {
    name: "offendingPartOfGang",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 114,
    title:"Evidence of gang involvement associated with CSE activity/ initiation",
   componentProps: {
    name: "evidenceOfGang",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  
  {
    id: 115,
    title:"Analysis of Risk and Action already taken:",
    componentProps: {
      name: "gangAssociationRiskActionTaken",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },

  // ////////////////////////////////
  {
    id: 116,
    heading: "Home Life",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 117,
    title:"History of being in care",
   componentProps: {
    name: "historyBeingInCare",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 118,
    title:"Currently in Care",
   componentProps: {
    name: "currentlyInCare",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 119,
    title:"Unknown adult visitors to home",
   componentProps: {
    name: "unknownAdult",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 120,
    title:"Alone at home for significant periods of time without parental supervision",
   componentProps: {
    name: "aloneHomeAtSignificantPeriods",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 121,
    title:"Presenting as homeless",
   componentProps: {
    name: "presentingAsHomeless",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 122,
    title:"Numerous house moves (Transient)",
   componentProps: {
    name: "numerousHouseMoves",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 123,
    title:"No stable home/ multiple placement breakdowns/ living with friends/ private fostering arrangement/ wants to move into care/ “sofa surfing”",
   componentProps: {
    name: "noStableHome",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 124,
    title:"Adult/peers visiting home address who pose a potential risk to child",
   componentProps: {
    name: "offendingPartOfGang",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  
  {
    id: 125,
    title:"Analysis of Risk and Action already taken:",
    componentProps: {
      name: "homeLifeRiskActionTaken",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },


  // ////////////////////////////////////
  {
    id: 126,
    heading: "Mental health and Wellbeing",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 127,
    title:"Low self-esteem, poor self-image, anxiety or social isolation",
   componentProps: {
    name: "lowSelfEsteem",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 128,
    title:"Diagnosed depression or other mental health condition",
   componentProps: {
    name: "diagnosedDepression",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 129,
    title:"Significantly high confidence/self-esteem",
   componentProps: {
    name: "significantlyHighConfidence",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 130,
    title:"Historic / current self-harm (no medical or psychiatric intervention)",
   componentProps: {
    name: "significantlyCurrentSelfharm",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 131,
    title:"Significant self-harm (medical/psychiatric intervention)",
   componentProps: {
    name: "SignificantSelfHarm",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 132,
    title:"Eating disorder",
   componentProps: {
    name: "eatingDisorder",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 133,
    title:"Suicidal thoughts,  ideation or attempts",
   componentProps: {
    name: "suicidalThoughts",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  
  {
    id: 134,
    title:"Analysis of Risk and Action already taken:",
    componentProps: {
      name: "mentalHealthRiskActionTaken",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },

  // /////////////////////////////////////
  {
    id: 135,
    heading: "Missing From Home/Care/Education",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 136,
    title:"Low self-esteem, poor self-image, anxiety or social isolation",
   componentProps: {
    name: "missingLowSelfEsteem",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 137,
    title:"Diagnosed depression or other mental health condition",
   componentProps: {
    name: "missingDiagnosedDepression",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 138,
    title:"Significantly high confidence/self-esteem",
   componentProps: {
    name: "missingSignificantlyHighConfidence",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 139,
    title:"Historic / current self-harm (no medical or psychiatric intervention)",
   componentProps: {
    name: "missingSignificantlyCurrentSelfharm",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 140,
    title:"Significant self-harm (medical/psychiatric intervention)",
   componentProps: {
    name: "missingSignificantSelfHarm",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 141,
    title:"Eating disorder",
   componentProps: {
    name: "missingEatingDisorder",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 142,
    title:"Suicidal thoughts,  ideation or attempts",
   componentProps: {
    name: "missingSuicidalThoughts",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  
  {
    id: 143,
    title:"Analysis of Risk and Action already taken:",
    componentProps: {
      name: "missingMentalHealthRiskActionTaken",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },

  // /////////////////////////////////////////////////
  {
    id: 144,
    heading: "Physical/Sexual Assault ",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 145,
    title:"Within family",
   componentProps: {
    name: "sexualAssaultWithinFamily",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 146,
    title:"Previous allegation of physical/ sexual assault / injury withdrawn",
   componentProps: {
    name: "allegationSexualAssault",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 147,
    title:"Within “relationship”",
   componentProps: {
    name: "withinRelationship",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 148,
    title:"Outside of “relationship” or unknown perpetrator",
   componentProps: {
    name: "outsideRelationship",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 149,
    title:"Marks / tattoos / tags related to sexual assault",
   componentProps: {
    name: "marksRelatedToSexualAssault",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  
  {
    id: 150,
    title:"Analysis of Risk and Action already taken:",
    componentProps: {
      name: "sexualAssaulthRiskActionTaken",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },


  // /////////////////////////////////
  {
    id: 151,
    heading: "Pregnancy",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 152,
    title:"Pregnant/Young Parent",
   componentProps: {
    name: "pregnancyYoungParent",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 153,
    title:"Concealed pregnancy",
   componentProps: {
    name: "concealedPregnancy",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 154,
    title:"Previous pregnancy/termination",
   componentProps: {
    name: "previousPregnancyTermination",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 155,
    title:"Unwilling to share information about father",
   componentProps: {
    name: "unwillingShareInfor",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 156,
    title:"Multiple pregnancies/ terminations/ miscarriages",
   componentProps: {
    name: "multiplrPregnanciesTerminations",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  
  {
    id: 157,
    title:"Analysis of Risk and Action already taken:",
    componentProps: {
      name: "pregnancyRiskActionTaken",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },



  // /////////////////////////////////
  {
    id: 158,
    heading: "Relationships",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 159,
    title:"Unable to discuss or disclose sexuality or gender identity to family/friends",
   componentProps: {
    name: "unableToDiscussSexuality",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 160,
    title:"Concerns regarding Domestic Abuse within “relationship”(If over 16 consideration should be made for a RIC/DASH Assessment)",
   componentProps: {
    name: "concernsDomesticAbuse",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 161,
    title:"Older “boyfriend” or “girlfriend”",
   componentProps: {
    name: "olderRelationships",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  
  {
    id: 162,
    title:"Analysis of Risk and Action already taken:",
    componentProps: {
      name: "relationshipsRiskActionTaken",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },










  
  // /////////////////////////////////
  {
    id: 163,
    heading: "Sexual Activity and Behaviours ",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 164,
    title:"Sexual activity between under 16’s",
   componentProps: {
    name: "sexualActivityBetweenUnder16",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 165,
    title:"Inappropriate or harmful  sexual behaviour – comments, exposure, inappropriate touching",
   componentProps: {
    name: "harmfulBehaviour",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 166,
    title:"High number of disclosed/ suspected sexual partners or high rates of sexual activity",
   componentProps: {
    name: "highRateOfSexualActivity",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 167,
    title:"Child under 13 engaging in sexual activity (Safeguarding referral MUST be completed where this indicator is selected as per legal guidance)",
   componentProps: {
    name: "childUnder13EngagingSexualActivity",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  
  {

    id: 168,
    title:"Adult has engaged in sexual activity with the child",
   componentProps: {
    name: "adultEngagedSexualActivity",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  
  {
    id: 169,
    title:"Analysis of Risk and Action already taken:",
    componentProps: {
      name: "sexualActivityRiskActionTaken",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },

  // /////////////////////////
  {
    id: 170,
    heading: "Sexual Health ",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 171,
    title:"Unprotected sexual activity",
   componentProps: {
    name: "unprotectedSexualActvity",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 172,
    title:"Sexually Transmitted Infection (STI)",
   componentProps: {
    name: "sexuallyTransmittedInfection",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 173,
    title:"Frequent attendance at Sexual Health Clinics",
   componentProps: {
    name: "attendanceAtSexualHealth",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 174,
    title:"Repeat access to Emergency Contraception",
   componentProps: {
    name: "accessToEmergency",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  
  {

    id: 175,
    title:"Untreated/ Frequent/ Recurrent STIs",
   componentProps: {
    name: "sexualHealthUntreated",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  
  {
    id: 176,
    title:"Analysis of Risk and Action already taken:",
    componentProps: {
      name: "sexualHealthRiskActionTaken",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },


  // ///////////// social media/technology/phone //////////////////////////////////
  {
    id: 177,
    heading: "Social Media/ Technology /Phone",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 178,
    title:"Multiple phones/ Changing phones regularly",
   componentProps: {
    name: "multiplePhones",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 179,
    title:"Increased time spent accessing the internet,  social media or live streaming or",
   componentProps: {
    name: "onlineActivityHabits.",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 180,
    title:"gaming platforms",
   componentProps: {
    name: "gamingPlatforms",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 181,
    title:"Seeming to be more involved with social media world than with family and friends",
   componentProps: {
    name: "socialMediaPrioritization",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  
  {

    id: 182,
    title:"Secrecy/ anxiety in relation to phone/device use",
   componentProps: {
    name: "devicePrivacy",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 183,
    title:"Unsafe use of internet – low/ no security, posting personal details, etc. including befriending unknown individuals online",
   componentProps: {
    name: "internetSafetySecurityRisks",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 184,
    title:"Photographing/ filming self and sharing (Indecent images)",
   componentProps: {
    name: "inappropriateSharing",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 185,
    title:"Being photographed/filmed by someone else (indecent images)",
   componentProps: {
    name: "nonConsensualSharing",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 186,
    title:"High number of contacts on social media including unknown adults / peers",
   componentProps: {
    name: "onlineSocialNetworkSize",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 187,
    title:"Accessing inappropriate networking forums – dating websites, specialist forums for anorexia, self-harm, sexual fetish etc.",
   componentProps: {
    name: "inappropriateOnlineForumParticipation",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 188,
    title:"Child under 16 receiving sexual communication from an adult (Online and offline communication, including social media, e-mail, texts, letters)",
   componentProps: {
    name: "sexualCommunicationFromAdultsToMinors",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 189,
    title:"Using uncommon communication apps or platforms suggested to them by an unknown adult/peer",
   componentProps: {
    name: "UncommonCommunicationWithUnknowns",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {

    id: 190,
    title:"Meeting contacts from dating websites or forums in person",
   componentProps: {
    name: "OnlineToOfflineMeetingWithStrangers",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  
  {
    id: 191,
    title:"Analysis of Risk and Action already taken:",
    componentProps: {
      name: "socialMediaRiskActionTaken",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 192,
    heading: "Trafficking",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 193,
    title:"Thought to have been moved for the purpose of exploitation (Incl. multiple perpetrators, consenting or not, domestic/ national/ international)If this is a factor a referral needs to be made for into the National Referral Mechanism as per national guidance",
   componentProps: {
    name: "potentialVictimOfHumanTrafficking",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  {
    id: 194,
    title:"Analysis of Risk and Action already taken:",
    componentProps: {
      name: "traffickingRiskActionTaken",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 195,
    heading: "Risk Management Categories ",
    subComponent:[
      {
        id:195.1,
        subComponentTitle:"Presenting some vulnerability factors in the checklist but appear to relate to 'normal teenage' behaviour.  No statutory intervention required but may benefit from low level monitoring, awareness raising. There are no indicators of exploitation.",
        subComponentStatus:"Low Risk"
      },
      {
        id:195.2,
        subComponentTitle:" Presenting numerous vulnerability factors but not at immediate risk.  Some protective factors  present.  Would benefit from professional intervention, assessment, awareness and prevention work.",
        subComponentStatus:"Medium Risk"
      },
      {
        id:195.3,
        subComponentTitle:" Child is presenting high number of vulnerability factors, is known to have been exploited and/or groomed. Regularly goes missing and concerns in relation to drugs/alcohol and inappropriate adult associates. Child has disclosed exploitation. Requires statutory intervention to protect. A strategy meeting should take place",
        subComponentStatus:"High Risk"
      },
      {
        id:195.4,
        subComponentTitle:"When completing the Assessment Tool you must use your own judgement on factors such as the child’s age, any  additional vulnerabilities, their history, etc. It may mean that what for another child would be low level, for that child is high level. Workers should feel free to amend the suggested level using that judgement.",
        
      }
    ],
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {

    id: 196,
    title:"What is the level of risk for this child?",
   componentProps: {
    name: "childRiskAssessment",
    options: ["Yes", "No", "Possible" ],
    sx:  styles.optionsHalfWidth ,
   },
   
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
   
  },
  


  // /////// summary /////////////////////////////
  {
    id: 197,
    heading: "In summary:",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: "20px" },
    },
    component: Typography,
  },
  {
    id: 198,
    title:"What is Working Well (Strengths) and Protective Factors:",
    componentProps: {
      name: "childStrengths",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 199,
    title:"What are we worried about (also include vulnerabilities- aspects of a child’s historical or current circumstances which may make them more susceptible to being targeted and groomed for sexual exploitation):",
    componentProps: {
      name: "childVulnerabilitiesConcerns",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 200,
    title:"Where risks are identified, what actions have been undertaken to safeguard the child from those risks?",
    componentProps: {
      name: "childSafeguardingMeasures",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 201,
    title:"What interventions are you looking for?",
    componentProps: {
      name: "InterventionPreferences",
      multiline: true,
      minRows: 3,
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 202,
    title:"Name and job title of person completing:",
    componentProps: {
      name: "jobTitle",
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 203,
    title:"Organisation:",
    componentProps: {
      name: "organiation",
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 204,
    title:"E-mail:",
    componentProps: {
      name: "email",
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 205,
    title:"Telephone:",
    componentProps: {
      name: "telephone",
      sx: styles.marginBottom,
    },
    component: RHFTextField,
    md: 6,
  },


  ];
  
  export const defaultValues = {
    childSurname: "",
    childForename: "",
    genderIdentity: "",
    dateOfBirth: new Date(),
    parentalResponsibility: "",
    description: "",
    address: "",
    details: "",
    languageSpoken: "",
    pleaseSpecify: "",
    childInterpreter: "",
    communicationImpairment: "",
    impairmentDetail: "",
    preferredCommunication: "",
    childCurrentlyLevel: "",
    detailPotentialRisks: "",
    childCompletingAssessment: "",
    completingAssessmentToolReason: "",
    childViewsNow: "",
    parentInvolvedCompletingAssessment: "",
    parentInvolvedReason: "",
    parentInvolvedViews: "",
    historyAbuse: "",
    currentExperienceAbuse: "",
    analysisAction: "",
    abducted: "",
    childAbducted: "",
    abductedAnalysisAction: "",
    experimentingAlcohol: "",
    regularUseAlcohol: "",
    concernChildDrugs: "",
    longTermUseDrugs: "",
    drugsRiskActionTaken: "",
    associatingOlderPeers: "",
    associatingUnknownAdults: "",
    associatingAdult: "",
    associatingOtherChildren: "",
    newContacts: "",
    childVisited: "",
    travellingUnaccompanied: "",
    travellingAdult: "",
    associatingAdultCriminality: "",
    possessingKeys: "",
    associatingRiskActionTaken: "",
    displayingChangeBehaviour: "",
    volatileBehaviourToFamily: "",
    volatileBehaviourToCommunity: "",
    volatileBehaviourRiskActionTaken: "",
    personExperiencedBereavement: "",
    bereavementRiskActionTaken: "",
    BullyingBullied: "",
    BullyingOthers: "",
    BullyingRiskActionTaken: "",
    reducedContact: "",
    isolation: "",
    childThreatenedBehaviour: "",
    childEngagedSexualActivity: "",
    childEngagedCriminalActivity: "",
    childExperiencingViolence: "",
    receivingAwardAbusiveSituation: "",
    apparentUseSocialMedia: "",
    coercionRiskActionTaken: "",
    disabilityLearning: "",
    disabilityRiskActionTaken: "",
    multipleChangeEduaction: "",
    eduactionAtHome: "",
    temporaryEducation: "",
    infrequentAttendance: "",
    reducedTimetableSchool: "",
    permanentExclusion: "",
    eduactionRiskActionTaken: "",
    accessingPornography: "",
    introductionAdultActivites: "",
    exposurePonographyByAnotherPerson: "",
    multipleIncidents: "",
    pornographyRiskActionTaken: "",
    promisingSexualActivity: "",
    receivingGifts: "",
    unaccountedMoney: "",
    exchangingSexualRiskActionTaken: "",
    relationshipBreakdown: "",
    healthProblem: "",
    poorCommunication: "",
    reducedContactWithFamily: "",
    lowWarmth: "",
    parentsNotCopingBehaviour: "",
    neglect: "",
    lackOfBoundries: "",
    parentColluding: "",
    safeDespiteEfforts: "",
    FamilyRiskActionTaken: "",
    gangAssociation: "",
    evidenceGangInvolvement: "",
    tattoosLinkedGang: "",
    involvementInCriminal: "",
    currentInvolvement: "",
    repeatOffending: "",
    possessionToWeapons: "",
    offendingPartOfGang: "",
    evidenceOfGang: "",
    gangAssociationRiskActionTaken: "",
    historyBeingInCare: "",
    currentlyInCare: "",
    unknownAdult: "",
    aloneHomeAtSignificantPeriods: "",
    presentingAsHomeless: "",
    numerousHouseMoves: "",
    noStableHome: "",
    offendingPartOfGangs: "",
    homeLifeRiskActionTaken: "",
    lowSelfEsteem: "",
    diagnosedDepression: "",
    significantlyHighConfidence: "",
    significantlyCurrentSelfharm: "",
    SignificantSelfHarm: "",
    eatingDisorder: "",
    suicidalThoughts: "",
    mentalHealthRiskActionTaken: "",
    missinglowSelfEsteem: "",
    missingdiagnosedDepression: "",
    missingsignificantlyHighConfidence: "",
    missingsignificantlyCurrentSelfharm: "",
    missingSignificantSelfHarm: "",
    missingeatingDisorder: "",
    missingsuicidalThoughts: "",
    missingmentalHealthRiskActionTaken: "",
    sexualAssaultWithinFamily: "",
    allegationSexualAssault: "",
    withinRelationship: "",
    outsideRelationship: "",
    marksRelatedToSexualAssault: "",
    sexualAssaulthRiskActionTaken: "",
    pregnancyYoungParent: "",
    concealedPregnancy: "",
    previousPregnancyTermination: "",
    unwillingShareInfor: "",
    multiplrPregnanciesTerminations: "",
    pregnancyRiskActionTaken: "",
    unableToDiscussSexuality: "",
    concernsDomesticAbuse: "",
    olderRelationships: "",
    relationshipsRiskActionTaken: "",
    sexualActivityBetweenUnder16: "",
    harmfulBehaviour: "",
    highRateOfSexualActivity: "",
    childUnder13EngagingSexualActivity: "",
    adultEngagedSexualActivity: "",
    sexualActivityRiskActionTaken: "",
    unprotectedSexualActvity: "",
    sexuallyTransmittedInfection: "",
    attendanceAtSexualHealth: "",
    accessToEmergency: "",
    sexualHealthUntreated: "",
    sexualHealthRiskActionTaken: "",
    multiplePhones: "",
    onlineActivityHabits: "",
    gamingPlatforms: "",
    socialMediaPrioritization: "",
    devicePrivacy: "",
    internetSafetySecurityRisks: "",
    inappropriateSharing: "",
    nonConsensualSharing: "",
    onlineSocialNetworkSize: "",
    inappropriateOnlineForumParticipation: "",
    sexualCommunicationFromAdultsToMinors: "",
    UncommonCommunicationWithUnknowns: "",
    OnlineToOfflineMeetingWithStrangers: "",
    socialMediaRiskActionTaken: "",
    potentialVictimOfHumanTrafficking: "",
    traffickingRiskActionTaken: "",
    childRiskAssessment: "",
    childStrengths: "",
    childVulnerabilitiesConcerns: "",
    childSafeguardingMeasures: "",
    InterventionPreferences: "",
    jobTitle: "",
    organiation: "",
    email: "",
    telephone: "",
  };
  
  export const AssessmentFormValidationSchema = Yup.object().shape({
    // nameOfOwner: Yup.string().trim().required("Name of Owner is Required"),
    // childForename: Yup.string().trim().required("Name of Animal is Required"),
    // genderIdentity: Yup.string().trim().required("Type of Animal is Required"),
    // dateOfBirth: Yup.string().trim(),
    // parentalResponsibility: Yup.string().trim(),
    // description: Yup.string().trim(),
    // address: Yup.string().trim(),
    // details: Yup.string().trim(),
    // languageSpoken: Yup.string().trim(),
    // pleaseSpecify: Yup.string().trim(),
    // childInterpreter: Yup.string().trim(),
    // communicationImpairment: Yup.string().trim(),
    // impairmentDetail: Yup.string().trim(),
    // preferredCommunication: Yup.string().trim(),
    // childCurrentlyLevel: Yup.string().trim(),
    // detailPotentialRisks: Yup.string().trim(),
    // childCompletingAssessment: Yup.string().trim(),
    // completingAssessmentToolReason: Yup.string().trim(),
    // childViewsNow: Yup.string().trim(),
    // parentInvolvedCompletingAssessment: Yup.string().trim(),
    // parentInvolvedReason: Yup.string().trim(),
    // parentInvolvedViews: Yup.string().trim(),
    // historyAbuse: Yup.string().trim(),
    // currentExperienceAbuse: Yup.string().trim(),
    // analysisAction: Yup.string().trim(),
    // abducted: Yup.string().trim(),
    // childAbducted: Yup.string().trim(),
    // abductedAnalysisAction: Yup.string().trim(),
    // experimentingAlcohol: Yup.string().trim(),
    // regularUseAlcohol: Yup.string().trim(),
    // concernChildDrugs: Yup.string().trim(),
    // longTermUseDrugs: Yup.string().trim(),
    // drugsRiskActionTaken: Yup.string().trim(),
    // associatingOlderPeers: Yup.string().trim(),
    // associatingUnknownAdults: Yup.string().trim(),
    // associatingAdult: Yup.string().trim(),
    // associatingOtherChildren: Yup.string().trim(),
    // newContacts: Yup.string().trim(),
    // childVisited: Yup.string().trim(),
    // travellingUnaccompanied: Yup.string().trim(),
    // travellingAdult: Yup.string().trim(),
    // associatingAdultCriminality: Yup.string().trim(),
    // possessingKeys: Yup.string().trim(),
    // associatingRiskActionTaken: Yup.string().trim(),
    // displayingChangeBehaviour: Yup.string().trim(),
    // volatileBehaviourToFamily: Yup.string().trim(),
    // volatileBehaviourToCommunity: Yup.string().trim(),
    // volatileBehaviourRiskActionTaken: Yup.string().trim(),
    // personExperiencedBereavement: Yup.string().trim(),
    // bereavementRiskActionTaken: Yup.string().trim(),
    // BullyingBullied: Yup.string().trim(),
    // BullyingOthers: Yup.string().trim(),
    // BullyingRiskActionTaken: Yup.string().trim(),
    // reducedContact: Yup.string().trim(),
    // isolation: Yup.string().trim(),
    // childThreatenedBehaviour: Yup.string().trim(),
    // childEngagedSexualActivity: Yup.string().trim(),
    // childEngagedCriminalActivity: Yup.string().trim(),
    // childExperiencingViolence: Yup.string().trim(),
    // receivingAwardAbusiveSituation: Yup.string().trim(),
    // apparentUseSocialMedia: Yup.string().trim(),
    // coercionRiskActionTaken: Yup.string().trim(),
    // disabilityLearning: Yup.string().trim(),
    // disabilityRiskActionTaken: Yup.string().trim(),
    // multipleChangeEduaction: Yup.string().trim(),
    // eduactionAtHome: Yup.string().trim(),
    // temporaryEducation: Yup.string().trim(),
    // infrequentAttendance: Yup.string().trim(),
    // reducedTimetableSchool: Yup.string().trim(),
    // permanentExclusion: Yup.string().trim(),
    // eduactionRiskActionTaken: Yup.string().trim(),
    // accessingPornography: Yup.string().trim(),
    // introductionAdultActivites: Yup.string().trim(),
    // exposurePonographyByAnotherPerson: Yup.string().trim(),
    // multipleIncidents: Yup.string().trim(),
    // pornographyRiskActionTaken: Yup.string().trim(),
    // promisingSexualActivity: Yup.string().trim(),
    // receivingGifts: Yup.string().trim(),
    // unaccountedMoney: Yup.string().trim(),
    // exchangingSexualRiskActionTaken: Yup.string().trim(),
    // relationshipBreakdown: Yup.string().trim(),
    // healthProblem: Yup.string().trim(),
    // poorCommunication: Yup.string().trim(),
    // reducedContactWithFamily: Yup.string().trim(),
    // lowWarmth: Yup.string().trim(),
    // parentsNotCopingBehaviour: Yup.string().trim(),
    // neglect: Yup.string().trim(),
    // lackOfBoundries: Yup.string().trim(),
    // parentColluding: Yup.string().trim(),
    // safeDespiteEfforts: Yup.string().trim(),
    // FamilyRiskActionTaken: Yup.string().trim(),
    // gangAssociation: Yup.string().trim(),
    // evidenceGangInvolvement: Yup.string().trim(),
    // tattoosLinkedGang: Yup.string().trim(),
    // involvementInCriminal: Yup.string().trim(),
    // currentInvolvement: Yup.string().trim(),
    // repeatOffending: Yup.string().trim(),
    // possessionToWeapons: Yup.string().trim(),
    // offendingPartOfGang: Yup.string().trim(),
    // evidenceOfGang: Yup.string().trim(),
    // gangAssociationRiskActionTaken: Yup.string().trim(),
    // historyBeingInCare: Yup.string().trim(),
    // currentlyInCare: Yup.string().trim(),
    // unknownAdult: Yup.string().trim(),
    // aloneHomeAtSignificantPeriods: Yup.string().trim(),
    // presentingAsHomeless: Yup.string().trim(),
    // numerousHouseMoves: Yup.string().trim(),
    // noStableHome: Yup.string().trim(),
    // offendingPartOfGangs: Yup.string().trim(),
    // homeLifeRiskActionTaken: Yup.string().trim(),
    // lowSelfEsteem: Yup.string().trim(),
    // diagnosedDepression: Yup.string().trim(),
    // significantlyHighConfidence: Yup.string().trim(),
    // significantlyCurrentSelfharm: Yup.string().trim(),
    // SignificantSelfHarm: Yup.string().trim(),
    // eatingDisorder: Yup.string().trim(),
    // suicidalThoughts: Yup.string().trim(),
    // mentalHealthRiskActionTaken: Yup.string().trim(),
    // missingLowSelfEsteem: Yup.string().trim(),
    // missingDiagnosedDepression: Yup.string().trim(),
    // missingSignificantlyHighConfidence: Yup.string().trim(),
    // missingSignificantlyCurrentSelfharm: Yup.string().trim(),
    // missingSignificantSelfHarm: Yup.string().trim(),
    // missingEatingDisorder: Yup.string().trim(),
    // missingSuicidalThoughts: Yup.string().trim(),
    // missingMentalHealthRiskActionTaken: Yup.string().trim(),
    // sexualAssaultWithinFamily: Yup.string().trim(),
    // allegationSexualAssault: Yup.string().trim(),
    // withinRelationship: Yup.string().trim(),
    // outsideRelationship: Yup.string().trim(),
    // marksRelatedToSexualAssault: Yup.string().trim(),
    // sexualAssaulthRiskActionTaken: Yup.string().trim(),
    // pregnancyYoungParent: Yup.string().trim(),
    // concealedPregnancy: Yup.string().trim(),
    // previousPregnancyTermination: Yup.string().trim(),
    // unwillingShareInfor: Yup.string().trim(),
    // multiplrPregnanciesTerminations: Yup.string().trim(),
    // pregnancyRiskActionTaken: Yup.string().trim(),
    // unableToDiscussSexuality: Yup.string().trim(),
    // concernsDomesticAbuse: Yup.string().trim(),
    // olderRelationships: Yup.string().trim(),
    // relationshipsRiskActionTaken: Yup.string().trim(),
    // sexualActivityBetweenUnder16: Yup.string().trim(),
    // harmfulBehaviour: Yup.string().trim(),
    // highRateOfSexualActivity: Yup.string().trim(),
    // childUnder13EngagingSexualActivity: Yup.string().trim(),
    // adultEngagedSexualActivity: Yup.string().trim(),
    // sexualActivityRiskActionTaken: Yup.string().trim(),
    // unprotectedSexualActvity: Yup.string().trim(),
    // sexuallyTransmittedInfection: Yup.string().trim(),
    // attendanceAtSexualHealth: Yup.string().trim(),
    // accessToEmergency: Yup.string().trim(),
    // sexualHealthUntreated: Yup.string().trim(),
    // sexualHealthRiskActionTaken: Yup.string().trim(),
    // multiplePhones: Yup.string().trim(),
    // onlineActivityHabits: Yup.string().trim(),
    // gamingPlatforms: Yup.string().trim(),
    // socialMediaPrioritization: Yup.string().trim(),
    // devicePrivacy: Yup.string().trim(),
    // internetSafetySecurityRisks: Yup.string().trim(),
    // inappropriateSharing: Yup.string().trim(),
    // nonConsensualSharing: Yup.string().trim(),
    // onlineSocialNetworkSize: Yup.string().trim(),
    // inappropriateOnlineForumParticipation: Yup.string().trim(),
    // sexualCommunicationFromAdultsToMinors: Yup.string().trim(),
    // UncommonCommunicationWithUnknowns: Yup.string().trim(),
    // OnlineToOfflineMeetingWithStrangers: Yup.string().trim(),
    // socialMediaRiskActionTaken: Yup.string().trim(),
    // potentialVictimOfHumanTrafficking: Yup.string().trim(),
    // traffickingRiskActionTaken: Yup.string().trim(),
    // childRiskAssessment: Yup.string().trim(),
    // childStrengths: Yup.string().trim(),
    // childVulnerabilitiesConcerns: Yup.string().trim(),
    // childSafeguardingMeasures: Yup.string().trim(),
    // InterventionPreferences: Yup.string().trim(),
    // jobTitle: Yup.string().trim(),
    // organiation: Yup.string().trim(),
    // email: Yup.string().trim(),
    // telephone: Yup.string().trim(),
  });

  export { default as SafeguardingAssessmentForm } from "./SafeguardingAssessmentForm";



