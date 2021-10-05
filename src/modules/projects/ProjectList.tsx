import { useAccount, useProjectList } from "@/hooks/useProject";
import { ROUTES } from "@/routes";
import {
  Box,
  Button,
  Center,
  Flex,
  Heading,
  Link,
  Skeleton,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Fragment } from "react";

type ProjectListItemProps = {
  id: string;
  uid: string;
  name?: string | null;
  url?: string | null;
  status?: string | null;
  type?: string | null;
  createdAt?: number | null;
  updatedAt?: number | null;
};

const typeColor: Record<string, string> = {
  "2d": "blue.400",
  "3d": "black",
};

export const ProjectListItem = ({
  id,
  name,
  url,
  status,
  type,
  updatedAt,
  uid,
}: ProjectListItemProps) => {
  const router = useRouter();

  const href = `https://361drxwebar.8thwall.app/master-template/?id=${id}&uid=${uid}`;

  const displayUrl = `https://${url}.361drx.com`;

  const updateDate = updatedAt
    ? new Date(updatedAt * 1000).toLocaleDateString(undefined, {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : "";

  return (
    <Flex
      position="relative"
      onClick={() =>
        router.push({
          pathname: `${ROUTES.projects}/${id}/information`,
        })
      }
      cursor="pointer"
      w="100%"
      p={4}
      borderRadius="16px"
      transition="box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms"
      _hover={{
        shadow: "xl",
      }}
      shadow="lg"
      bg="white"
      align="center"
    >
      <Box
        borderRadius="8px 8px 8px 0px"
        position="absolute"
        top="0px"
        left="0px"
        w="4"
        h="4"
        bg={status !== "incomplete" ? "green.300" : "orange.300"}
      />
      <Center
        w="80px"
        h="80px"
        borderRadius="8px"
        bg={type ? typeColor[type] : "black"}
        mr="6"
      >
        <Text
          color="white"
          textTransform="uppercase"
          fontSize="xl"
          fontWeight="bold"
        >
          {type}
        </Text>
      </Center>
      <VStack justify="center" align="flex-start">
        {status === "published" && (
          <Tag
            display={["flex", "flex", "flex", "none"]}
            colorScheme="blue"
            textTransform="capitalize"
          >
            {status}
          </Tag>
        )}
        <Text fontWeight="bold">{name}</Text>
        <Link href={href} target="_blank" color="blue.500">
          {displayUrl}
        </Link>
        <Text
          display={["block", "block", "block", "none"]}
          fontWeight="light"
          fontSize="sm"
        >
          {updateDate ? `Last updated: ${updateDate}` : ""}
        </Text>
      </VStack>
      <Box ml="auto" />
      {status === "published" && (
        <Box mr="2">
          <Tag
            display={["none", "none", "none", "flex"]}
            colorScheme="blue"
            textTransform="capitalize"
          >
            {status}
          </Tag>
        </Box>
      )}
      <Text
        display={["none", "none", "none", "block"]}
        fontWeight="light"
        fontSize="sm"
      >
        {updateDate ? `Last updated: ${updateDate}` : ""}
      </Text>
    </Flex>
  );
};

export const ProjectList = () => {
  const { data, fetchNextPage, hasNextPage, isFetching, isFetchingNextPage } =
    useProjectList();

  const { data: userData, isLoading } = useAccount();

  const loading = isFetching || isFetchingNextPage || isLoading;

  return (
    <Box w="100%">
      <Heading fontSize="2xl" mb="6">
        Project List
      </Heading>

      <VStack spacing={4}>
        {data?.pages.map((page, index) => (
          <Fragment key={index}>
            {page?.items.map((project) => (
              <ProjectListItem
                id={project.id}
                uid={userData?.id || ""}
                key={project?.id}
                name={project.projectName}
                url={project.projectUrl}
                status={project.projectStatus}
                type={project.projectType}
                createdAt={project.createdAt}
                updatedAt={project.updatedAt}
              />
            ))}
          </Fragment>
        ))}
        {loading && (
          <>
            <Skeleton h="100px" w="100%" />
            <Skeleton h="100px" w="100%" />
            <Skeleton h="100px" w="100%" />
          </>
        )}
        {hasNextPage && (
          <Button
            isFullWidth
            variant="outline"
            isLoading={isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            Load more
          </Button>
        )}
      </VStack>
    </Box>
  );
};
