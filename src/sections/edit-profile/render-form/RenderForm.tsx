import { FC, Suspense } from "react";
import FormSkeleton from "./FormSkeleton";
import { RForm } from "./Forms";

const RenderForm: FC<{ name: string; activateNextForm: () => void }> = ({
  name,
  activateNextForm,
}) => {
  return (
    <>
      <Suspense fallback={<FormSkeleton />}>
        <RForm name={name} activateNextForm={activateNextForm} />
      </Suspense>
    </>
  );
};

export default RenderForm;
