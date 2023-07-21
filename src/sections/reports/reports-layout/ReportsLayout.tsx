import React, { ReactNode } from 'react';
import { Box, Button, Card, Grid, MenuItem, Typography } from '@mui/material';
import Image from 'next/image';
import automatedIcon from '../../../assets/svg/reports/automatedIcon.svg';
import TableHeader from '@root/components/TableHeader';
import TableSubHeader from '../table-sub-header/TableSubHeader';
import CustomTable from '@root/components/Table/CustomTable';
import DeleteModel from '@root/components/modal/DeleteModel';
interface Props {
  title?: string;
  icon?: ReactNode | string | any;
  selectFilterArray?: Array<Object>;
  // selectFilterProps?: Object;
  tableHeaderProps?: Object;
  TableSubHeaderData?: Array<Object>;
  tableProps?: any;
  handleFilterBtn?: () => void;
  deleteModalProps?: any;
  searchOnRight?: boolean;
  handleFilterChange?: any;
  hideFilterSection?: boolean;
}

const ReportsLayout = ({
  title = '',
  icon = automatedIcon,
  selectFilterArray = [],
  tableHeaderProps = {},
  TableSubHeaderData = [],
  tableProps = { data: [], columns: [], isSuccess: true },
  handleFilterBtn = () => { },
  deleteModalProps = {},
  searchOnRight = false,
  handleFilterChange,
  hideFilterSection = false,
}: Props) => {

  return (
    <>
      <Card sx={{ py: 2, px: 1 }}>
        {!hideFilterSection &&
          <>
            <Box display={'flex'} alignItems={'center'} justifyContent={title ? 'space-between' : 'end'} flexWrap={'wrap'} gap={2}
              sx={{ px: 2 }}
            >
              {title && <Typography sx={styles.title}>{title}</Typography>}
              {icon && <Image src={icon} alt='icon' />}
            </Box>
            <Card sx={{ p: 2, my: 2 }}>
              <Grid container spacing={2}>
                {selectFilterArray.map((data: any, i: number) => (
                  <Grid item key={i} md={data.gridlength} xs={12}>
                    <data.component
                      {...data.otherOptions}
                      slotProps={{ textField: { ...data.otherOptions, onChange: handleFilterChange } }}
                      onChange={handleFilterChange}
                    >
                      {data.options ?
                        data.options.map((option: any, i: number) =>
                          <MenuItem
                            key={i}
                            value={option.value}
                          >
                            {option.label}
                          </MenuItem>)
                        : null}
                    </data.component>
                  </Grid>
                )
                )}
                <Grid item xs={12} display={'flex'} justifyContent={'flex-end'}>
                  <Button onClick={handleFilterBtn} variant='contained'>Search</Button>
                </Grid>
              </Grid>
            </Card>
          </>
        }
        <Box sx={searchOnRight ? styles.searchOnRight : {}}>
          <TableHeader {...tableHeaderProps} />
        </Box>
        {TableSubHeaderData.length !== 0 && <TableSubHeader data={TableSubHeaderData} />}
        <CustomTable {...tableProps} />
      </Card >
      {deleteModalProps.open && <DeleteModel {...deleteModalProps} />}
    </>
  )
}

export default ReportsLayout;


const styles = {
  title: {
    fontWeight: 600, fontSize: '16px',
  },
  searchOnRight: {
    '& .MuiStack-root': {
      justifyContent: 'flex-end',
      '& .MuiStack-root': {
        marginLeft: { md: 'auto', xs: '' },
        marginRight: '20px'
      },
    }
  }
}