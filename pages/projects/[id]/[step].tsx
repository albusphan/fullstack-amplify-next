import { GetServerSidePropsContext } from "next";
import { useRouter } from "next/router";

import { PageHead } from "@/layouts/PageHead";
import { checkAuth } from "@/utils";
import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  HStack,
  Heading,
} from "@chakra-ui/react";
import { ProjectSidebar } from "@/modules/projects/ProjectSidebar";
import { Information } from "@/modules/projects/steps/Information";
import { useProject } from "@/hooks/useProject";

export default function ProjectDetailPage() {
  const { query } = useRouter();

  const projectId = String(query.id);

  const { isLoading, data, error } = useProject(projectId);

  if (isLoading) return <div>loading</div>;

  if (error) return <div>error</div>;

  return (
    <Box px="6">
      <PageHead title="Project Details || 361/DXR" />

      <Box mb={4}>
        <Heading fontSize="2xl" mb="6">
          Project Details
        </Heading>
        <Breadcrumb separator="-">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Dashboard</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink color="gray.500">
              GNTMX 2021 - Luca - SevenOne
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <HStack align="flex-start" space={6}>
        <Box maxW="280px" shadow="xl" p={4} borderRadius="8px">
          <ProjectSidebar />
        </Box>
        <Box flex={1} shadow="xl" p={4} borderRadius="8px">
          <Information
            defaultValues={{
              projectType: data?.projectType || "",
              projectName: data?.projectName || "",
              projectUrl: data?.projectUrl || "",
            }}
          />
        </Box>
      </HStack>
    </Box>
  );
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return await checkAuth(context);
}
