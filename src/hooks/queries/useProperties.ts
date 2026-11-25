import { useQuery } from "@tanstack/react-query";
import { propertyService } from "@/services/property.service";
import { queryKeys } from "@/constants/queryKeys";

export function useReadyProperties(city?: string) {
  return useQuery({
    queryKey: queryKeys.properties.readyToMove(city),
    queryFn: () => propertyService.getReadyToMoveProperties(city),
  });
}

export function useProperties(filters?: Record<string, unknown>) {
  return useQuery({
    queryKey: queryKeys.properties.filtered(filters || {}),
    queryFn: () => propertyService.getProperties(filters),
  });
}

