import * as APIt from "@/API";

export type Todo = Omit<
  Exclude<APIt.GetProjectQuery["getProject"], null>,
  "__typename"
>;

const a: Todo = {};
