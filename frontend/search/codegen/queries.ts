import { gql } from "graphql-request";

export const login = gql`
  query Login($auth: Auth!) {
    login(auth: $auth) {
      jwt
    }
  }
`;

export const get_columns = gql`
  query GetColumns($auth: Auth!){
    get_columns(auth: $auth) {
      name
      type
      header
      group
      defaultWidth
      editable
      options {
        filter {
          operator
        }
        dateFormat
        transform {
          date2Iso {
            inputDateFormat
          }
          array2string {
            join
          }
        }
      }
    }
  }
`;

export const get_offers = gql`
  query GetOffers($auth: Auth!) {
    get_offers(auth: $auth) {
      id
      id_tmp
      time_from_str
      time_duration_str
      beds
      languages
      place_country
      place_city
      place_zip
      place_street
      place_street_number
      place_lon
      place_lat
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

export const get_rw = gql`
  query GetRw($auth: Auth!) {
    get_rw(auth: $auth) {
      id
      rw_contacted
      rw_contact_replied
      rw_offer_occupied
      rw_note
    }
  }
`;
