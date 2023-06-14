import { useForm } from "react-hook-form";
import { DaylogEventsFormDefaultValues } from ".";

export const useDaylogEventsForm = () => {
  const methods: any = useForm({
    defaultValues: DaylogEventsFormDefaultValues,
  });
  return {
    methods
  }
}