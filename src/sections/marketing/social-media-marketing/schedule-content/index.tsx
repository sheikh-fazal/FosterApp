import { Box } from "@mui/material";
const statusNAme = "Abc";
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
            Twitter
          </Box>
          <Box
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              background: "#bc6ee0",
              borderRadius: "18px",
              padding: "4px",
              paddingLeft: "15px",
              paddingRight: "15px",
              color: "#1D1D1D",
            }}
          >
            Facebook
          </Box>
          <Box
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              background: "#6bd5ed",
              borderRadius: "18px",
              padding: "4px",
              paddingLeft: "15px",
              paddingRight: "15px",
              color: "#1D1D1D",
            }}
          >
            Instagram
          </Box>
          <Box
            sx={{
              fontSize: "14px",
              fontWeight: "400",
              background: "#e0c06e",
              borderRadius: "18px",
              padding: "4px",
              paddingLeft: "15px",
              paddingRight: "15px",
              color: "#1D1D1D",
            }}
          >
            TikTok
          </Box>
        </Box>
      ),
      copy: "Drive traffic to site, CPC >$2.25",
    },
  ],
};
