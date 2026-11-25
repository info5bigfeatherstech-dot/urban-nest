import apiClient from "@/lib/axios";
import { Locality } from "@/types/locality";
import mockLocalities from "@/mocks/localities.json";
import { isMockEnabled, delayMock } from "./mockHelper";

export const localityService = {
  async getTrendingLocalities(citySlug?: string): Promise<Locality[]> {
    if (isMockEnabled()) {
      let list = mockLocalities as Locality[];
      if (citySlug && citySlug !== "all") {
        list = list.filter((l) => l.citySlug === citySlug);
      }
      return delayMock(list.length > 0 ? list : (mockLocalities as Locality[]));
    }
    const response = await apiClient.get<Locality[]>("/localities/trending", {
      params: { city: citySlug },
    });
    return response.data;
  },

  async getAllLocalities(): Promise<Locality[]> {
    if (isMockEnabled()) {
      return delayMock(mockLocalities as Locality[]);
    }
    const response = await apiClient.get<Locality[]>("/localities");
    return response.data;
  },
};

