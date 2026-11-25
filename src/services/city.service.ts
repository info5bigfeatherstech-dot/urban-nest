import apiClient from "@/lib/axios";
import { City } from "@/types/city";
import mockCities from "@/mocks/cities.json";
import { isMockEnabled, delayMock } from "./mockHelper";

export const cityService = {
  async getPopularCities(): Promise<City[]> {
    if (isMockEnabled()) {
      return delayMock(mockCities as City[]);
    }
    const response = await apiClient.get<City[]>("/cities/popular");
    return response.data;
  },

  async getAllCities(): Promise<City[]> {
    if (isMockEnabled()) {
      return delayMock(mockCities as City[]);
    }
    const response = await apiClient.get<City[]>("/cities");
    return response.data;
  },
};

