import { Box, Button, Grid, Modal, Stack } from "@mui/material";
import CustomTable from "./CustomTable";
import TableAction from "../TableAction";

// RHF
import { useForm, useFormContext, useWatch } from "react-hook-form";

// Yub
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// @mui icons
import AddIcon from "@mui/icons-material/Add";
import { FormProvider, RHFTextField } from "../hook-form";
import RHFDatePicker from "../hook-form/RHFDatePicker";
import { useState } from "react";
import { type } from "os";
import ShareModal from "../modal/shareModal";
import { useRouter } from "next/router";
import DelegateCertificateModal from "@root/sections/training/manage-trainees/delegate-certificates/delegate-certificates-table/delegate-certificate-modal/DelegateCertificateModal";

const ANON_FUNC = () => { };

const FIELDS_OBJ: any = {
  textField: RHFTextField,
  datePicker: RHFDatePicker,
};

// ----------------------------------------------------------------------
// Modal
function TableFormModal(props: any) {
  const {
    onAccept = ANON_FUNC,
    onCancel = ANON_FUNC,
    onAdd = ANON_FUNC,
    onUpdate = ANON_FUNC,
    columns = [],
    defaultValues = {},
    type: actionType = "Add",
    disabled = actionType === "View",
  } = props;

  const schema: any = {};

  for (const column of columns) {
    if (column.validation) {
      schema[column.key] = column.validation(Yup);
    }
  }

  const formSchema = Yup.object().shape(schema);

  const methods: any = useForm({
    resolver: yupResolver(formSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isValid },
  } = methods;

  const onSubmit = (data: any) => {
    if (actionType.toLowerCase() === "add") onAdd(data);
    else if (actionType.toLowerCase() === "update") onUpdate(data);
  };

  const onAcceptHandler = (data: any) => {
    handleSubmit(onSubmit)();
    onAccept();
  };

  return (
    <Modal
      open
      onClose={onCancel}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      closeAfterTransition
    >
      <Box sx={styles.root}>
        <FormProvider methods={methods}>
          <Grid container spacing={2}>
            {columns.map(({ inputType, key, label, ...other }: any) => {
              const Component = FIELDS_OBJ[inputType];
              return (
                <Grid key={key} item xs={12} md={6}>
                  <Component name={key} label={label} disabled={disabled} />
                </Grid>
              );
            })}
          </Grid>
          <Box sx={styles.actionBtnBox}>
            {!disabled && (
              <Button
                onClick={onAcceptHandler}
                disabled={!isValid}
                sx={styles.btnSuccess}
              >
                {actionType}
              </Button>
            )}

            <Button onClick={onCancel} sx={styles.btnError}>
              Cancel
            </Button>
          </Box>
        </FormProvider>
      </Box>
    </Modal>
  );
}

// Form Table

export default function FormTable(props: any) {
  const {
    disabled,
    view,
    print,
    share,
    certificate,
    tableKey,
    columns: tableColumns,
  } = props;
  const { setValue, getValues } = useFormContext();
  const tableData = useWatch({ name: tableKey }) ?? [];
  const [actionData, setActionData] = useState<any>(null);
  const [viewModal, setViewModal] = useState(false);
  const [shareModal, setShareModal] = useState(false);
  const [certificateModal, setCertificateModal] = useState(false);

  /* Set up formatters for updating the display data */
  const formatters: any = {};
  for (const column of tableColumns) {
    if (column.format) formatters[column.key] = column.format;
  }

  /* COLUMNS */
  let columns = tableColumns.map(({ key, label }: any) => {
    return {
      accessorFn: (row: any) => {
        if (formatters[key]) return formatters[key](row[key]);

        return row[key];
      },
      id: label,
      cell: (info: any) => info.getValue(),
      header: () => <span>{label}</span>,
    };
  });


  columns.push(
    {
      id: "certificate",
      cell: (info: any) => (
        <Box>
          {certificate &&
            (

              <Box sx={{ cursor: "pointer", color: "#0563C1", fontWeight: "500", }} onClick={() => setCertificateModal(true)}>
                Delegate certifacte
              </Box>
            )
          }
        </Box>
      ),
      header: () => (certificate && <span>Manage Certificate</span>),
      isSortable: false,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box
          sx={{
            display: "flex",
            gap: "12px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {view && (
            <TableAction
              type="view"
              onClicked={(id: number) => onViewHandler(info.row.index)}
            />
          )}
          {print && (
            <TableAction
              type="print"
              onClicked={(id: number) => window.print()}
            />
          )}
          {share && (
            <TableAction
              type="share"
              onClicked={() => setShareModal(!shareModal)}
            />
          )}

          {showView === "view" ? (
            ""
          ) : (
            <>
              <TableAction
                type="edit"
                onClicked={(id: number) =>
                  onViewHandler(info.row.index, "Update")
                }
              />
              <TableAction
                type="delete"
                onClicked={(id: number) => onDeleted(info.row.index)}
              />
            </>
          )}
        </Box>
      ),

      header: () => <span>actions</span>,
      isSortable: false,
    }
  );

  const handleShare = () => {
    setShareModal(false);
  };

  /* CANCEL HANDLER */
  function onCancelHandler() {
    setActionData(null);
    setViewModal(false);
  }

  /* ADD HANDLER */
  function onAddHandler() {
    const defaultValues: any = {};

    tableColumns.forEach((column: any) => {
      defaultValues[column.key] = column.defaultValue ?? "";
    });

    setActionData({
      type: "Add",
      defaultValues,
    });
  }

  function onAdded(data: any) {
    setValue(tableKey, [...getValues()[tableKey], data]);
    setActionData(null);
  }

  /* DELETE HANDLER */
  function onDeleted(index: number) {
    const tableRowData = getValues()[tableKey];
    const leftArr = tableRowData.slice(0, index);
    const rightArr = tableRowData.slice(index + 1);
    setValue(tableKey, [...leftArr, ...rightArr]);
  }

  /* UPDATE and VIEW HANDLER */

  function onViewHandler(index: any, actionType: string = "View") {
    const tableRowData = getValues()[tableKey][index];

    setActionData({
      type: actionType,
      index,
      defaultValues: tableRowData,
    });
  }

  function onUpdated(data: any) {
    const tableRowData = getValues()[tableKey];
    const { index } = actionData;
    tableRowData[index] = data;

    setValue(tableKey, tableRowData);
    setActionData(null);
  }

  const router = useRouter();

  const showView = router.query.action;

  return (
    <div>
      {certificateModal && (
        <DelegateCertificateModal
          open={certificateModal}
          setOpen={setCertificateModal}
        />
      )}
      {shareModal && (
        <ShareModal
          open={shareModal}
          data={[{ email: "hassan@gmail.com" }]}
          handleClose={handleShare}
          onSubmit={(values: any) => {
            console.log(values);
            setShareModal(false);
          }}
        />
      )}

      {viewModal && (
        <TableFormModal
          disabled={disabled}
          columns={tableColumns}
          onCancel={onCancelHandler}
          {...actionData}
        />
      )}

      {actionData && (
        <TableFormModal
          columns={tableColumns}
          onAdd={onAdded}
          onUpdate={onUpdated}
          onCancel={onCancelHandler}
          {...actionData}
        />
      )}
      <CustomTable
        data={tableData}
        columns={columns}
        isPagination={false}
        isSuccess={true}
      />
      {showView === "view" ? (
        ""
      ) : (
        <Button variant="text" startIcon={<AddIcon />} onClick={onAddHandler}>
          Add
        </Button>
      )}
    </div>
  );
}

//-----------------------------------------------------------------------
// styles
const styles = {
  root: (theme: any) => ({
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "min(95vw, 40rem)",
    bgcolor: "background.paper",
    borderRadius: "4px",
    boxShadow: 24,
    px: 2,
    py: 2,
  }),
  actionBtnBox: (theme: any) => ({
    display: "flex",
    justifyContent: "flex-end",
    gap: "10px",
    mt: 2,
  }),
  btnError: (theme: any) => ({
    bgcolor: theme.palette.error.darker,
    color: theme.palette.primary.contrastText,
    "&:hover": { bgcolor: theme.palette.error.darker },
  }),
  btnSuccess: (theme: any) => ({
    bgcolor: theme.palette.primary.main,
    color: theme.palette.primary.contrastText,
    minWidth: "100px",
    "&:hover": { bgcolor: theme.palette.primary.main },
    "&:disabled": {
      backgroundColor: theme.palette.grey[400],
    },
  }),
};
