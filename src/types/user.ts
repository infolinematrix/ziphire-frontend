export type UserType = {
  id: string;
  uuid: string;
  username: string;
  email: string;
  user_type: "candidate" | "client" | "admin";
  // add other properties you expect here
};
