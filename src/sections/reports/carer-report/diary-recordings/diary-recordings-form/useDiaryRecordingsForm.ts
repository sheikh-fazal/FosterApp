import { useForm } from "react-hook-form";
import { DiaryRecordingFormDefaultValues } from ".";

export const useDiaryRecordingsForm = () => {
  const methods: any = useForm({
    defaultValues: DiaryRecordingFormDefaultValues,
  });
  return {
    methods
  }
}