/**
 * This file was @generated using pocketbase-typegen
 */

export enum Collections {
    Attendances = "attendances",
    Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
    id: RecordIdString
    created: IsoDateString
    updated: IsoDateString
    collectionId: string
    collectionName: Collections
    expand?: T
}

export type AuthSystemFields<T = never> = {
  email: string;
  emailVisibility: boolean;
  username: string;
  verified: boolean;
} & BaseSystemFields<T>;

// Record types for each collection

export type AttendancesRecord = {
  user: RecordIdString;
  punch_in: IsoDateString;
  punch_out?: IsoDateString;
};

export enum UsersPrivilegeOptions {
  "user" = "user",
  "admin" = "admin",
}

export type UsersRecord = {
  name?: string;
  privilege: UsersPrivilegeOptions;
};

// Response types include system fields and match responses from the PocketBase API
export type AttendancesResponse<Texpand = unknown> =
  Required<AttendancesRecord> & BaseSystemFields<Texpand>;
export type UsersResponse = Required<UsersRecord> & AuthSystemFields;

// Types containing all Records and Responses, useful for creating typing helper functions

export type CollectionRecords = {
  attendances: AttendancesRecord;
  users: UsersRecord;
};

export type CollectionResponses = {
  attendances: AttendancesResponse;
  users: UsersResponse;
};