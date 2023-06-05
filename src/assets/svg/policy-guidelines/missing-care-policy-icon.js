// @mui
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

const MissingCarePolicyIcon = () => {
  const theme = useTheme();

  return (
    <svg
      width="22"
      height="26"
      viewBox="0 0 22 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
    <path d="M13.002 14L7.002 20M1 3H15.502L19.002 6.5V25H1.002L1 3ZM14.002 3V8H19.002L14.002 3ZM7.002 14L13.002 20L7.002 14Z" 
     stroke={theme.palette.primary.main} stroke-width="2"/>
    
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
};
export default MissingCarePolicyIcon;
