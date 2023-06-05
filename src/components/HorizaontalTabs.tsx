import {
  useState,
  Children,
  SyntheticEvent,
  ReactNode,
  useImperativeHandle,
  forwardRef,
} from "react";
import { Tabs, Tab, Typography, useTheme, Box, Card } from "@mui/material";

// ----------------------------------------------------------------------

// ----------------------------------------------------------------------

const HorizaontalTabs = ({
  tabsDataArray = [],
  children,
  setActiveTab = () => {},
  variant,
  spacing,
  defaultValue=0,
}: any) => {
  const [value, setValue] = useState(defaultValue);
  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const arrayChildren = Children.toArray(children);

  const theme: any = useTheme();

  return (
    <Card sx={{ px: spacing ?? 2 }}>
      <Tabs
        selectionFollowsFocus
        orientation="horizontal"
        variant={variant ? variant : "scrollable"}
        sx={styles.tabRoot(theme)}
        TabIndicatorProps={styles.tabIndicator(theme)}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
      >
        {tabsDataArray?.map((title: string) => (
          <Tab
            wrapped
            key={title}
            onClick={() => {
              setActiveTab ? setActiveTab(title) : console.log(title);
            }}
            label={
              <Typography
                variant="subtitle2"
                component="span"
                color={theme.palette.grey[600]}
              >
                {title}
              </Typography>
            }
          />
        ))}
      </Tabs>
      <Box sx={{ py: 2 }}>
        {arrayChildren?.map((child, index) => (
          <Box key={index}>{value === index && child}</Box>
        ))}
      </Box>
    </Card>
  );
};

export default forwardRef(HorizaontalTabs);

// ----------------------------------------------------------------------
// Styles
const styles = {
  tabRoot: (theme: any) => ({
    borderBottom: 1,
    borderColor: theme.palette.primary.lighter,
  }),

  tabIndicator: (theme: any) => ({
    sx: { background: theme.palette.primary.main },
  }),
};
