
// @mui
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

const StandardsCarePolicyIcon=()=> {
  const theme = useTheme();

  return (
    <svg
   width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
     
      <path d="M9 5C9 6.66 7.66 8 6 8C4.34 8 3 6.66 3 5C3 3.34 4.34 2 6 2C7.66 2 9 3.34 9 5ZM12 16H0V14C0 11.79 2.69 10 6 10C9.31 10 12 11.79 12 14V16ZM20 8V10H11V8H20ZM20 4V6H11V4H20ZM20 0V2H11V0H20Z" 
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
export default StandardsCarePolicyIcon
