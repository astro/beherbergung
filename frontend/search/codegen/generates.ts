import { useQuery, UseQueryOptions } from 'react-query';
import { fetcher } from './fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The 'Long' scalar type represents non-fractional signed whole numeric values. Long can represent values between -(2^64) and 2^64 - 1. */
  Long: any;
};

/** Authentication requires either a valid mail+password combination or a jwt obtained by an earlier login. */
export type Auth = {
  /** Self descriptive. */
  jwt: Scalars['String'];
  /** Self descriptive. */
  mail: Scalars['String'];
  /** Self descriptive. */
  password: Scalars['String'];
};

/** The type that query operations will be rooted at. */
export type QueryType = {
  __typename?: 'QueryType';
  /** Export an encrypted database dump */
  export?: Maybe<Export>;
  /** The offers that are visible for the ngo, belonging to the login */
  get_offers?: Maybe<Array<Get_Offers>>;
  /** For a username+password get a jwt containing the login:id */
  login: Login;
};


/** The type that query operations will be rooted at. */
export type QueryTypeExportArgs = {
  password: Scalars['String'];
};


/** The type that query operations will be rooted at. */
export type QueryTypeGet_OffersArgs = {
  auth: Auth;
};


/** The type that query operations will be rooted at. */
export type QueryTypeLoginArgs = {
  auth: Auth;
};

/** Export an encrypted database dump */
export type Export = {
  __typename?: 'export';
  err?: Maybe<Scalars['String']>;
  /** Self descriptive. */
  exit: Scalars['Int'];
  out?: Maybe<Scalars['String']>;
};

/** The offers that are visible for the ngo, belonging to the login */
export type Get_Offers = {
  __typename?: 'get_offers';
  accessible?: Maybe<Scalars['Boolean']>;
  animals_allowed?: Maybe<Scalars['Boolean']>;
  animals_present?: Maybe<Scalars['Boolean']>;
  beds?: Maybe<Scalars['Int']>;
  contact_email?: Maybe<Scalars['String']>;
  contact_name_full?: Maybe<Scalars['String']>;
  contact_phone?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  languages?: Maybe<Array<Scalars['String']>>;
  note?: Maybe<Scalars['String']>;
  place_city?: Maybe<Scalars['String']>;
  place_country?: Maybe<Scalars['String']>;
  place_street?: Maybe<Scalars['String']>;
  place_street_number?: Maybe<Scalars['String']>;
  place_zip?: Maybe<Scalars['String']>;
  time_duration_str?: Maybe<Scalars['String']>;
  time_from_str?: Maybe<Scalars['String']>;
};

/** For a username+password get a jwt containing the login:id */
export type Login = {
  __typename?: 'login';
  jwt?: Maybe<Scalars['String']>;
};

export type LoginQueryVariables = Exact<{
  auth: Auth;
}>;


export type LoginQuery = { __typename?: 'QueryType', login: { __typename?: 'login', jwt?: string | null } };

export type GetOffersQueryVariables = Exact<{
  auth: Auth;
}>;


export type GetOffersQuery = { __typename?: 'QueryType', get_offers?: Array<{ __typename?: 'get_offers', id?: string | null, time_from_str?: string | null, time_duration_str?: string | null, beds?: number | null, languages?: Array<string> | null, place_country?: string | null, place_city?: string | null, place_zip?: string | null, place_street?: string | null, place_street_number?: string | null, accessible?: boolean | null, animals_allowed?: boolean | null, animals_present?: boolean | null, contact_name_full?: string | null, contact_phone?: string | null, contact_email?: string | null, note?: string | null }> | null };


export const LoginDocument = `
    query Login($auth: Auth!) {
  login(auth: $auth) {
    jwt
  }
}
    `;
export const useLoginQuery = <
      TData = LoginQuery,
      TError = unknown
    >(
      variables: LoginQueryVariables,
      options?: UseQueryOptions<LoginQuery, TError, TData>
    ) =>
    useQuery<LoginQuery, TError, TData>(
      ['Login', variables],
      fetcher<LoginQuery, LoginQueryVariables>(LoginDocument, variables),
      options
    );
export const GetOffersDocument = `
    query GetOffers($auth: Auth!) {
  get_offers(auth: $auth) {
    id
    time_from_str
    time_duration_str
    beds
    languages
    place_country
    place_city
    place_zip
    place_street
    place_street_number
    accessible
    animals_allowed
    animals_present
    contact_name_full
    contact_phone
    contact_email
    note
  }
}
    `;
export const useGetOffersQuery = <
      TData = GetOffersQuery,
      TError = unknown
    >(
      variables: GetOffersQueryVariables,
      options?: UseQueryOptions<GetOffersQuery, TError, TData>
    ) =>
    useQuery<GetOffersQuery, TError, TData>(
      ['GetOffers', variables],
      fetcher<GetOffersQuery, GetOffersQueryVariables>(GetOffersDocument, variables),
      options
    );