
import React from "react";
import Link from "next/link";
import { Button, Grid, Typography } from "@mui/material";
import { FormProvider } from "@root/components/hook-form";
import { LoadingButton } from "@mui/lab";
import { ChildDetails, ReferralSchemeForm } from ".";
import { useChildDetailsForm } from "./useChildDetailsForm";
import Image from "next/image";
import ChildDetailImg from '../../../assets/svg/childDetail.svg'
import carerDetail from "../../../assets/svg/carerDetail.svg"


//-----------Styles------------
const styles = {
    title: {
        fontSize: "14px", color: "#FFF", fontWeight: "700", marginBottom: "6px"
    },

    // personalInfo: {
    //   fontSize: "16px", color: "rgba(14, 145, 140, 1)", fontWeight: "600", marginBottom: "16px"
    // },
    // personalInfo: (theme: any) => ({
    //   fontSize: "16px",
    //   fontWeight: 600,
    //   marginBottom: "16px",
    //   color: theme.palette.primary.main,
    // }),
};


export default function ChildDetailsForm({ disabled, }: any) {
    const { methods, handleSubmit, onSubmit, lastValue } = useChildDetailsForm()
    // id: "2",
    //     childName: "John Doe",
    //     type: "Child",
    //     Identifier: "",
    //     localAuthority: "Redbridge",
    //     agencySocialWorker: "Not Assigned"

    // {
    //     // id: "3",
    //     dateOfBirth: "01/01/2010",
    //     age: "33",
    //     gender: "male",
    //     areaOffice: "hayes",
    //     lASocialWoker: "Not Assigned"
    // }

    return (
        <>
            {lastValue === "child-details" ?
                <Grid container spacing={1}
                    sx={{ backgroundColor: "var(--logo-green, #0E918C)", boxShadow: "2px 4px 7px 0px rgba(14, 145, 140, 0.20)", p: 1, mb: 4, mt: 2 }}
                >
                    <>
                        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
                            <Image src={ChildDetailImg} alt="" />
                        </Grid>
                        <Grid item xs={4.5}>
                            <Typography sx={styles.title}>Child Name (code) : John Doe</Typography>
                            <Typography sx={styles.title}>Type: Child</Typography>
                            <Typography sx={styles.title}>Identifier: </Typography>
                            <Typography sx={styles.title}>Local Authority: Redbridge</Typography>
                            <Typography sx={styles.title}>Agency Social Worker: Not Assigned</Typography>
                        </Grid>
                        <Grid item xs={3.5}>
                            <Typography sx={styles.title}>Date Of Birth : 01/01/2010</Typography>
                            <Typography sx={styles.title}>Age : 33</Typography>
                            <Typography sx={styles.title}>Gender : Male</Typography>
                            <Typography sx={styles.title}>Area Office : hayes</Typography>
                            <Typography sx={styles.title}>LA Social Woker : Not Assigned</Typography>
                        </Grid>
                    </>

                </Grid> :
                <Grid container spacing={1}
                    sx={{ backgroundColor: "var(--logo-green, #0E918C)", boxShadow: "2px 4px 7px 0px rgba(14, 145, 140, 0.20)", p: 1, mb: 4, mt: 2 }}
                >
                    <>
                        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
                            <Image src={carerDetail} alt="carerDetail" />
                        </Grid>
                        <Grid item xs={4.5}>
                            <Typography sx={styles.title}>Carer Name (code) : Gloria Bell</Typography>
                            <Typography sx={styles.title}>Status : Approved</Typography>
                            <Typography sx={styles.title}>Area Office :Hayes </Typography>
                            <Typography sx={styles.title}>Approved Vacancy : 1</Typography>
                            <Typography sx={styles.title}>Category of Approved : 00-03 Either Gender</Typography>
                            <Typography sx={styles.title}>Gender : Female</Typography>
                        </Grid>
                        <Grid item xs={3.5}>
                            <Typography sx={styles.title}>Agency Social Worker :Not Assigned</Typography>
                            <Typography sx={styles.title}>Approval Date : 06/09/2020</Typography>
                            <Typography sx={styles.title}>Area / Locality : Bexleyhealth</Typography>
                            <Typography sx={styles.title}>Available Vacancy : 11</Typography>
                            <Typography sx={styles.title}>Age Range :  10</Typography>
                            <Typography sx={styles.title}>Sibilings groups accepted ? : Yes</Typography>
                        </Grid>
                    </>

                </Grid>
            }
            <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <Grid container columnSpacing={4}>
                    {ReferralSchemeForm?.map((item: any) => (
                        <Grid item xs={12} md={item?.md} key={item?.id}>

                            <item.component
                                {...item.componentProps}
                                disabled={disabled}
                                size={"small"}
                            >
                                {item.componentProps.select ? item.options.map((option: any) => (
                                    <option key={option.value} value={option.value}>
                                        {option.label}
                                    </option>
                                ))
                                    :
                                    null}

                                {item?.heading}
                            </item.component>

                        </Grid>
                    ))}

                    <Grid item xs={12}>
                        {!disabled && (
                            <LoadingButton
                                type="submit"
                                variant="contained"
                                sx={{ mr: 2 }}
                            // loading={isSubmitting}
                            >
                                Submit
                            </LoadingButton>
                        )}
                        <Link
                            href={"/recommondations-result-tab"}
                            style={{ textDecoration: "none" }}
                        >
                            <Button type="button" variant="contained">
                                Back
                            </Button>
                        </Link>
                    </Grid>

                </Grid>
            </FormProvider>
        </>
    );
}

