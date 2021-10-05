import {
  GetProjectsQuery,
  GetProjectsQueryVariables,
  GetUserQuery,
  ListProjectsQuery,
  ListProjectsQueryVariables,
  projects,
  User,
} from "@/API";
import { getProjects, getUser, listProjects } from "@/graphql/queries";
import { useInfiniteQuery, useQuery } from "react-query";

import { client } from "../queryClient";

export type Project = Omit<projects, "__typename">;

export type TUser = Omit<User, "__typename">;

export const useProject = (id: string) => {
  return useQuery(["projects", id], async () => {
    const res = await client.request<
      GetProjectsQuery,
      GetProjectsQueryVariables
    >(getProjects, { id });
    return res.getProjects as Project;
  });
};

export const useProjectList = () => {
  const fetchProjectList = async ({
    pageParam,
  }: {
    pageParam?: string | null;
  }) => {
    if (typeof window === "undefined") return;
    const res = await client.request<
      ListProjectsQuery,
      ListProjectsQueryVariables
    >(listProjects, { nextToken: pageParam, limit: 20 });
    return {
      items: (res.listProjects?.items as Project[]) || ([] as Project[]),
      nextToken: res.listProjects?.nextToken,
    };
  };

  return useInfiniteQuery("projects", fetchProjectList, {
    getNextPageParam: (lastPage) => lastPage?.nextToken,
  });
};

export const useAccount = () =>
  useQuery("user", async () => {
    if (typeof window === "undefined") return;
    const res = await client.request<GetUserQuery>(getUser);
    return res.getUser;
  });
