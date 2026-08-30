import api from "./api";
import type { AIInsightsResponse } from "../types/ai";

export async function getAIInsights(symbol: string): Promise<AIInsightsResponse> {
  const response = await api.get<AIInsightsResponse>(`/api/ai/${encodeURIComponent(symbol)}`);
  return response.data;
}
