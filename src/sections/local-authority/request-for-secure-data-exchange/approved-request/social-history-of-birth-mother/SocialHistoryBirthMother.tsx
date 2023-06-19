import FormTable from "@root/components/Table/FormTable";
import { FormProvider } from "@root/components/hook-form";
import dayjs from "dayjs";
import { useSocialHistoryBirthMother } from "./useSocialHistoryBirthMother";

const SocialHistoryBirthMother = () => {
  const { methods, handleSubmit, onSubmit, route } =
    useSocialHistoryBirthMother();

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <FormTable
        tableKey="exampleTable"
        route={route}
        columns={[
          {
            inputType: "datePicker",
            type: "date",
            key: "date",
            defaultValue: new Date(),
            label: "Date where known",
            validation: (Yup: any) => {
              return Yup.date()
                .typeError("End date is required")
                .required("End date is required");
            },
            format: (date: any) => {
              return dayjs(date).format("DD/MM/YYYY");
            },
          },
          {
            inputType: "textField",
            type: "name",
            key: "name",
            defaultValue: "Abc 123 Xyz",
            label:
              "Detail any Significant event from Birth - details of parent",
            validation: (Yup: any) => {},
          },
        ]}
      />
    </FormProvider>
  );
};

export default SocialHistoryBirthMother;
