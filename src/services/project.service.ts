import apiClient from "@/lib/axios";
import { Project } from "@/types/project";
import mockProjects from "@/mocks/projects.json";
import { isMockEnabled, delayMock } from "./mockHelper";

export const projectService = {
  async getNewLaunchProjects(city?: string): Promise<Project[]> {
    if (isMockEnabled()) {
      let list = mockProjects as Project[];
      if (city && city !== "all") {
        list = list.filter((p) => p.city.toLowerCase().includes(city.toLowerCase()));
      }
      return delayMock(list.length > 0 ? list : (mockProjects as Project[]));
    }
    const response = await apiClient.get<Project[]>("/projects/new-launches", {
      params: { city },
    });
    return response.data;
  },

  async getProjectById(id: string): Promise<Project | null> {
    if (isMockEnabled()) {
      const found = (mockProjects as Project[]).find((p) => p.id === id) || null;
      return delayMock(found);
    }
    const response = await apiClient.get<Project>(`/projects/${id}`);
    return response.data;
  },
};

