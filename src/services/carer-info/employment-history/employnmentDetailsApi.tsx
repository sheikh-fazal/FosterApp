import { parseDatesToTimeStampByKey } from "@root/utils/formatTime";
import { baseAPI } from "../../baseApi";

export const userAPI = baseAPI.injectEndpoints({
  endpoints: (builder) => ({
    getExperience: builder.query<null, void>({
      query: () => "employment-history",
      providesTags: ["Experience"],
    }),   
    experience: builder.mutation({
      query: (notes: any) => ({
        url: "employment-history",
        method: "POST",
        body: notes,
      }),
      invalidatesTags: ["Experience"],
    }),
    editExperience: builder.mutation({
      query: ({id,payload}) => ({             
        url: `employment-history/${id}`,
        method: "PATCH",
        body: payload,
      }),
      invalidatesTags: ["Experience"],
    }),
    deleteExperience: builder.mutation({
      query: (id: any) => ({
        url: `employment-history/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Experience"],
    }),
  }),
  
});

export const {
   useGetExperienceQuery,
   useExperienceMutation
} = userAPI;
