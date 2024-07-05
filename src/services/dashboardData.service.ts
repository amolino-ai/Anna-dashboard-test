const BASE_URL = 'http://localhost:3000';

export const dashboardDataService = {
  async getAll() {
    const response = await fetch(`${BASE_URL}/dashboardData`);
    return response.json();
  },
  async getBtSearchParam(searchParams: string) {
    const response = await fetch(`${BASE_URL}/dashboardData?Name_like=${searchParams}`);
    return response.json();
  },
};
