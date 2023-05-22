export const nameShortner = (name: string) => {
  if (name.length <= 10) return name;
  return (
    name.slice(0, 4) + ".." + name.slice(name.lastIndexOf("."), name.length)
  );
};

export const displaySuccessMessage = (data: any, notifier: any) => {
  const successMesg = data?.data.message;
  notifier(successMesg ? successMesg : "Operation Completed Successfully", {
    variant: "success",
  });
};

export const displayErrorMessage = (error: any, notifier: any) => {
  const errMsg = error?.data?.message;
  notifier(errMsg ? errMsg : "Something went wrong", {
    variant: "error",
  });
};
