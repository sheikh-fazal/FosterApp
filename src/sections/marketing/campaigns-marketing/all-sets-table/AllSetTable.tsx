import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import { Box, Card, Chip } from "@mui/material";
import { useAllSetTable } from "./useAllSetTable";
import { fData } from "@root/utils/formatNumber";
import MyAvatar from "@root/components/MyAvatar";


const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];
// Constants
const PlatformOptions = [
 
  {
    label: "Facebook",
    value: "Facebook",

    bgColor: "#9AC3F4",
    textColor: "#1D1D1D",
  },
  {
    label: "Instagram",
    value: "Instagram",

    bgColor: "#E2C68F",
    textColor: "#1D1D1D",
  },
  {
    label: "Twitter",
    value: "Twitter",

    bgColor: "#BC93EF",
    textColor: "#1D1D1D",
  },
];
const CampaignsOptions = [
 
  {
    label: "Family-safety-security",
    value: "Family-safety-security",

    bgColor: "#93C3EF",
    textColor: "#1D1D1D",
  },
  {
    label: "Home-safety",
    value: "Home-safety",

    bgColor: "#93C3EF",
    textColor: "#1D1D1D",
  },
  {
    label: "Reinforce-security",
    value: "Reinforce-security",

    bgColor: "#93C3EF",
    textColor: "#1D1D1D",
  },
  {
    label: "Peace-of-mind",
    value: "Peace-of-mind",

    bgColor: "#93C3EF",
    textColor: "#1D1D1D",
  },
];


const AllSetTable = () => {
  const { methods, handleSubmit, tableData, onSubmit, onClear, route,uploadImage } =
  useAllSetTable();

function DataChips({ options }: any) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "unwrap",
        gap: 1,
      }}
    >
      {options
        .slice(0, 3)
        .map(
          ({
            value,
            label,
            bgColor = "#e4e7eb",
            textColor = "#212b36",
          }: any) => (
            <Chip
              sx={{
                backgroundColor: bgColor,
                color: textColor,
                fontSize: "10px !important",
                p: "5px 10px",
                maxHeight: "22px",

                "& .MuiChip-label": {
                  p: 0,
                },
              }}
              key={value}
              label={label}
            />
          )
        )}
    </Box>
  );
}

  return (
    <Card sx={{ padding: "10px" }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <FormTable
          tableKey="exampleTable"
          beforeAdd={(methods: any) => uploadImage("image", methods)}
          beforeUpdate={(methods: any) => uploadImage("image", methods)}
          columns={[
            {
              inputType: "file",
              type: "file",
              key: "image",
              label: "Creative",
              size: { xs: 12, md: 12 },
              // Use this validation for images
              validation: (Yup: any) => {
                return Yup.mixed()
                  .test("required", "Image is required", (value: any) => {
                    if (!value) return false;
                    if (typeof value === "string") return !!value;
                    return value.type;
                  })
                  .test("fileFormat", "Unsupported Format", (value: any) => {
                    if (!value) return false;
                    if (typeof value === "string") return !!value;
                    return value && FILE_FORMATS.includes(value.type);
                  })
                  .test(
                    "fileSize",
                    `File must be less than or equal to ${fData(MAX_FILE_SIZE)}`,
                    (value: any) => {
                      if (!value) return false;
                      if (typeof value === "string") return !!value;
                      return value && value.size <= MAX_FILE_SIZE;
                    }
                  );
              },
              format: (imgUrl: any) => {
                if (!!imgUrl)
                  return (
                    <MyAvatar
                      src={String(`${process.env.NEXT_PUBLIC_IMG_URL}${imgUrl}`)}
                      sx={{
                        mx: "auto",
                      }}
                    />
                  );
          
                return "-";
              },
            },

            {
              inputType: "textField",
              type: "text",
              key: "adSet",
              defaultValue: "John",
              label: "Ad Set",
              validation: (Yup: any) => {
                return Yup.string().required("Name is required").min(3);
              },
            },
            

            {
              inputType: "textField",
              type: "text",
              key: "copy",
              defaultValue: "There's an easier way to keep your home and family safe. ",
              label: "Copy",
              validation: (Yup: any) => {
                return Yup.string().required("Name is required").min(3);
              },
            },


            {
              inputType: "multi-select",
              type: "select",
              key: "platform",
              defaultValue: [],
              label: "Platform",
              options: PlatformOptions,
              validation: (Yup: any) => {
                return Yup.array()
                  .of(
                    Yup.object().shape({
                      label: Yup.string(),
                      value: Yup.string(),
                      bgColor: Yup.string(),
                      textColor: Yup.string(),
                    })
                  )
                  .test(
                    "required",
                    "Platform is required.",
                    (arr: any) => arr.length > 0
                  );
              },
              format: (selectedValues = []) => {
                return <DataChips options={selectedValues} />;
              },
            },
           
            
          

            {
              inputType: "multi-select",
              type: "select",
              key: "campaigns",
              defaultValue: [],
              label: "Campaigns",
              options: CampaignsOptions,
              validation: (Yup: any) => {
                return Yup.array()
                  .of(
                    Yup.object().shape({
                      label: Yup.string(),
                      value: Yup.string(),
                      bgColor: Yup.string(),
                      textColor: Yup.string(),
                    })
                  )
                  .test(
                    "required",
                    "Platform is required.",
                    (arr: any) => arr.length > 0
                  );
              },
              format: (selectedValues = []) => {
                return <DataChips options={selectedValues} />;
              },
            },
          ]}
          
          
        />
      </FormProvider>
    </Card>

  );
};

export default AllSetTable;