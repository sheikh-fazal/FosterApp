import { useForm } from "react-hook-form";
import { RecordCriiticalIncidentDefaultValues } from ".";

export const useRecordCriticalIncidentsForm = () => {
  const methods: any = useForm({
    defaultValues: RecordCriiticalIncidentDefaultValues,
  });
  return {
    methods,
  };
};
