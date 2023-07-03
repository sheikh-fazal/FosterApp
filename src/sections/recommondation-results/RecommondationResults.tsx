import { Box, Button, Card, Checkbox, CircularProgress, FormControlLabel, Grid, Typography } from '@mui/material'
import Image from 'next/image';
import { useRecommondationResults } from './useRecommondationResults';

const RecommondationResults = () => {
    const { selectedCard, setSelectedCard, filteredDetailData, setFilteredDetailData, handleChangeType, recommondationResultsData, router } = useRecommondationResults()
    return (
        <>
            <Card sx={{ p: 5 }}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {recommondationResultsData.map((item: any) => {
                            return (
                                <Grid item xs={2} sm={3} md={3} sx={{ borderRadius: "5px 5px 0px 0px", }} >
                                    <Card key={item.id} sx={{
                                        p: 2,
                                        mb: 2,
                                        cursor: "pointer",
                                        backgroundColor: item?.type === selectedCard ? 'rgba(196, 196, 196, 0.50)' : 'initial',
                                    }} onClick={() => handleChangeType(item?.type)} >
                                        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                                            <Box sx={styles.progressContainer}>
                                                <CircularProgress
                                                    variant="determinate"
                                                    value={item?.progress}
                                                    sx={{
                                                        ...styles.progress,
                                                        color: item?.progressColor
                                                    }}
                                                />
                                                <Typography
                                                    sx={styles.progressLabel}
                                                    variant="body2"
                                                >
                                                    {`${item?.progress}%`}
                                                </Typography>
                                            </Box>
                                            <Box>
                                                <Typography sx={{ color: "#343A40", fontSize: "16px", fontWeight: "600" }}>
                                                    {item?.title}
                                                </Typography>
                                                <Typography sx={{ color: item?.progressColor, fontSize: "16px", fontWeight: "600" }}>
                                                    {item?.subTitle}
                                                </Typography>

                                            </Box>

                                        </Box>

                                    </Card>
                                </Grid>
                            )
                        })}

                    </Grid>
                </Box>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                    {filteredDetailData.map((item: any) => {
                        return (
                            <Grid item xs={6} >
                                <Card sx={{ p: 3, }}>
                                    <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
                                        <Box>
                                            <Typography sx={{ fontSize: "16px", color: "rgba(14, 145, 140, 1)", fontWeight: "600", mb: 1 }} >
                                                {item?.name}
                                            </Typography>
                                            <Typography sx={{ fontSize: "16px", color: "rgba(14, 145, 140, 1)", fontWeight: "600", mb: 1 }} >
                                                {item?.age}
                                            </Typography>
                                            <Typography sx={{ fontSize: "16px", color: "rgba(14, 145, 140, 1)", fontWeight: "600", mb: 1 }}>
                                                {item?.cast}
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}>
                                            <Image src={item?.image} alt={''} />
                                            <Box sx={styles.progressContainer}>
                                                <CircularProgress
                                                    variant="determinate"
                                                    value={item?.progress}
                                                    sx={{
                                                        ...styles.progressDetail,
                                                        color: item?.progressColor
                                                    }}
                                                />
                                                <Typography
                                                    sx={styles.progressLabel}
                                                    variant="body2"
                                                >
                                                    {`${item?.progress}%`}
                                                </Typography>
                                            </Box>
                                            <Box sx={{ color: item?.progressColor }}>
                                                {item?.icon}
                                            </Box>
                                        </Box>
                                    </Box>




                                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>


                                        {item.recommondationResultsCheckbox.map((option: any) => (
                                            <Grid item xs={6} >
                                                <FormControlLabel
                                                    key={option.id}
                                                    control={
                                                        <Checkbox
                                                            checked={option.value}
                                                            color="primary"
                                                        />
                                                    }
                                                    label={option.label}
                                                />
                                            </Grid>
                                        ))}
                                        <Grid item xs={12} sx={{ display: "flex", justifyContent: "center" }}>
                                            <Box>
                                                <Button sx={{ p: 1, backgroundColor: "var(--logo-green, #0E918C)", color: "#fff", mr: 1, cursor: "pointer" }}>View Child Details</Button>
                                                <Button sx={{ p: 1, backgroundColor: "var(--logo-green, #0E918C)", color: "#fff", cursor: "pointer" }} onClick={() => router.push(`${router.pathname}/compare-match`)}>Compare Match</Button>
                                            </Box>
                                        </Grid>

                                    </Grid>
                                </Card>

                            </Grid>
                        )
                    })}

                </Grid>
            </Card >


        </>
    )
}

export default RecommondationResults


//-----------Styles------------
const styles = {
    progress: {
        minHeight: '70px !important',
        minWidth: '70px !important'
    },
    progressDetail: {
        minHeight: '120px !important',
        minWidth: '120px !important'
    },
    progressContainer: {
        position: 'relative',
        display: 'inline-block'
    },
    progressLabel: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        color: 'black',
        fontWeight: 'bold'
    }
};
