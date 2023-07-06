import { Box } from "@mui/material";

export const defaultValues = {
  exampleTable: [
    {
      name: "branded keywords",
      typeOfContent: (
        <Box
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            background: "#8eeb92",
            borderRadius: "18px",
            padding: "4px",
            paddingLeft: "15px",
            paddingRight: "15px",
            color: "#1D1D1D",
            whiteSpace: "nowrap",
          }}
        >
          Team Social Proposal
        </Box>
      ),
      requestor: "Shawn",
      requestedDate: "4/26/2021",
      goal: "Share a unique use of our video platform from an influencer.",
      proposedCopy: "When an app doesn't work, neither can ....",
      teamSocialNotes: "When an app doesn't work,",
    },
  ],
};
