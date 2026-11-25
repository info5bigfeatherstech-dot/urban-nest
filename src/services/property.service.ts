import apiClient from "@/lib/axios";
import { Property } from "@/types/property";
import mockProperties from "@/mocks/properties.json";
import { isMockEnabled, delayMock } from "./mockHelper";

export const propertyService = {
  async getReadyToMoveProperties(city?: string): Promise<Property[]> {
    if (isMockEnabled()) {
      let list = mockProperties as Property[];
      if (city && city !== "all") {
        list = list.filter((p) => p.city.toLowerCase().includes(city.toLowerCase()));
      }
      return delayMock(list.length > 0 ? list : (mockProperties as Property[]));
    }
    const response = await apiClient.get<Property[]>("/properties/ready-to-move", {
      params: { city },
    });
    return response.data;
  },

  async getProperties(filters?: Record<string, unknown>): Promise<Property[]> {
    if (isMockEnabled()) {
      return delayMock(mockProperties as Property[]);
    }
    const response = await apiClient.get<Property[]>("/properties", {
      params: filters,
    });
    return response.data;
  },

  async getPropertyById(id: string): Promise<Property | null> {
    if (isMockEnabled()) {
      const found = (mockProperties as Property[]).find((p) => p.id === id) || null;
      return delayMock(found);
    }
    const response = await apiClient.get<Property>(`/properties/${id}`);
    return response.data;
  },
};

