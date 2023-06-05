
// @mui
import { useTheme } from "@mui/material/styles";

// ----------------------------------------------------------------------

const AllegationsPolicyIcon=()=> {
  const theme = useTheme();

  return (
    <svg
   width="22" height="18" viewBox="0 0 22 18" fill="none" xmlns="http://www.w3.org/2000/svg"
    >
     
     
      <path d="M12 4.5C12 5.69347 11.5786 6.83807 10.8284 7.68198C10.0783 8.52589 9.06087 9 8 9C6.93913 9 5.92172 8.52589 5.17157 7.68198C4.42143 6.83807 4 5.69347 4 4.5C4 3.30653 4.42143 2.16193 5.17157 1.31802C5.92172 0.474106 6.93913 0 8 0C9.06087 0 10.0783 0.474106 10.8284 1.31802C11.5786 2.16193 12 3.30653 12 4.5ZM16 15.75V18H0V15.75C0 13.2638 3.58 11.25 8 11.25C12.42 11.25 16 13.2638 16 15.75ZM19.5 11.8125V13.5H18V11.8125H19.5ZM17.5 6.1875H16V5.625C16 4.72989 16.3161 3.87145 16.8787 3.23851C17.4413 2.60558 18.2044 2.25 19 2.25C19.7956 2.25 20.5587 2.60558 21.1213 3.23851C21.6839 3.87145 22 4.72989 22 5.625C22 6.71625 21.5 7.74 20.71 8.33625L20.41 8.55C19.84 9 19.5 9.68625 19.5 10.4625V10.6875H18V10.4625C18 9.12375 18.6 7.875 19.59 7.14375L19.88 6.93C20.27 6.6375 20.5 6.15375 20.5 5.625C20.5 5.17745 20.342 4.74822 20.0607 4.43176C19.7794 4.11529 19.3978 3.9375 19 3.9375C18.6022 3.9375 18.2206 4.11529 17.9393 4.43176C17.658 4.74822 17.5 5.17745 17.5 5.625V6.1875Z" 
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
export default AllegationsPolicyIcon
