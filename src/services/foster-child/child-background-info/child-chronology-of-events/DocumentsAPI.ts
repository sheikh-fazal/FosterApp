import { baseAPI } from "@root/services/baseApi";

const TAG = "CHILD_CHRONOLOGY_OF_EVENTS";

export const documentsApi: any = baseAPI.injectEndpoints({
  endpoints: (build) => ({
    postChildChronologyOfEventsUploadedDocuments: build.mutation<
      PostChildChronologyOfEventsUploadedDocumentsApiResponse,
      PostChildChronologyOfEventsUploadedDocumentsApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/uploaded-documents`,
        method: "POST",
        body: queryArg.addDocumentCcRequestDto,
      })
    }),
    getChildChronologyOfEventsUploadedDocumentsList: build.query<
      GetChildChronologyOfEventsUploadedDocumentsListApiResponse,
      GetChildChronologyOfEventsUploadedDocumentsListApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/uploaded-documents/List`,
        params: queryArg,
      }),
    }),
    getChildChronologyOfEventsUploadedDocumentsById: build.query<
      GetChildChronologyOfEventsUploadedDocumentsByIdApiResponse,
      GetChildChronologyOfEventsUploadedDocumentsByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/uploaded-documents/${queryArg.id}`,
      }),
    }),
    deleteChildChronologyOfEventsUploadedDocumentById: build.mutation<
      DeleteChildChronologyOfEventsUploadedDocumentByIdApiResponse,
      DeleteChildChronologyOfEventsUploadedDocumentByIdApiArg
    >({
      query: (queryArg) => ({
        url: `/child-chronology-of-events/uploaded-document/${queryArg.id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  usePostChildChronologyOfEventsUploadedDocumentsMutation,
  useGetChildChronologyOfEventsUploadedDocumentsListQuery,
  useGetChildChronologyOfEventsUploadedDocumentsByIdQuery,
  useDeleteChildChronologyOfEventsUploadedDocumentByIdMutation,
} = documentsApi;

export type PostChildChronologyOfEventsUploadedDocumentsApiResponse = unknown;
export type PostChildChronologyOfEventsUploadedDocumentsApiArg = {
  addDocumentCcRequestDto: AddDocumentCcRequestDto;
};
export type GetChildChronologyOfEventsUploadedDocumentsListApiResponse = unknown;
export type GetChildChronologyOfEventsUploadedDocumentsListApiArg = {
  limit: number | null;
  offset: number | null;
};
export type GetChildChronologyOfEventsUploadedDocumentsByIdApiResponse = unknown;
export type GetChildChronologyOfEventsUploadedDocumentsByIdApiArg = {
  id: string;
};
export type DeleteChildChronologyOfEventsUploadedDocumentByIdApiResponse = unknown;
export type DeleteChildChronologyOfEventsUploadedDocumentByIdApiArg = {
  id: string;
};
export type AddDocumentCcRequestDto = {
  formName:
    | "DAY_LOG"
    | "OOH_REPORTS"
    | "OFSTED_NOTIFICATIONS"
    | "CHILD_MISSING_PLACEMENT"
    | "ABSENCE_INFO"
    | "EXCLUSION_INFO"
    | "EXAM_GRADE_INFO"
    | "VOCATIONAL_COURSE_INFO"
    | "HOSPITALISATION_INFO"
    | "THERAPY_INFO"
    | "RISK_ASSESSMENT"
    | "IMMUNISATION_INFO"
    | "ALLEGATIONS_INFO"
    | "COMPLAINTS_INFO"
    | "INCIDENTS_INFO";
  recordId: string;
  documentType: "PNG" | "JPEG" | "JPG" | "DOC" | "PDF";
  documentDate: string;
  documentPassword: string;
  file: Blob;
};