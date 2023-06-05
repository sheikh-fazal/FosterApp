
// @mui
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

const RecordingKeepingPolicyIcon=()=> {
  const theme = useTheme();

  return (
    <svg
    width="21" height="24" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
     
      <path d="M10.0625 0C4.52813 0 0 5.31563 0 11.8125C0 18.3094 4.52813 23.625 10.0625 23.625C15.5969 23.625 20.125 18.3094 20.125 11.8125C20.125 5.31563 15.5969 0 10.0625 0ZM10.0625 16.875C7.69063 16.875 5.75 14.5969 5.75 11.8125C5.75 9.02812 7.69063 6.75 10.0625 6.75C12.4344 6.75 14.375 9.02812 14.375 11.8125C14.375 14.5969 12.4344 16.875 10.0625 16.875Z" fill={theme.palette.primary.main}/>
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
export default RecordingKeepingPolicyIcon
