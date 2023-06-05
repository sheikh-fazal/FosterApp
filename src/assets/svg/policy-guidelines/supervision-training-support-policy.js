
// @mui
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

const SupervisionTrainingSupportPolicyIcon=()=> {
  const theme = useTheme();

  return (
    <svg
   width="16" height="19" viewBox="0 0 16 19" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M8 13C3.58 13 0 14.79 0 17V19H16V17C16 14.79 12.42 13 8 13ZM4 7C4 8.06087 4.42143 9.07828 5.17157 9.82843C5.92172 10.5786 6.93913 11 8 11C9.06087 11 10.0783 10.5786 10.8284 9.82843C11.5786 9.07828 12 8.06087 12 7H4ZM7.5 0C7.2 0 7 0.21 7 0.5V3.5H6V1C6 1 3.75 1.86 3.75 4.75C3.75 4.75 3 4.89 3 6H13C12.95 4.89 12.25 4.75 12.25 4.75C12.25 1.86 10 1 10 1V3.5H9V0.5C9 0.21 8.81 0 8.5 0H7.5Z" 
       fill={theme.palette.primary.main}/>
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
export default SupervisionTrainingSupportPolicyIcon
