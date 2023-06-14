import { Box, Button, Card, Grid, IconButton, Typography } from '@mui/material'
import React from 'react'
import { FormProvider } from '@root/components/hook-form'
import { useSupervisingSocialWorkerReport } from './useSupervisingSocialWorkerReport';
import { FRAFormData } from '.';
import AddIcon from '@mui/icons-material/Add';
import AddFormFieldModal from './AddFormFieldModal';
import { LoadingButton } from '@mui/lab';

const SupervisingSocialWorkerReport = ({ action, id }: any) => {
  const disabled = action === 'view' ? true : false;
  const { methods, onSubmit, handleSubmit,
    handleBack, handleAddNew, handleAddModal,
    modalData, schema, handleAddNewColumn } = useSupervisingSocialWorkerReport();

  return (
    <>
      <Card sx={{ p: 2 }}>
        <FormProvider
          methods={methods} onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={0.5}>
            {FRAFormData.map((data, index) => (
              <Grid key={index} item md={data.gridLength} xs={12} display={'flex'} flexDirection={'column'} gap={'5px'}>
                {(!disabled && data.addNew) ?
                  <Box display={'flex'} justifyContent={'space-between'}>
                    <Typography sx={styles.title}>{data.title}</Typography>
                    <IconButton size='small' onClick={() => data.isColumn ? handleAddNewColumn(data) : handleAddNew(data)}
                      sx={styles.btnStyle}
                    >
                      <AddIcon sx={{ color: '#fff' }} />
                    </IconButton>
                  </Box> :
                  <Typography sx={styles.title}>{data.title}</Typography>
                }
                {data.formFields && <Grid container spacing={0.5}>
                  {data.formFields.map((field: any, i) => (
                    <Grid item key={i} lg={field.gridLength} xs={12} display={'flex'} flexDirection={'column'} gap={'5px'} margin={'10px 0px'} marginTop={field.marginTop}>

                      {field.subTitle ?
                        <Typography sx={{ color: "#10131C", fontWeight: 600, fontSize: "16px" }}>{field.subTitle}</Typography> :
                        <CustomBox title={field.title} hideTitle={field?.hideTitle} />
                      }
                      {field.subFields && field.subFields.map((item: any, j: number) => (
                        <>
                          {item.component && <item.component key={j}
                            size={'small'}
                            disabled={disabled}
                            {...item.otherOptions}
                            sx={{
                              height: item.otherOptions.height ? item.otherOptions.height : "42px",
                              '& .MuiOutlinedInput-input': { height: '100%' },
                              '& .MuiOutlinedInput-root': { height: '100%' },
                            }}
                          >
                            {item.otherOptions.select
                              ? item.otherOptions.options.map((option: any) => (
                                <option key={option.value} value={option.value}>
                                  {option.label}
                                </option>
                              ))
                              : null}
                          </item.component>}
                          {item.head && <Typography sx={{ ...styles.head, height: item.info ? '84px' : '42px', }}>
                            {item.head}
                            {item.info && <Typography sx={styles.info}>{item.info}</Typography>}
                          </Typography>}
                        </>
                      ))}
                    </Grid>
                  ))}
                </Grid>}
                <Box>
                  {data.head && <Typography fontWeight={600} fontSize={'18px'} margin={'10px 0px'}>{data.head}</Typography>}
                  {data.notice && <Typography sx={styles.notice}><span>Notice:</span> {data.notice}</Typography>}
                  {data.subText && <Typography sx={styles.subText}>{data.subText}</Typography>}
                  {data.points && <ul style={{ margin: "15px", listStyle: 'circle' }}>
                    {data.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>}
                  {data.subTitle && <Typography sx={styles.title}>{data.subTitle}</Typography>}
                  {data.component &&
                    <data.component size={'small'} sx={{ mb: 2 }}
                      disabled={disabled}
                      {...data.otherOptions}>
                      {data.otherOptions.select
                        ? data.otherOptions.options.map((option: any) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))
                        : null}
                    </data.component>
                  }
                </Box>
              </Grid>
            ))}
          </Grid>
          <Grid item xs={12} display={'flex'} gap={'10px'} sx={{ mt: 2 }}>
            {!disabled && <LoadingButton type='submit' variant="contained">Submit</LoadingButton>}
            <Button
              sx={styles.btnStyle}
              type="button"
              variant="contained"
              onClick={handleBack}
            >Back</Button>
          </Grid>
        </FormProvider>
      </Card>

      {modalData.open && <AddFormFieldModal
        open={modalData.open}
        schema={schema}
        onClose={handleAddModal}
        data={modalData.data}
      />}
    </>
  )
}

export default SupervisingSocialWorkerReport;

const CustomBox = ({ title, hideTitle }: any) => <Box
  sx={{
    border: hideTitle ? '' : '1px solid #898989',
    borderRadius: '8px',
    textAlign: 'center',
    p: '8px',
    fontWeight: 600,
    fontSize: '16px',
    color: '#10131C',
    height: '42px'
  }}>
  {title}
</Box>

const styles = {
  title: {
    fontWeight: 600,
    fontSize: '16px',
    color: '#0E918C',
    mt: 1
  },
  notice: {
    '& > span': {
      fontWeight: 600,
      color: "#10131C"
    },
    color: '#CACACA',
  },
  head: {
    color: "#10131C",
    fontWeight: 600,
    fontSize: '16px',
    height: 42,
    border: '1px solid #898989',
    borderRadius: '8px',
    padding: '8px 27px',
  },
  info: {
    color: '#C82333',
    fontWeight: 600,
    fontSize: '14px'
  },
  subText: {
    color: '#C82333',
    fontWeight: 600,
    fontSize: '16px',
    mb: 1
  },
  btnStyle: {
    backgroundColor: "#F6830F", "&:hover": { backgroundColor: "#F6830F", },
  }
}