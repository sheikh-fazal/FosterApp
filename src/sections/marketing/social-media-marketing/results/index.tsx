import { Box } from "@mui/material";

export const defaultValues = {
  exampleTable: [
    {
      postTopic: "branded keywords",
      publishDate: "6/1/2023 :: 02:12:12 PM",
      typeOfPost: (
        <Box
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            background: "#8cffa5",
            borderRadius: "18px",
            padding: "4px",
            paddingLeft: "15px",
            paddingRight: "15px",
            color: "#1D1D1D",
            whiteSpace: "nowrap",
          }}
        >
          Evergreen Content
        </Box>
      ),
      impressions: "12430",
      engagements: "315",
      engagementsRate: "2.53%",
      costPerEngagement: "$0.21",
      spend: "$8,250.00",
    },
  ],
};
