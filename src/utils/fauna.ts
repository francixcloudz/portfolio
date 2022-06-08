import faunadb from "faunadb";

export const secret = process.env.FAUNADB_SECRET_KEY || "not found";

export const { query } = faunadb;

export const client = new faunadb.Client({ secret });

export interface FaunaDatabaseResponseType {
  data: JSON;
}
