import { useQuery } from "@tanstack/react-query";
import { localityService } from "@/services/locality.service";
import { queryKeys } from "@/constants/queryKeys";

export function useTrendingLocalities(citySlug?: string) {
  return useQuery({
    queryKey: localityService ? queryKeys.localities.byCity(citySlug || "all") : ["localities"],
    queryFn: () => localityService.getTrendingLocalities(citySlug),
  });
}

