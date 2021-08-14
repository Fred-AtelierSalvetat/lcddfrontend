import { createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query";
export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl:
      "http://django-env.eba-bkqvym6c.eu-west-3.elasticbeanstalk.com/api",
  }),
  tagTypes: [],
  endpoints: (build) => ({
    professionsList: build.query<
      ProfessionsListApiResponse,
      ProfessionsListApiArg
    >({
      query: () => ({ url: `/professions/` }),
    }),
    refsLegifranceList: build.query<
      RefsLegifranceListApiResponse,
      RefsLegifranceListApiArg
    >({
      query: () => ({ url: `/refsLegifrance/` }),
    }),
    refsLegifranceRead: build.query<
      RefsLegifranceReadApiResponse,
      RefsLegifranceReadApiArg
    >({
      query: (queryArg) => ({ url: `/refsLegifrance/${queryArg.id}/` }),
    }),
    topicsList: build.query<TopicsListApiResponse, TopicsListApiArg>({
      query: () => ({ url: `/topics/` }),
    }),
    usersList: build.query<UsersListApiResponse, UsersListApiArg>({
      query: (queryArg) => ({
        url: `/users/`,
        params: { lcdd_role: queryArg.lcddRole },
      }),
    }),
    usersCreate: build.mutation<UsersCreateApiResponse, UsersCreateApiArg>({
      query: (queryArg) => ({
        url: `/users/`,
        method: "POST",
        body: queryArg.userProfile,
      }),
    }),
    usersRead: build.query<UsersReadApiResponse, UsersReadApiArg>({
      query: (queryArg) => ({ url: `/users/${queryArg.id}/` }),
    }),
    usersUpdate: build.mutation<UsersUpdateApiResponse, UsersUpdateApiArg>({
      query: (queryArg) => ({
        url: `/users/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.userProfile,
      }),
    }),
    usersPartialUpdate: build.mutation<
      UsersPartialUpdateApiResponse,
      UsersPartialUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/users/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.userProfile,
      }),
    }),
    usersDelete: build.mutation<UsersDeleteApiResponse, UsersDeleteApiArg>({
      query: (queryArg) => ({
        url: `/users/${queryArg.id}/`,
        method: "DELETE",
      }),
    }),
    workshopsList: build.query<WorkshopsListApiResponse, WorkshopsListApiArg>({
      query: () => ({ url: `/workshops/` }),
    }),
    workshopsCreate: build.mutation<
      WorkshopsCreateApiResponse,
      WorkshopsCreateApiArg
    >({
      query: (queryArg) => ({
        url: `/workshops/`,
        method: "POST",
        body: queryArg.workshop,
      }),
    }),
    workshopsRead: build.query<WorkshopsReadApiResponse, WorkshopsReadApiArg>({
      query: (queryArg) => ({ url: `/workshops/${queryArg.id}/` }),
    }),
    workshopsUpdate: build.mutation<
      WorkshopsUpdateApiResponse,
      WorkshopsUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/workshops/${queryArg.id}/`,
        method: "PUT",
        body: queryArg.workshop,
      }),
    }),
    workshopsPartialUpdate: build.mutation<
      WorkshopsPartialUpdateApiResponse,
      WorkshopsPartialUpdateApiArg
    >({
      query: (queryArg) => ({
        url: `/workshops/${queryArg.id}/`,
        method: "PATCH",
        body: queryArg.workshop,
      }),
    }),
    workshopsDelete: build.mutation<
      WorkshopsDeleteApiResponse,
      WorkshopsDeleteApiArg
    >({
      query: (queryArg) => ({
        url: `/workshops/${queryArg.id}/`,
        method: "DELETE",
      }),
    }),
  }),
});
export type ProfessionsListApiResponse = /** status 200  */ Profession[];
export type ProfessionsListApiArg = {};
export type RefsLegifranceListApiResponse = /** status 200  */ RefLegifrance[];
export type RefsLegifranceListApiArg = {};
export type RefsLegifranceReadApiResponse = /** status 200  */ RefLegifrance;
export type RefsLegifranceReadApiArg = {
  /** A unique integer value identifying this ref legifrance. */
  id: number;
};
export type TopicsListApiResponse = /** status 200  */ Topic[];
export type TopicsListApiArg = {};
export type UsersListApiResponse = /** status 200  */ UserProfile[];
export type UsersListApiArg = {
  /** Filter the returned list by lcdd_role, multiple values are handles as OR : filter1 OR filter2 */
  lcddRole?:
    | "SPEAKER_AWAITING_ANSWER"
    | "SPEAKER_AWAITING_VALIDATION"
    | "SPEAKER"
    | "PROFESSIONAL"
    | "STUDENT"
    | "CITIZEN"
    | "ADMIN";
};
export type UsersCreateApiResponse = /** status 201  */ UserProfile;
export type UsersCreateApiArg = {
  userProfile: UserProfile;
};
export type UsersReadApiResponse = /** status 200  */ UserProfile;
export type UsersReadApiArg = {
  /** A unique integer value identifying this user profile. */
  id: number;
};
export type UsersUpdateApiResponse = /** status 200  */ UserProfile;
export type UsersUpdateApiArg = {
  /** A unique integer value identifying this user profile. */
  id: number;
  userProfile: UserProfile;
};
export type UsersPartialUpdateApiResponse = /** status 200  */ UserProfile;
export type UsersPartialUpdateApiArg = {
  /** A unique integer value identifying this user profile. */
  id: number;
  userProfile: UserProfile;
};
export type UsersDeleteApiResponse = unknown;
export type UsersDeleteApiArg = {
  /** A unique integer value identifying this user profile. */
  id: number;
};
export type WorkshopsListApiResponse = /** status 200  */ Workshop[];
export type WorkshopsListApiArg = {};
export type WorkshopsCreateApiResponse = /** status 201  */ Workshop;
export type WorkshopsCreateApiArg = {
  workshop: Workshop;
};
export type WorkshopsReadApiResponse = /** status 200  */ Workshop;
export type WorkshopsReadApiArg = {
  /** A unique integer value identifying this workshop. */
  id: number;
};
export type WorkshopsUpdateApiResponse = /** status 200  */ Workshop;
export type WorkshopsUpdateApiArg = {
  /** A unique integer value identifying this workshop. */
  id: number;
  workshop: Workshop;
};
export type WorkshopsPartialUpdateApiResponse = /** status 200  */ Workshop;
export type WorkshopsPartialUpdateApiArg = {
  /** A unique integer value identifying this workshop. */
  id: number;
  workshop: Workshop;
};
export type WorkshopsDeleteApiResponse = unknown;
export type WorkshopsDeleteApiArg = {
  /** A unique integer value identifying this workshop. */
  id: number;
};
export type Profession = {
  id?: number;
  profession: string;
};
export type RefLegifrance = {
  id?: number;
  ref: string;
};
export type Topic = {
  id?: number;
  thumbnail?: string;
  title: string;
};
export type Group = {
  id?: number;
  name: string;
};
export type User = {
  id?: number;
  first_name?: string;
  last_name?: string;
  email?: string;
  is_active?: boolean;
  groups: Group[];
};
export type UserProfile = {
  user: User;
  lcdd_role?:
    | "SPEAKER_AWAITING_ANSWER"
    | "SPEAKER_AWAITING_VALIDATION"
    | "SPEAKER"
    | "PROFESSIONAL"
    | "STUDENT"
    | "CITIZEN"
    | "ADMIN";
  city?: string;
  interests?: {
    id?: number;
    title: string;
    thumbnail: string;
  }[];
};
export type Keyword = {
  id?: number;
  keyword: string;
  workshop: number;
};
export type Workshop = {
  status?: "INCOMING" | "LIVE" | "UNPUBLISHED" | "PUBLISHED" | "ARCHIVED";
  thumbnailUrl?: string;
  videoUrl?: string;
  title: string;
  startingdate: string;
  topics?: {
    id?: number;
    title: string;
    thumbnail: string;
  }[];
  description: string;
  refsLegifrance?: {
    id?: number;
    ref: string;
  }[];
  keywords?: Keyword[];
};
export const {
  useProfessionsListQuery,
  useRefsLegifranceListQuery,
  useRefsLegifranceReadQuery,
  useTopicsListQuery,
  useUsersListQuery,
  useUsersCreateMutation,
  useUsersReadQuery,
  useUsersUpdateMutation,
  useUsersPartialUpdateMutation,
  useUsersDeleteMutation,
  useWorkshopsListQuery,
  useWorkshopsCreateMutation,
  useWorkshopsReadQuery,
  useWorkshopsUpdateMutation,
  useWorkshopsPartialUpdateMutation,
  useWorkshopsDeleteMutation,
} = api;

