// @mui
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

export default function RecruitmentAssessmentPolicy() {
  const theme = useTheme();

  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_i_55_34822)">
        <circle cx="26" cy="26" r="26" fill="white" />
      </g>
     
      <path d="M13.5 8C16 8 18 10 18 12.5C18 13.38 17.75 14.21 17.31 14.9L20.39 18L19 19.39L15.88 16.32C15.19 16.75 14.37 17 13.5 17C11 17 9 15 9 12.5C9 10 11 8 13.5 8ZM13.5 10C12.837 10 12.2011 10.2634 11.7322 10.7322C11.2634 11.2011 11 11.837 11 12.5C11 13.163 11.2634 13.7989 11.7322 14.2678C12.2011 14.7366 12.837 15 13.5 15C14.163 15 14.7989 14.7366 15.2678 14.2678C15.7366 13.7989 16 13.163 16 12.5C16 11.837 15.7366 11.2011 15.2678 10.7322C14.7989 10.2634 14.163 10 13.5 10ZM8 0C9.06087 0 10.0783 0.421427 10.8284 1.17157C11.5786 1.92172 12 2.93913 12 4C12 4.91 11.69 5.75 11.18 6.43C10.32 6.75 9.55 7.26 8.91 7.9L8 8C6.93913 8 5.92172 7.57857 5.17157 6.82843C4.42143 6.07828 4 5.06087 4 4C4 2.93913 4.42143 1.92172 5.17157 1.17157C5.92172 0.421427 6.93913 0 8 0V0ZM0 16V14C0 11.88 3.31 10.14 7.5 10C7.18 10.78 7 11.62 7 12.5C7 13.79 7.38 15 8 16H0Z" 
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
