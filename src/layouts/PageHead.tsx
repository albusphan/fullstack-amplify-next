import Head from "next/head";

interface PageProps {
  title?: string;
}

export function PageHead({ title = "361/DXR" }: PageProps) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}
