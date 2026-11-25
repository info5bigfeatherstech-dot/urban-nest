import { useQuery } from "@tanstack/react-query";
import { projectService } from "@/services/project.service";
import { queryKeys } from "@/constants/queryKeys";

export function useNewLaunchProjects(city?: string) {
  return useQuery({
    queryKey: queryKeys.projects.newLaunches(city),
    queryFn: () => projectService.getNewLaunchProjects(city),
  });
}

