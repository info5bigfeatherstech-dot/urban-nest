import { useQuery } from "@tanstack/react-query";
import { cityService } from "@/services/city.service";
import { queryKeys } from "@/constants/queryKeys";

export function usePopularCities() {
  return useQuery({
    queryKey: queryKeys.cities.popular(),
    queryFn: () => cityService.getPopularCities(),
  });
}

