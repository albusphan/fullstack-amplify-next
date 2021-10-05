import { GetServerSidePropsContext } from "next";

import { checkAuth } from "@/utils";
import { PageHead } from "@/layouts/PageHead";

export default function AccountPage() {
  return (
    <div>
      <PageHead title="Account || 361/DXR" />
      Dashboard
    </div>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await checkAuth(context);
}
