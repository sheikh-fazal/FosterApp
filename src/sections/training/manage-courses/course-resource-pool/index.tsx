import fosterCarerResourceImg from "../../../../assets/svg/training/fosterCarerResource.svg";
import socialWorkerResourceImg from "../../../../assets/svg/training/socialWorkersResource.svg";
import employeeResourceImg from "../../../../assets/svg/training/employeeResource.svg";
import fosterChildResourceImg from "../../../../assets/svg/training/fosterChildResources.svg";
import demoImage from "../../../../assets/svg/training/courseList.svg";

export const courseResourceData = [
  {
  image : fosterCarerResourceImg,
  categoryDescription : "Foster Carer Resources",
  backgroundColor:"#F63D31",
  link:"/training/manage-courses/course-resource-pool/foster-carer-resources"
},
  {
  image : socialWorkerResourceImg,
  categoryDescription : "Social Workers Resources",
  backgroundColor:"#20BE60",
  link:"/training/manage-courses/course-resource-pool/social-workers-resources"
},
  {
  image : employeeResourceImg,
  categoryDescription : "Empolyee Resources",
  backgroundColor:"#0E918C",
  link:"/training/manage-courses/course-resource-pool/employee-resources"
},
  {
  image : fosterChildResourceImg,
  categoryDescription : "Foster Child Resources",
  backgroundColor:"#10B0C6",
  link:"/training/manage-courses/course-resource-pool/foster-child-resources"
},
]

export const courseList = [
  { 
    desc: " 2 Day Verbal and Physical De-Escalation Fostering Face to Face Course",
    isStatus: true,
    coverImage:demoImage
  },
  {
    desc: " Child Protection and Safeguarding Fostering Face to Face Course",
    isMandatory: true,
    coverImage:demoImage
  },
  {
    desc: " Child Sexual Exploitation Advanced Level Fostering Face to Face Course",
    isMandatory: true,
    isStatus: true,
    coverImage:demoImage
  },
  {
    desc: "Child Sexual Exploitation Fostering Face to Face Course",
    coverImage:demoImage
  },
  {
    desc: "Fire Safety Fostering Face to Face Course",
    coverImage:demoImage
  },
  {
    desc: "First Aid Refresher Fostering Face to Face Course",
    coverImage:demoImage
  },
];