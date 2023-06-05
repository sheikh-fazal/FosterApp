import { RHFRadioGroup, RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import SignaturePad from "@root/components/SignaturePad";

export const initialValues = {
  fosterCarerName1: 'john doe',
  fosterCarerName2: 'sarah doe',
  fosterCarerDOB1: null,
  fosterCarerDOB2: null,
  fosterCarerAddress: 'lorem ipsum dolor sit amet',
  referenceNumber: '1234er4xwq2',
  supervisingSocialWorker: 'option',
  under18Name1: 'carter',
  under18Name2: 'ali carter',
  under18Name3: 'judd trump',
  under18DOB1: null,
  under18DOB2: null,
  under18DOB3: null,
  under18Relationship1: 'son',
  under18Relationship2: 'daughter',
  under18Relationship3: 'son',
  adultName1: 'john doe',
  adultName2: 'john doe',
  adultDob1: null,
  adultDob2: null,
  RelationshipCarer1: 'father',
  RelationshipCarer2: 'mother',
  currentTermsOfApproval: 'some text here',
  skillsLevelOrBanding: 'some text here',
  carerEthnicity1: 'asian',
  carerReligion1: 'islam',
  carerLanguage1: 'urdu',
  carerEmploymentDetails1: 'days 100 and hours 20',
  carerEthnicity2: 'asian',
  carerReligion2: 'islam',
  carerLanguage2: 'urdu',
  carerEmploymentDetails2: 'days 100 and hours 20',
  childMinding: 'Yes',
  skillsLevelOrBandingArrangements: 'some text here',
  childPlacementName1: 'sarah doe',
  childPlacementDob1: null,
  childPlacementEthnicity1: 'asian',
  childPlacementType1: 'john doe',
  childPlacementDatePlaced1: null,
  childPlacementAuthority1: 'supervising social worker',
  childPlacementName2: 'sarah doe',
  childPlacementDob2: null,
  childPlacementEthnicity2: 'asian',
  childPlacementType2: 'john doe',
  childPlacementDatePlaced2: null,
  childPlacementAuthority2: 'supervising social worker',
  childPlacementName3: 'sarah doe',
  childPlacementDob3: null,
  childPlacementEthnicity3: 'asian',
  childPlacementType3: 'john doe',
  childPlacementDatePlaced3: null,
  childPlacementAuthority3: 'supervising social worker',
  childPlacementEndedName1: 'john doe',
  childPlacementEndedDob1: null,
  childPlacementEndedEthnicity1: 'asian',
  childPlacementEndedType1: 'john doe',
  childPlacementEndedDatePlaced1: null,
  childPlacementEndedDatePlacedEnded1: null,
  childPlacementEndedAuthority1: 'supervising social worker',
  childPlacementEndedReasonPlacement1: "some reason",

  childPlacementEndedName2: 'john doe',
  childPlacementEndedDob2: null,
  childPlacementEndedEthnicity2: 'asian',
  childPlacementEndedType2: 'john doe',
  childPlacementEndedDatePlaced2: null,
  childPlacementEndedDatePlacedEnded2: null,
  childPlacementEndedAuthority2: 'supervising social worker',
  childPlacementEndedReasonPlacement2: "some reason",

  childPlacementEndedName3: 'john doe',
  childPlacementEndedDob3: null,
  childPlacementEndedEthnicity3: 'asian',
  childPlacementEndedType3: 'john doe',
  childPlacementEndedDatePlaced3: null,
  childPlacementEndedDatePlacedEnded3: null,
  childPlacementEndedAuthority3: 'supervising social worker',
  childPlacementEndedReasonPlacement3: "some reason",
  viewFRDForm: "Yes",
  whenUndertakingReview: 'some reason',
  dateOfInitialApproval: null,
  dateOfLastFosteringPanel: null,
  dateOfLastReviewMeeting: null,
  dateOfThisReviewMeeting: null,
  dateOfLastReviewWasCompleted: null,
  reasonForThisReview: 'other reason',

  disclosureHouseholdingName1: 'john doe',
  disclosureHouseholdingName2: 'john doe',
  disclosureHouseholdingName3: 'john doe',
  disclosureHouseholdingName4: 'john doe',

  disclosureHouseholdingDate1: null,
  disclosureHouseholdingDate2: null,
  disclosureHouseholdingDate3: null,
  disclosureHouseholdingDate4: null,

  disclosureHouseholdingDetail: 'some description',

  disclosureNonHouseholdingName1: "john doe",
  disclosureNonHouseholdingName2: "john doe",
  disclosureNonHouseholdingName3: "john doe",
  disclosureNonHouseholdingName4: "john doe",

  disclosureNonHouseholdingDate1: null,
  disclosureNonHouseholdingDate2: null,
  disclosureNonHouseholdingDate3: null,
  disclosureNonHouseholdingDate4: null,
  disclosureNonHouseholdingDetail: 'some description',

  localAuthorityHouseholdingName1: 'john doe',
  localAuthorityHouseholdingName2: 'john doe',
  localAuthorityHouseholdingName3: 'john doe',
  localAuthorityHouseholdingName4: 'john doe',

  localAuthorityHouseholdingDate1: null,
  localAuthorityHouseholdingDate2: null,
  localAuthorityHouseholdingDate3: null,
  localAuthorityHouseholdingDate4: null,
  localAuthorityHouseholdingDetail: 'some description',

  fosterCarerLastMedicalCheck1: null,
  fosterCarerMedicaladvisor1: 'some description',
  fosterCarerQuestionnaire1: null,
  fosterCarerLastMedicalCheck2: null,
  fosterCarerMedicaladvisor2: 'some description',
  fosterCarerQuestionnaire2: null,

  medicalCheckDetail: 'some description',

  checkWithName1: 'hello world',
  checkWithName2: 'hello world',
  checkWithName3: 'hello world',
  checkWithName4: 'hello world',

  dateofCheck1: null,
  dateofCheck2: null,
  dateofCheck3: null,
  dateofCheck4: null,

  otherCheckOrReports: 'some description',
  issueArisingFromOtherCheck: 'some description',
  dateOfHealthAndSafetyCheck: 'some description',
  dateOfUnannouncedInspectionVisit: 'some description',
  anyActionRequiredUnannouncedVisit: 'some description',
  planInCaseOfFire: 'some description',
  relationSatisfactory: 'some description',
  homeSafetyActionWithTargetCompletionDate: 'some description',
  dateOfMostRecentPolicy: null,
  wasThisReviewedAfterLastestPlacement: 'Yes',
  anyActionRequiredCaringPolicy: 'Yes',
  outStandingActionWithTargetCompleted: 'some description',

  petsInTheFosteringHousehold: 'Yes',
  petJoinedInTheReviewPeriod: 'Yes',
  assessmentCompletedOnAllPetsInHousehold: 'Yes',
  assessmentCompletedOnAllPetsInHouseholdComment: 'Yes',
  smokerInFosteringHousehold: 'Yes',
  smokingAgreementBeenCompleted: 'Yes',
  concernDetails: 'some description',
  dateOfFosterCareAgreement: null,
  dateOfSupervisionAgreement: null,
  toCarer1: null,
  toCarer2: null,
  complySupervisingAgreement: 'Yes',
  workerOrPeriodsUnallocated: 'some description',
  allegationReviewPeriodDate1: null,
  allegationReviewPeriodDate2: null,
  allegationReviewPeriodDetail1: 'some description',
  allegationReviewPeriodDetail2: 'some description',
  summaryOfOutcome1: 'some description',
  summaryOfOutcome2: 'some description',
  TDSAchieved: 'Yes',
  dateSignedOff: null,
  completionDate: null,
  saferCaringTraining: 'Yes',
  outstandingActionsCompletionDate: null,
  personalDevelopmentPlan: 'Yes',
  fosteringHistoryCarers: 'some description',
  recommendationOfLastFosterhomeReview: 'some description',
  exampleToShowCarerListens: 'some description',
  exampleToShowCarerProvides: 'some description',
  exampleToShowCarerCompliesWithPolicies: 'some description',
  exampleToShowCarerWithSupervisingSocialWorker: 'some description',
  exampleToShowCarerWithProfessional: 'some description',
  exampleToShowCarerOfBirthFamilies: 'some description',
  exampleToShowCarerPromotesHealthyPhysicalCare: 'some description',
  exampleToShowCarerPromotesPositiveBehaviour: 'some description',
  exampleToShowCarerCommuicateWithChildren: 'some description',
  fosterCarerRecordKeeping: 'some description',
  exampleToShowFosterCarerSupportChildrenAndYoungPeople: 'some description',
  exampleToShowFosterCarerEncourageInPlay: 'some description',
  fosterCarerSpecialEducationalNeeds: 'some description',
  unplannedPlacementEndingsInReviewPeriod: 'some description',
  childrenAndYoungPeopleFeelingSafe: 'some description',
  fosterCarerManagesThePersonalImpact: 'some description',
  fosterCarerAskedToCompleteFRDForm: 'some description',
  fosterCarerDemonstratedCommitment1: 'some description',
  fosterCarerDemonstratedCommitment2: 'some description',
  IdentifyTheStrengthsAndLimitations: 'some description',
  currentTermsOfApprovalAppropriate: 'some description',
  recommendationRegarding: 'some description',
  signature: null,
  label: null
}

export const FRAFormData = [
  {
    title: 'Foster Carers',
    gridLength: 12,
    formFields: [
      {
        gridLength: 4,
        title: 'Name *',
        subFields: [
          {
            otherOptions: {
              name: 'fosterCarerName1',
              fullWidth: true,
            },
            component: RHFTextField
          },
          {
            otherOptions: {
              name: 'fosterCarerName2',
              fullWidth: true,
            },
            component: RHFTextField
          },
        ]
      },
      {
        gridLength: 4,
        title: 'Date od Birth (age) *',
        subFields: [
          {
            otherOptions: {
              name: 'fosterCarerDOB1',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'fosterCarerDOB2',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
        ]
      },
      {
        gridLength: 4,
        title: 'Address *',
        subFields: [
          {
            otherOptions: {
              name: 'fosterCarerAddress',
              fullWidth: true,
              multiline: true,
              height: "initial",
              minRows: 3
            },
            component: RHFTextField
          }
        ]
      },
    ]
  },
  {
    title: 'Reference Number *',
    gridLength: 12,
    otherOptions: {
      name: 'referenceNumber',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Supervising social worker *',
    gridLength: 12,
    otherOptions: {
      name: 'supervisingSocialWorker',
      fullWidth: true,
      select: true,
      options: [{ value: 'teri dactyl', label: 'teri dactyl' }],
    },
    component: RHFSelect
  },
  {
    title: 'Foster carer’s own children (under 18) in the household',
    gridLength: 12,
    formFields: [
      {
        gridLength: 4,
        title: 'Name',
        subFields: [
          {
            otherOptions: {
              name: 'under18Name1',
              fullWidth: true,
            },
            component: RHFTextField
          },
          {
            otherOptions: {
              name: 'under18Name2',
              fullWidth: true,
            },
            component: RHFTextField
          },
          {
            otherOptions: {
              name: 'under18Name3',
              fullWidth: true,
            },
            component: RHFTextField
          },
        ]
      },
      {
        gridLength: 4,
        title: 'Date od Birth (age)',
        subFields: [
          {
            otherOptions: {
              name: 'under18DOB1',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'under18DOB2',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'under18DOB3',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
        ]
      },
      {
        gridLength: 4,
        title: 'Relationship to carer(s)',
        subFields: [
          {
            otherOptions: {
              name: 'under18Relationship1',
              fullWidth: true,
              select: true,
              options: [{ value: 'daughter', label: 'daughter' }],
            },
            component: RHFSelect
          },
          {
            otherOptions: {
              name: 'under18Relationship2',
              fullWidth: true,
              select: true,
              options: [{ value: 'son', label: 'son' }],
            },
            component: RHFSelect
          },
          {
            otherOptions: {
              name: 'under18Relationship3',
              fullWidth: true,
              select: true,
              options: [{ value: 'daughter', label: 'daughter' }],
            },
            component: RHFSelect
          }
        ]
      },
    ]
  },
  {
    title: 'Other adults in the household',
    gridLength: 12,
    formFields: [
      {
        gridLength: 4,
        title: 'Name',
        subFields: [
          {
            otherOptions: {
              name: 'adultName1',
              fullWidth: true,
            },
            component: RHFTextField
          },
          {
            otherOptions: {
              name: 'adultName2',
              fullWidth: true,
            },
            component: RHFTextField
          },
        ]
      },
      {
        gridLength: 4,
        title: 'Date od Birth (age)',
        subFields: [
          {
            otherOptions: {
              name: 'adultDob1',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'adultDob2',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
        ]
      },
      {
        gridLength: 4,
        title: 'Relationship to carer(s)',
        subFields: [
          {
            otherOptions: {
              name: 'RelationshipCarer1',
              fullWidth: true,
              select: true,
              options: [{ value: 'father', label: 'father' }],
            },
            component: RHFSelect
          },
          {
            otherOptions: {
              name: 'RelationshipCarer2',
              fullWidth: true,
              select: true,
              options: [{ value: 'mother', label: 'mother' }],
            },
            component: RHFSelect
          },
        ]
      },
    ]
  },
  {
    title: 'Term of approval'
  },
  {
    title: "Current terms of approval *",
    otherOptions: {
      name: 'currentTermsOfApproval',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: "Information on skills level or banding of carer/s where these exist",
    notice: "Provide any relevant information pertaining to the skills level or banding arrangements in your fostering service if appropriate in the box below.",
    otherOptions: {
      name: 'skillsLevelOrBanding',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Key information',
    gridLength: 12,
    formFields: [
      {
        gridLength: 4,
        title: 'Information',
        subFields: [
          {
            head: 'Ethnicity *'
          },
          {
            head: 'Religion(practising/non-practising) *'
          },
          {
            head: 'Language(s) spoken *'
          },
          {
            head: 'Employment details (days and hours worked) *'
          },
        ]
      },
      {
        gridLength: 4,
        title: 'Carer 1',
        subFields: [
          {
            otherOptions: {
              name: 'carerEthnicity1',
              fullWidth: true,
              select: true,
              options: [{ value: 'white and asian', label: 'white and asian' }]
            },
            component: RHFSelect
          },
          {
            otherOptions: {
              name: 'carerReligion1',
              fullWidth: true,
              select: true,
              options: [{ value: 'islam', label: 'islam' }]
            },
            component: RHFSelect
          },
          {
            otherOptions: {
              name: 'carerLanguage1',
              fullWidth: true,
              select: true,
              options: [{ value: 'urdu', label: 'urdu' }]
            },
            component: RHFSelect
          },
          {
            otherOptions: {
              name: 'carerEmploymentDetails1',
              fullWidth: true,
              select: true,
              options: [{ value: 'urdu', label: 'urdu' }]
            },
            component: RHFSelect
          },
        ]
      },
      {
        gridLength: 4,
        title: 'Carer 2',
        subFields: [
          {
            otherOptions: {
              name: 'carerEthnicity2',
              fullWidth: true,
              select: true,
              options: [{ value: 'white and asian', label: 'white and asian' }]
            },
            component: RHFSelect
          },
          {
            otherOptions: {
              name: 'carerReligion2',
              fullWidth: true,
              select: true,
              options: [{ value: 'islam', label: 'islam' }]
            },
            component: RHFSelect
          },
          {
            otherOptions: {
              name: 'carerLanguage2',
              fullWidth: true,
              select: true,
              options: [{ value: 'urdu', label: 'urdu' }]
            },
            component: RHFSelect
          },
          {
            otherOptions: {
              name: 'carerEmploymentDetails2',
              fullWidth: true,
              select: true,
              options: [{ value: 'urdu', label: 'urdu' }]
            },
            component: RHFSelect
          },
        ]
      },
    ]
  },
  {
    gridLength: 12,
    title: 'Are the foster carer/s child-minding?',
    otherOptions: {
      name: 'childMinding',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Provide any relevant information pertaining to the skills level or banding arrangements in your fostering service if appropriate in the box below.',
    otherOptions: {
      name: 'skillsLevelOrBandingArrangements',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Children currently in placement',
    gridLength: 12,
    formFields: [
      {
        gridLength: 3,
        hideTitle: true,
        subFields: [
          {
            head: "Name *",
            info: 'If your service requires initials not names, amend accordingly'
          },
          {
            head: 'Date of birth (age) *'
          },
          {
            head: 'Ethnicty *'
          },
          {
            head: 'Placement type *'
          },
          {
            head: 'Date Placed'
          },
          {
            head: 'Placing authority (if appropriate)'
          },
        ]
      },
      {
        gridLength: 3,
        title: 'Child 1',
        subFields: [
          {
            otherOptions: {
              name: 'childPlacementName1',
              fullWidth: true,
              height: '84px'
            },
            component: RHFTextField
          },
          {
            otherOptions: {
              name: 'childPlacementDob1',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'childPlacementEthnicity1',
              fullWidth: true,
              select: true,
              options: [{ value: 'white and asian', label: 'white and asian' }]
            },
            component: RHFSelect
          },
          {
            otherOptions: {
              name: 'childPlacementType1',
              fullWidth: true,
              select: true,
              options: [{ value: 'placement doe', label: 'placement doe' }]
            },
            component: RHFSelect
          },
          {
            otherOptions: {
              name: 'childPlacementDatePlaced1',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'childPlacementAuthority1',
              fullWidth: true,
              select: true,
              options: [{ value: 'supervising social worker ', label: 'supervising social worker ' }]
            },
            component: RHFSelect
          },
        ]
      },
      {
        gridLength: 3,
        title: 'Child 2',
        subFields: [
          {
            otherOptions: {
              name: 'childPlacementName2',
              fullWidth: true,
              height: '84px'
            },
            component: RHFTextField
          },
          {
            otherOptions: {
              name: 'childPlacementDob2',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'childPlacementEthnicity2',
              fullWidth: true,
              select: true,
              options: [{ value: 'white and asian', label: 'white and asian' }]
            },
            component: RHFSelect
          },
          {
            otherOptions: {
              name: 'childPlacementType2',
              fullWidth: true,
              select: true,
              options: [{ value: 'placement doe', label: 'placement doe' }]
            },
            component: RHFSelect
          },
          {
            otherOptions: {
              name: 'childPlacementDatePlaced2',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'childPlacementAuthority2',
              fullWidth: true,
              select: true,
              options: [{ value: 'supervising social worker ', label: 'supervising social worker ' }]
            },
            component: RHFSelect
          },
        ]
      },
      {
        gridLength: 3,
        title: 'Child 3',
        subFields: [
          {
            otherOptions: {
              name: 'childPlacementName3',
              fullWidth: true,
              height: '84px'
            },
            component: RHFTextField
          },
          {
            otherOptions: {
              name: 'childPlacementDob3',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'childPlacementEthnicity3',
              fullWidth: true,
              select: true,
              options: [{ value: 'white and asian', label: 'white and asian' }]
            },
            component: RHFSelect
          },
          {
            otherOptions: {
              name: 'childPlacementType3',
              fullWidth: true,
              select: true,
              options: [{ value: 'placement doe', label: 'placement doe' }]
            },
            component: RHFSelect
          },
          {
            otherOptions: {
              name: 'childPlacementDatePlaced3',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'childPlacementAuthority3',
              fullWidth: true,
              select: true,
              options: [{ value: 'supervising social worker ', label: 'supervising social worker ' }]
            },
            component: RHFSelect
          },
        ]
      },
    ]
  },
  {
    title: 'Placements that ended since last review',
    gridLength: 12,
    formFields: [
      {
        gridLength: 3,
        hideTitle: true,
        subFields: [
          {
            head: "Name *",
            info: 'If your service requires initials not names, amend accordingly'
          },
          {
            head: 'Date of birth (age) *'
          },
          {
            head: 'Ethnicty *'
          },
          {
            head: 'Placement type *'
          },
          {
            head: 'Date Placed'
          },
          {
            head: 'Date Placement ended'
          },
          {
            head: 'Placing authority (if appropriate)'
          },
          {
            head: 'Reason placement ended'
          },
        ]
      },
      {
        gridLength: 3,
        title: 'Child 1',
        subFields: [
          {
            otherOptions: {
              name: 'childPlacementEndedName1',
              fullWidth: true,
              height: '84px'
            },
            component: RHFTextField
          },
          {
            otherOptions: {
              name: 'childPlacementEndedDob1',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'childPlacementEndedEthnicity1',
              fullWidth: true,
              select: true,
              options: [{ value: 'white and asian', label: 'white and asian' }]
            },
            component: RHFSelect
          },
          {
            otherOptions: {
              name: 'childPlacementEndedType1',
              fullWidth: true,
              select: true,
              options: [{ value: 'placement doe', label: 'placement doe' }]
            },
            component: RHFSelect
          },
          {
            otherOptions: {
              name: 'childPlacementEndedDatePlaced1',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'childPlacementEndedDatePlacedEnded1',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'childPlacementEndedAuthority1',
              fullWidth: true,
              select: true,
              options: [{ value: 'supervising social worker ', label: 'supervising social worker ' }]
            },
            component: RHFSelect
          },
          {
            otherOptions: {
              name: 'childPlacementEndedReasonPlacement1',
              fullWidth: true,
              multiline: true,
              minRows: 1,
              height: 'initial'
            },
            component: RHFTextField
          },
        ]
      },
      {
        gridLength: 3,
        title: 'Child 2',
        subFields: [
          {
            otherOptions: {
              name: 'childPlacementEndedName2',
              fullWidth: true,
              height: '84px'
            },
            component: RHFTextField
          },
          {
            otherOptions: {
              name: 'childPlacementEndedDob2',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'childPlacementEndedEthnicity2',
              fullWidth: true,
              select: true,
              options: [{ value: 'white and asian', label: 'white and asian' }]
            },
            component: RHFSelect
          },
          {
            otherOptions: {
              name: 'childPlacementEndedType2',
              fullWidth: true,
              select: true,
              options: [{ value: 'placement doe', label: 'placement doe' }]
            },
            component: RHFSelect
          },
          {
            otherOptions: {
              name: 'childPlacementEndedDatePlaced2',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'childPlacementEndedDatePlacedEnded2',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'childPlacementEndedAuthority2',
              fullWidth: true,
              select: true,
              options: [{ value: 'supervising social worker ', label: 'supervising social worker ' }]
            },
            component: RHFSelect
          },
          {
            otherOptions: {
              name: 'childPlacementEndedReasonPlacement2',
              fullWidth: true,
              multiline: true,
              minRows: 1,
              height: 'initial'
            },
            component: RHFTextField
          },
        ]
      },
      {
        gridLength: 3,
        title: 'Child 3',
        subFields: [
          {
            otherOptions: {
              name: 'childPlacementEndedName3',
              fullWidth: true,
              height: '84px'
            },
            component: RHFTextField
          },
          {
            otherOptions: {
              name: 'childPlacementEndedDob3',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'childPlacementEndedEthnicity3',
              fullWidth: true,
              select: true,
              options: [{ value: 'white and asian', label: 'white and asian' }]
            },
            component: RHFSelect
          },
          {
            otherOptions: {
              name: 'childPlacementEndedType3',
              fullWidth: true,
              select: true,
              options: [{ value: 'placement doe', label: 'placement doe' }]
            },
            component: RHFSelect
          },
          {
            otherOptions: {
              name: 'childPlacementEndedDatePlaced3',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'childPlacementEndedDatePlacedEnded3',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'childPlacementEndedAuthority3',
              fullWidth: true,
              select: true,
              options: [{ value: 'supervising social worker ', label: 'supervising social worker ' }]
            },
            component: RHFSelect
          },
          {
            otherOptions: {
              name: 'childPlacementEndedReasonPlacement3',
              fullWidth: true,
              multiline: true,
              minRows: 1,
              height: 'initial'
            },
            component: RHFTextField
          },
        ]
      },
    ]
  },
  {
    title: 'Children currently in placement',
    gridLength: 12
  },
  {
    gridLength: 12,
    title: 'Are foster children’s views (Form FR-D) provided for all these children (subject to age and understanding)?',
    otherOptions: {
      name: 'viewFRDForm',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'When undertaking a review, Regulation 28(3)(b) requires the fostering service to take into account the views of any child placed with foster carers (subject to age and understanding), and the views of the placing authority.',
    otherOptions: {
      name: 'whenUndertakingReview',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Fostering review history',
    gridLength: 12,
    formFields: [
      {
        gridLength: 6,
        marginTop: "-42px",
        hideTitle: true,
        subFields: [
          {
            head: "Date of initial approval"
          },
          {
            head: "Date of last fostering panel"
          },
          {
            head: "Date of last review meeting"
          },
          {
            head: "Date of this review meeting"
          },
          {
            head: "Date of last review was completed"
          },
          {
            head: "Reason for this review"
          },
        ]
      },
      {
        gridLength: 6,
        marginTop: "-42px",
        hideTitle: true,
        subFields: [
          {
            otherOptions: {
              name: 'dateOfInitialApproval',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'dateOfLastFosteringPanel',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'dateOfLastReviewMeeting',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'dateOfThisReviewMeeting',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'dateOfLastReviewWasCompleted',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'reasonForThisReview',
              fullWidth: true,
              select: true,
              options: [{ label: 'initial review', value: "initial review" }]
            },
            component: RHFSelect
          },

        ]
      },
    ]
  },
  {
    gridLength: 12,
    title: 'Disclosure and Barring checks (foster carers/adult household members)',
    notice: 'There is no legal requirement to update DBS checks after approval, but fostering services will have their own policies regarding the updating of these checks.',
    subText: "Detail the policy requirements of your fostering service either here or in the box underneath"
  },
  {
    gridLength: 12,
    formFields: [
      {
        gridLength: 6,
        title: 'Name',
        subFields: [
          {
            otherOptions: {
              name: 'disclosureHouseholdingName1',
              fullWidth: true,
            },
            component: RHFTextField
          },
          {
            otherOptions: {
              name: 'disclosureHouseholdingName2',
              fullWidth: true,
            },
            component: RHFTextField
          },
          {
            otherOptions: {
              name: 'disclosureHouseholdingName3',
              fullWidth: true,
            },
            component: RHFTextField
          },
          {
            otherOptions: {
              name: 'disclosureHouseholdingName4',
              fullWidth: true,
            },
            component: RHFTextField
          },
        ]
      },
      {
        gridLength: 6,
        title: 'Date of check',
        subFields: [
          {
            otherOptions: {
              name: 'disclosureHouseholdingDate1',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'disclosureHouseholdingDate2',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'disclosureHouseholdingDate3',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'disclosureHouseholdingDate4',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
        ]
      },
    ]
  },
  {
    title: "Details",
    gridLength: 12,
    otherOptions: {
      name: 'disclosureHouseholdingDetail',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: "Disclosure and Barring Service checks (non-household members)"
  },
  {
    gridLength: 12,
    notice: 'There is no legal requirement to undertake DBS checks on non-household members but fostering services will have their own policies regarding this issue',
    subText: "Detail the policy requirements of your fostering service either here or in the box underneath"
  },
  {
    gridLength: 12,
    formFields: [
      {
        gridLength: 6,
        title: 'Name',
        subFields: [
          {
            otherOptions: {
              name: 'disclosureNonHouseholdingName1',
              fullWidth: true,
            },
            component: RHFTextField
          },
          {
            otherOptions: {
              name: 'disclosureNonHouseholdingName2',
              fullWidth: true,
            },
            component: RHFTextField
          },
          {
            otherOptions: {
              name: 'disclosureNonHouseholdingName3',
              fullWidth: true,
            },
            component: RHFTextField
          },
          {
            otherOptions: {
              name: 'disclosureNonHouseholdingName4',
              fullWidth: true,
            },
            component: RHFTextField
          },
        ]
      },
      {
        gridLength: 6,
        title: 'Date of check',
        subFields: [
          {
            otherOptions: {
              name: 'disclosureNonHouseholdingDate1',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'disclosureNonHouseholdingDate2',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'disclosureNonHouseholdingDate3',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'disclosureNonHouseholdingDate4',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
        ]
      },
    ]
  },
  {
    title: "Details",
    gridLength: 12,
    otherOptions: {
      name: 'disclosureNonHouseholdingDetail',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: "Local authority checks (foster carers/adult household members)"
  },
  {
    gridLength: 12,
    notice: 'There is no legal requirement to update local authority checks after approval, but fostering services will have their own policies regarding the updating of these checks.',
    subText: "Detail the policy requirements of your fostering service either here or in the box below"
  },
  {
    gridLength: 12,
    formFields: [
      {
        gridLength: 6,
        title: 'Name',
        subFields: [
          {
            otherOptions: {
              name: 'localAuthorityHouseholdingName1',
              fullWidth: true,
            },
            component: RHFTextField
          },
          {
            otherOptions: {
              name: 'localAuthorityHouseholdingName2',
              fullWidth: true,
            },
            component: RHFTextField
          },
          {
            otherOptions: {
              name: 'localAuthorityHouseholdingName3',
              fullWidth: true,
            },
            component: RHFTextField
          },
          {
            otherOptions: {
              name: 'localAuthorityHouseholdingName4',
              fullWidth: true,
            },
            component: RHFTextField
          },
        ]
      },
      {
        gridLength: 6,
        title: 'Date of check',
        subFields: [
          {
            otherOptions: {
              name: 'localAuthorityHouseholdingDate1',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'localAuthorityHouseholdingDate2',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'localAuthorityHouseholdingDate3',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'localAuthorityHouseholdingDate4',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
        ]
      },
    ]
  },
  {
    title: "Details",
    gridLength: 12,
    otherOptions: {
      name: 'localAuthorityHouseholdingDetail',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: "Medical checks"
  },
  {
    gridLength: 12,
    notice: 'There is no legal requirement to update medical checks after approval, or to use health questionnaires, but fostering services will have their own policies regarding this matter',
    subText: "Detail the policy requirements of your fostering service either here or in the box below"
  },
  {
    gridLength: 12,
    formFields: [
      {
        gridLength: 6,
        subTitle: "Foster carer 1",
        subFields: [
          {
            head: 'Date of last medical check'
          },
          {
            otherOptions: {
              name: 'fosterCarerLastMedicalCheck1',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            head: 'Medical advisor comments'
          },
          {
            otherOptions: {
              name: 'fosterCarerMedicaladvisor1',
              fullWidth: true,
              multiline: true,
              minRows: 1
            },
            component: RHFTextField
          },
          {
            head: 'Date health questionnaire completed'
          },
          {
            otherOptions: {
              name: 'fosterCarerQuestionnaire1',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
        ]
      },
      {
        gridLength: 6,
        subTitle: "Foster carer 1",
        subFields: [
          {
            head: 'Date of last medical check'
          },
          {
            otherOptions: {
              name: 'fosterCarerLastMedicalCheck2',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            head: 'Medical advisor comments'
          },
          {
            otherOptions: {
              name: 'fosterCarerMedicaladvisor2',
              fullWidth: true,
              multiline: true,
              minRows: 1
            },
            component: RHFTextField
          },
          {
            head: 'Date health questionnaire completed'
          },
          {
            otherOptions: {
              name: 'fosterCarerQuestionnaire2',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
        ]
      },
    ]
  },
  {
    title: "Details",
    gridLength: 12,
    otherOptions: {
      name: 'medicalCheckDetail',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: "Other checks or reports"
  },
  {
    gridLength: 12,
    notice: 'Notice: Fostering services will have policies about what checks need to be completed at review stage and might include checks with health visitors, schools and others. Where appropriate, reports might be obtained using Form FR-F1 Detail the policy requirements of your fostering service either here or in the box below',
    subText: "Detail the policy requirements of your fostering service either here or in the box below"
  },
  {
    gridLength: 12,
    formFields: [
      {
        gridLength: 6,
        title: 'Check with',
        subFields: [
          {
            otherOptions: {
              name: 'checkWithName1',
              fullWidth: true,
            },
            component: RHFTextField
          },
          {
            otherOptions: {
              name: 'checkWithName2',
              fullWidth: true,
            },
            component: RHFTextField
          },
          {
            otherOptions: {
              name: 'checkWithName3',
              fullWidth: true,
            },
            component: RHFTextField
          },
          {
            otherOptions: {
              name: 'checkWithName4',
              fullWidth: true,
            },
            component: RHFTextField
          },
        ]
      },
      {
        gridLength: 6,
        title: 'Date of check',
        subFields: [
          {
            otherOptions: {
              name: 'dateofCheck1',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'dateofCheck2',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'dateofCheck3',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'dateofCheck4',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
        ]
      },
    ]
  },
  {
    title: "Details",
    gridLength: 12,
    otherOptions: {
      name: 'otherCheckOrReports',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'Comment on any issues arising from these other checks'
  },
  {
    title: "Briefly describe the foster home accommodation, including *",
    points: ['number of bedrooms;', 'where each person in the household sleeps;', 'any arrangements for room sharing;', 'a description of the child or young person’s room.'],
    subTitle: 'Fostering Services NMS (10.1) state that the foster home must comfortably accommodate all who live there. NMS (10.2) requires the home to be adequately furnished and decorated, clean and hygienic. Avoidable hazards should be removed (NMS 10.3). NMS (10.6) notes that unless specifically agreed otherwise, children over the age of three should have their own bedroom [TSD 3.2(a)(b)].'
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "issueArisingFromOtherCheck",
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: "Foster home safety check/unannounced visits"
  },
  {
    title: 'NMS (10.5) states that the foster home must be inspected annually without appointment. Statutory guidance (paragraph 5.67) requires at least one unannounced visit a year by the supervising social worker. TSD 3.2(c) requires foster carers and those living in the household to know what to do in the event of fire.',
    subText: 'Detail the policy requirements of your fostering service (including in relation to holiday homes or second homes if relevant) either here or in the box below.'
  },
  {
    gridLength: 12,
    title: "Date of health and safety check *",
    otherOptions: {
      name: "dateOfHealthAndSafetyCheck",
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: "Date of unannounced inspection visit(s) since the last review *",
    otherOptions: {
      name: "dateOfUnannouncedInspectionVisit",
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'Are any action required?',
    otherOptions: {
      name: 'anyActionRequiredUnannouncedVisit',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Is there a plan in case of fire?',
    otherOptions: {
      name: 'planInCaseOfFire',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Are arrangements in relation to holiday homes or second homes satisfactory?',
    otherOptions: {
      name: 'relationSatisfactory',
      options: ['Yes', 'No', 'Not available'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: "Detail any outstanding home safety actions with target completion dates *",
    otherOptions: {
      name: "homeSafetyActionWithTargetCompletionDate",
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: "Family safer caring plan"
  },
  {
    title: 'There is no legal requirement for a written family safer caring policy, but TSD 6.2(d) requires foster carers to ‘develop and maintain safer caring guidelines for you and your household’.'
  },
  {
    title: 'Date of most recent policy',
    gridLength: 6,
    otherOptions: {
      name: 'dateOfMostRecentPolicy',
      fullWidth: true,
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    title: 'Was this reviewed after the latest placement?',
    otherOptions: {
      name: 'wasThisReviewedAfterLastestPlacement',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Any actions required?',
    otherOptions: {
      name: 'anyActionRequiredCaringPolicy',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Detail any outstanding actions with target completion dates *',
    otherOptions: {
      name: 'outStandingActionWithTargetCompleted',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Pets'
  },
  {
    title: 'There is no specific legal guidance about fostering and pets, but fostering services will likely have a policy that should be referred to. It is advised that where a new pet has joined the household in the review period, an assessment is made and attached.'
  },
  {
    gridLength: 12,
    title: 'Are there pets in the fostering household?',
    otherOptions: {
      name: 'petsInTheFosteringHousehold',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Have any new pets joined the household in the review period?',
    otherOptions: {
      name: 'petJoinedInTheReviewPeriod',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Have assessments been completed on all pets in the household?',
    otherOptions: {
      name: 'assessmentCompletedOnAllPetsInHousehold',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Have assessments been completed on all pets in the household',
    otherOptions: {
      name: 'assessmentCompletedOnAllPetsInHouseholdComment',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: "Smoking"
  },
  {
    title: "There is no specific legal guidance about fostering and smoking, but fostering services should have a policy that should be referred to."
  },
  {
    gridLength: 12,
    title: 'Are there smokers in the fostering household?',
    otherOptions: {
      name: 'smokerInFosteringHousehold',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Has a smoking agreement been completed or has smoking been addressed in safer caring plan?',
    otherOptions: {
      name: 'smokingAgreementBeenCompleted',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Detail any concerns or outstanding actions',
    otherOptions: {
      name: 'concernDetails',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: "Supervision arrangements"
  },
  {
    gridLength: 6,
    title: 'Date of foster care agreement',
    otherOptions: {
      name: 'dateOfFosterCareAgreement',
      fullWidth: true,
    },
    component: RHFDatePicker
  },
  {
    gridLength: 6,
    title: 'Date of supervision agreement',
    otherOptions: {
      name: 'dateOfSupervisionAgreement',
      fullWidth: true,
    },
    component: RHFDatePicker
  },
  {
    title: 'Date of supervising social worker visits since the last foster home review'
  },
  {
    gridLength: 6,
    title: 'To Carer 1:',
    otherOptions: {
      name: 'toCarer1',
      fullWidth: true,
    },
    component: RHFDatePicker
  },
  {
    gridLength: 6,
    title: 'To Carer 2:',
    otherOptions: {
      name: 'toCarer2',
      fullWidth: true,
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    title: 'Does this comply with the supervision agreement?',
    otherOptions: {
      name: 'complySupervisingAgreement',
      options: ['Yes', 'No', 'Not available'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Changes of supervising social worker or periods unallocated since last foster home review',
    otherOptions: {
      name: 'workerOrPeriodsUnallocated',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Allegations in this review period'
  },
  {
    gridLength: 12,
    formFields: [
      {
        gridLength: 4,
        title: 'Date',
        subFields: [
          {
            otherOptions: {
              name: 'allegationReviewPeriodDate1',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
          {
            otherOptions: {
              name: 'allegationReviewPeriodDate2',
              fullWidth: true,
            },
            component: RHFDatePicker
          },
        ]
      },
      {
        gridLength: 4,
        title: 'Allegation',
        subFields: [
          {
            otherOptions: {
              name: 'allegationReviewPeriodDetail1',
              fullWidth: true,
              multiline: true,
              minRows: 1
            },
            component: RHFTextField
          },
          {
            otherOptions: {
              name: 'allegationReviewPeriodDetail2',
              fullWidth: true,
              multiline: true,
              minRows: 1
            },
            component: RHFTextField
          },
        ]
      },
      {
        gridLength: 4,
        title: 'Summary of outcome',
        subFields: [
          {
            otherOptions: {
              name: 'summaryOfOutcome1',
              fullWidth: true,
              multiline: true,
              minRows: 1
            },
            component: RHFTextField
          },
          {
            otherOptions: {
              name: 'summaryOfOutcome2',
              fullWidth: true,
              multiline: true,
              minRows: 1
            },
            component: RHFTextField
          }
        ]
      },
    ]
  },
  {
    title: "Training, support and development standards"
  },
  {
    gridLength: 12,
    title: 'Have the TSDS been achieved?',
    otherOptions: {
      name: 'TDSAchieved',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'If yes, what date was this signed off?',
    otherOptions: {
      name: 'dateSignedOff',
      fullWidth: true,
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    title: 'If no, detail outstanding actions and a target completion date',
    otherOptions: {
      name: 'completionDate',
      fullWidth: true,
    },
    component: RHFDatePicker
  },
  {
    title: "Safer caring training"
  },
  {
    gridLength: 12,
    title: 'Has safer caring training been provided to all household members?',
    otherOptions: {
      name: 'saferCaringTraining',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Detail outstanding actions and a target completion date',
    otherOptions: {
      name: 'outstandingActionsCompletionDate',
      fullWidth: true,
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    title: 'Do the foster carers have written personal development plans?',
    otherOptions: {
      name: 'personalDevelopmentPlan',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    title: "HISTORICAL CONTEXT",
  },
  {
    title: 'Fostering history'
  },
  {
    title: 'Briefly summarise the fostering history of these carers. Identify any themes or patterns that have emerged over the time that they have been fostering, Including allegations, concerns and complaints. Consider whether completing and attaching a chronology or placement record since approval might be helpful.',
    gridLength: 12,
    otherOptions: {
      name: 'fosteringHistoryCarers',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Changes since last foster home review'
  },
  {
    title: 'Identify any changes in household composition, circumstances or significant events. This should include any changes in the carer’s employment, changes in the carer’s health, or new pets.',
    gridLength: 12,
    otherOptions: {
      name: 'recommendationOfLastFosterhomeReview',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'TSD 1 – PRINCIPLES AND VALUES'
  },
  {
    title: 'Individual needs of children'
  },
  {
    title: 'Describe and give examples to show how the carer listens to, and takes account of, the individual needs, wishes, feelings and preferences of children and young people.[1.3(b); 4.1(a)] *',
    gridLength: 12,
    otherOptions: {
      name: 'exampleToShowCarerListens',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Equality and diversity'
  },
  {
    title: 'Describe and give examples to show how the carer provides care which respects and values each child’s ethnic, religious, cultural and background; and helps young people to deal with discrimination and develop positive sexual identities. [1.2(a)(b)(c); 5.7(b)] *',
    gridLength: 12,
    otherOptions: {
      name: 'exampleToShowCarerProvides',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Confidentiality'
  },
  {
    title: 'Describe and give examples to show how the carer complies with service confidentiality policies, including an understanding of the limits of confidentiality [1.4(a)(b)(c)]. This should include maintaining appropriate confidentiality when communicating with the carer’s own family and friends. [4.3(c)] *',
    gridLength: 12,
    otherOptions: {
      name: 'exampleToShowCarerCompliesWithPolicies',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'TSD 2 – ROLE AS A FOSTER CARER'
  },
  {
    title: 'Working with the supervising social worker'
  },
  {
    title: 'Describe and give examples to show how the foster carer works with their supervising social worker, including evidence about use of supervision and support, being organised and reliable, and communicating effectively (including using different communications media). [2.1(c); 2.4(b); 2.5(a); 4.2(c); 4.4(b); 7.3(a)(c)] *',
    gridLength: 12,
    otherOptions: {
      name: 'exampleToShowCarerWithSupervisingSocialWorker',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Working as part of a team'
  },
  {
    title: 'Describe and give examples to show how the foster carer works with other professionals, including the child’s social worker, undertaking the foster carer’s role and responsibilities, contributing to planning for children and young people, and communicating effectively. [2.4(a)(b)(c); 2.1(b); 4.4(a)] Describe how foster carers are negotiating and making use of delegated authority *',
    gridLength: 12,
    otherOptions: {
      name: 'exampleToShowCarerWithProfessional',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Working with birth family'
  },
  {
    title: 'Describe and give examples to show how the foster carer understands the importance of birth families, and works with children and their families to support and promote contact where appropriate. [2.3(a)(b); 2.1(b); 4.3(a)(b); 5.6 (a)(b)] *',
    gridLength: 12,
    otherOptions: {
      name: 'exampleToShowCarerOfBirthFamilies',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'TSD 3- HEALTHY CARE'
  },
  {
    title: 'Healthy physical and emotional care'
  },
  {
    title: 'Describe and give examples to show how the foster carer promotes the healthy physical care of children and young people, including giving advice and information about health and hygiene, including sexual health. [3.3(a)(b)(c); 5.7(a); 1.3(a)] Describe and give examples to show how the carer promotes the healthy emotional care of children and young people, taking into account any attachment difficulties, trauma, separation and loss. Describe how the carer supports children through significant milestones, life changes and challenges, and how they promote self-confidence, self-esteem, and independence skills. [3.3(a); 5.1(a); 5.6(c); 1.3(a); 5.3(a)(b)(c); 5.2] *',
    gridLength: 12,
    otherOptions: {
      name: 'exampleToShowCarerPromotesHealthyPhysicalCare',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Managing behaviour'
  },
  {
    title: 'Describe and give examples to show how the carer promotes positive behaviour and manages challenging behaviour safely and appropriately, taking account of the needs of all household members. [3.4(a)(b)(c)] *',
    gridLength: 12,
    otherOptions: {
      name: 'exampleToShowCarerPromotesPositiveBehaviour',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'TSD 4 – COMMUNICATING EFFECTIVELY'
  },
  {
    title: 'Communicating with children'
  },
  {
    title: 'Describe and give examples to show how the foster carer communicates with children according to their age and stage of development, using verbal and non-verbal means, and using different communications media. Describe how the encourages children to make their own decisions as appropriate. [4.1(a)(b)(c)(d); 4.2(a)(b)(c); 5.1(a)(b)(c)] *',
    gridLength: 12,
    otherOptions: {
      name: 'exampleToShowCarerCommuicateWithChildren',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Record keeping'
  },
  {
    title: 'Describe the foster carer’s record keeping, in relation to whether the records are accurate, relevant, clear and concise. Describe how records are kept securely, and how children and young people are involved in keeping records and memorabilia. This includes keeping life story books and memory boxes as appropriate. [4.5(a)(c)(d); 1.4(a)] *',
    gridLength: 12,
    otherOptions: {
      name: 'fosterCarerRecordKeeping',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'TSD 5 – UNDERSTANDING DEVELOPMENT'
  },
  {
    title: 'Education'
  },
  {
    title: 'Describe and give examples to show how the foster carer supports children and young people in relation to education, training and employment, including advocating that their educational needs are met. [5.5(a)(b)(c)(d); 1.3(a)] *',
    gridLength: 12,
    otherOptions: {
      name: 'exampleToShowFosterCarerSupportChildrenAndYoungPeople',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Play and leisure'
  },
  {
    title: 'Describe and give examples to show how the foster carer encourages children and young people to participate in play, and promotes hobbies, activities and social interests (in safe and organised environments). [5.4(a)(b); 1.3(a;); 2.5(b)] *',
    gridLength: 12,
    otherOptions: {
      name: 'exampleToShowFosterCarerEncourageInPlay',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Disability'
  },
  {
    title: 'Where the foster carer has looked after a disabled child or child with special educational needs, describe and give examples to show how they have  applied a social model of disability, and adapted activities and experiences, and supported the child to achieve their full potential. [5.8(a)(b)(c)(d)] *',
    gridLength: 12,
    otherOptions: {
      name: 'fosterCarerSpecialEducationalNeeds',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Unplanned endings'
  },
  {
    title: 'If there were any unplanned placement endings in the review period, please provide details of the circumstances and how the ending was managed.',
    gridLength: 12,
    otherOptions: {
      name: 'unplannedPlacementEndingsInReviewPeriod',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'TSD 6 – KEEPING CHILDREN SAFE'
  },
  {
    title: 'Keeping children safe'
  },
  {
    title: 'Describe and give examples to show how the foster carer keeps children and young people safe, and feeling safe. Describe how the foster carer helps   children and young people keep themselves safe, including communicating with them about risk and safety. [6.2(a)(b)(c); 1.3(a)(c); 3.5(a) *',
    gridLength: 12,
    otherOptions: {
      name: 'childrenAndYoungPeopleFeelingSafe',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'TSD 6 – KEEPING CHILDREN SAFE'
  },
  {
    title: 'Impact of fostering and getting support'
  },
  {
    title: 'Describe and give examples to show how the foster carer manages the personal impact that fostering can have on individuals and families, and how they make use of support from their networks. Be aware of the particular issues for male, BME and LGBT+ carers. [7.1(a)(b)(c)] Include discussion of whether foster carers have made use of formal respite provision. *',
    gridLength: 12,
    otherOptions: {
      name: 'fosterCarerManagesThePersonalImpact',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Foster carer’s children'
  },
  {
    title: 'The foster carer’s children should have been asked to complete Form FR-D. Describe how fostering impacts on these children, and other family members, and how their support and training needs are being met. Describe how their views are sought and taken into account. [7.1(a); 7.2(a)] *',
    gridLength: 12,
    otherOptions: {
      name: 'fosterCarerAskedToCompleteFRDForm',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Continuing professional development (CPD) – Carer 1'
  },
  {
    title: 'Describe how the foster carer has demonstrated their commitment to continuing professional development in line with their personal development plan',
    gridLength: 12,
    otherOptions: {
      name: 'fosterCarerDemonstratedCommitment1',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Continuing professional development (CPD) – Carer 2'
  },
  {
    title: 'Describe how the foster carer has demonstrated their commitment to continuing professional development in line with their personal development plan',
    gridLength: 12,
    otherOptions: {
      name: 'fosterCarerDemonstratedCommitment2',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'SUMMARY AND RECOMMENDATION'
  },
  {
    title: 'Summary'
  },
  {
    title: 'Identify the strengths and limitations of the carer. Highlight any differences in views and list any outstanding or proposed future work. *',
    gridLength: 12,
    otherOptions: {
      name: 'IdentifyTheStrengthsAndLimitations',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Proposed change to approval terms'
  },
  {
    title: 'Are the carer’s current terms of approval appropriate?',
    gridLength: 12,
    otherOptions: {
      name: 'currentTermsOfApprovalAppropriate',
      options: ['Yes', 'No'],
    },
    component: RHFRadioGroup
  },
  {
    title: 'Recommendation'
  },
  {
    title: 'Make a clear recommendation regarding continued suitability to foster, including any recommendation regarding the appropriate terms of approval',
    gridLength: 12,
    otherOptions: {
      name: 'recommendationRegarding',
      fullWidth: true,
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: "Signature",
    gridLength: 6,
    otherOptions: {
      name: 'signature',
      fullWidth: true,
    },
    component: SignaturePad
  },
  {
    title: "Label",
    gridLength: 6,
    otherOptions: {
      name: 'label',
      fullWidth: true,
    },
    component: RHFDatePicker
  }
]