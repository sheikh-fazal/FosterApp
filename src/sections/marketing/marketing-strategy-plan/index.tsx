import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import { Box } from '@mui/material';

export const defaultValues = {
  exampleTable: [
    {
      strategyType: [
        {
          label: "Market Penetration Strategy",
          value: "Market Penetration Strategy",
          bgColor: "#73D4F2",
          textColor: "#1D1D1D",
        },
        
      ],
      marketingPlan: (<Box sx={{display:"flex",alignItems:"center",gap:"8px"}}><PictureAsPdfIcon sx={{color:"red",fontSize:"30px",}} /><span>ABC.PDF</span></Box>),
      author: "James Watt (Marketing Manager)",
      approvedByRole: "Draco Malfoy ( Director )",
      approvalDate: new Date(),
      
      
      image:
        "users/4f7512fb-2916-451b-8240-97f529ded73d/badge/72fd0112-f976-4910-b7a3-e3c8013f4204.jpg",
    },
   
  ],
};