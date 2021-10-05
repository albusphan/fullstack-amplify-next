import { ReactNode } from "react";
import { AuthLayout } from "./AuthLayout";
import { DashboardLayout } from "./DashboardLayout";

export const getDashboardLayout = (page: ReactNode) => {
  return <DashboardLayout>{page}</DashboardLayout>;
};

export const getAuthLayout = (page: ReactNode) => {
  return <AuthLayout>{page}</AuthLayout>;
};
