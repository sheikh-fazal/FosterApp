
// @mui
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

const PanelPolicyIcon=()=> {
  const theme = useTheme();

  return (
    <svg
   width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
    
      <path d="M10 0H2C1.46957 0 0.960859 0.210714 0.585786 0.585786C0.210714 0.960859 0 1.46957 0 2V18C0 19.11 0.89 20 2 20H14C15.11 20 16 19.11 16 18V6L10 0ZM14 18H2V2H9V7H14V18ZM11.2 8.8C10.7 8.3 10.1 8 8.8 8H5V17H6.6V13.7H8.8C10.1 13.7 10.6 13.5 11.2 13C11.8 12.5 12 11.8 12 10.9C12 10 11.8 9.4 11.2 8.8ZM9.9 12C9.6 12.3 9.3 12.5 8.7 12.5H6.6V9.3H8.6C9.2 9.3 9.6 9.5 9.9 9.8C10.2 10.1 10.3 10.4 10.3 10.9C10.3 11.4 10.2 11.7 9.9 12Z" 
         fill={theme.palette.primary.main}
      />
      <defs>
        <filter
          id="filter0_i_55_34822"
          x="0"
          y="0"
          width="52"
          height="52"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feMorphology
            radius="1"
            operator="erode"
            in="SourceAlpha"
            result="effect1_innerShadow_55_34822"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="shape"
            result="effect1_innerShadow_55_34822"
          />
        </filter>
      </defs>
    </svg>
  );
}
export default PanelPolicyIcon
