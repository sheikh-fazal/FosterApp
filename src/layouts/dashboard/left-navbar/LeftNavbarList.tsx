import {
  Box,
  Collapse,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import List from "@mui/material/List";
import { NAV_LINKS } from "./LeftNavBarData";
import { useRouter } from "next/router";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import Link from "next/link";

const LeftNavbarList = (props: any) => {
  const router = useRouter();
  const theme: any = useTheme();
  const { open } = props;
  const { pathname } = router;
  const [expanded, setExpanded] = React.useState<string | undefined>(undefined);
  const expandedhander = (value: string) => {
    expanded ? setExpanded(undefined) : setExpanded(value);
  };
  return (
    <List
      sx={{
        mt: open ? 1 : 2,
        pb: { xs: "auto", sm: 4 },
        height: open ? "65vh" : "75vh",
        overflowY: "auto",
        overflowX: "hidden",
        "&::-webkit-scrollbar": {
          width: 4.5,
          height: 6,
        },
        "&::-webkit-scrollbar-thumb": {
          backgroundColor: theme.palette.primary.main,
          borderRadius: 2,
        },
      }}
    >
      {NAV_LINKS.map((text, index) => {
        return (
          <div key={index}>
            {Array.isArray(text.sublist) ? (
              open && (
                <Box sx={{ px: 1 }}>
                  <ListItemButton
                    onClick={() => expandedhander(`open${index}`)}
                    sx={{
                      color: theme.palette.grey[400],
                      px: 2.1,
                      py: 1,
                      borderRadius: "6px",
                    }}
                  >
                    <ListItemIcon>{text.img}</ListItemIcon>
                    <ListItemText
                      primary={text.text}
                      disableTypography
                      sx={{ fontSize: "14px" }}
                    />
                    {expanded === `open${index}` ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )}
                  </ListItemButton>
                  <Collapse
                    in={expanded === `open${index}` ? true : false}
                    timeout="auto"
                    unmountOnExit
                    sx={{ color: theme.palette.grey[400] }}
                  >
                    <List component="div" disablePadding>
                      {text.sublist?.map((item, index) => (
                        <div key={index}>
                          <Link
                            style={{
                              textDecoration: "none",
                              width: "100%",
                            }}
                            href={item.sublistlink}
                          >
                            <ListItemButton
                              sx={{
                                pl: 7,
                                py: 1,
                                borderRadius: "6px",
                                color: theme.palette.grey[400],
                                backgroundColor:
                                  pathname === item.sublistlink
                                    ? theme.palette.grey[900]
                                    : "",
                              }}
                            >
                              <ListItemText
                                disableTypography
                                sx={{ fontSize: "14px" }}
                                primary={item.list}
                              />
                            </ListItemButton>
                          </Link>
                        </div>
                      ))}
                    </List>
                  </Collapse>
                </Box>
              )
            ) : (
              <ListItem
                sx={{
                  padding: open ? "2px" : "5px",
                  px: 1,
                }}
              >
                <Link
                  style={{
                    textDecoration: "none",
                    width: "100%",
                  }}
                  href={text.link}
                >
                  <ListItemButton
                    sx={{
                      padding: "6px 22px",
                      justifyContent: open ? "initial" : "center",
                      px: 2.1,
                      py: 1,
                      borderRadius: "6px",
                      backgroundColor:
                        pathname === text.link ? theme.palette.grey[900] : "",
                    }}
                  >
                    <ListItemIcon
                      sx={{
                        minWidth: 0,
                        mr: open ? 2 : "auto",
                        justifyContent: "center",
                        color: theme.palette.grey[400],
                      }}
                    >
                      {text.img}
                    </ListItemIcon>
                    <ListItemText
                      disableTypography
                      primary={text.text}
                      sx={{
                        opacity: open ? 1 : 0,
                        color: theme.palette.grey[400],
                        fontSize: "14px",
                      }}
                    />
                  </ListItemButton>
                </Link>
              </ListItem>
            )}
          </div>
        );
      })}
    </List>
  );
};

export default LeftNavbarList;
