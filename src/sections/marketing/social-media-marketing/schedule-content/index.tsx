import { Box } from "@mui/material";

const cannelData = [
  {
    id: 1,
    value: "Twitter",
    background: "#bea2fa",
  },
  {
    id: 2,
    value: "Facebook",
    background: "#bc6ee0",
  },
  {
    id: 3,
    value: "Instagram",
    background: "#6bd5ed",
  },
  {
    id: 4,
    value: "TikTok",
    background: "#e0c06e",
  },
];

export const defaultValues = {
  exampleTable: [
    {
      postTopic: "branded keywords",
      dnt: "6/1/2023 :: 02:12:12 PM",
      status: (
        <Box
          sx={{
            fontSize: "14px",
            fontWeight: "400",
            background: "#bea2fa",
            borderRadius: "18px",
            padding: "4px",
            paddingLeft: "15px",
            paddingRight: "15px",
            color: "#1D1D1D",
          }}
        >
          InProgress
        </Box>
      ),
      channels: (
        <Box sx={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
          {cannelData.map((item: any) => {
            return (
              <Box
                key={item.id}
                sx={{
                  fontSize: "14px",
                  fontWeight: "400",
                  background: item.background,
                  borderRadius: "18px",
                  padding: "4px",
                  paddingLeft: "15px",
                  paddingRight: "15px",
                  color: "#1D1D1D",
                }}
              >
                {item.value}
              </Box>
            );
          })}
        </Box>
      ),
      copy: "Drive traffic to site, CPC >$2.25",
      socialMediaOwner: "Faisal",
    },
  ],
};
