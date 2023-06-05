
// @mui
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

const BehaviourManagementPolicyIcon=()=> {
  const theme = useTheme();

  return (
    <svg
   width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
     
      <path d="M11.95 0L11.29 0.03L15.1 3.84L16.45 2.5C19.7 4.07 22.04 7.24 22.4 11H23.9C23.39 4.84 18.24 0 11.95 0ZM11.95 4C10.02 4 8.45 5.57 8.45 7.5C8.45 9.43 10.02 11 11.95 11C13.88 11 15.45 9.43 15.45 7.5C15.45 5.57 13.88 4 11.95 4ZM0 13C0.51 19.16 5.66 24 11.95 24L12.61 23.97L8.8 20.16L7.45 21.5C4.2 19.94 1.86 16.76 1.5 13H0ZM11.95 13C8.08 13 4.95 14.57 4.95 16.5V18H18.95V16.5C18.95 14.57 15.82 13 11.95 13Z" 
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
export default BehaviourManagementPolicyIcon
