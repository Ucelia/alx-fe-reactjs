import axios from "axios";
import { fetchUserData } from "./githubService";

jest.mock("axios");

describe("fetchUserData", () => {
  it("should fetch users based on query parameters", async () => {
    const mockData = { items: [{ id: 1, login: "testuser", avatar_url: "", html_url: "" }] };
    axios.get.mockResolvedValueOnce({ data: mockData });

    const result = await fetchUserData({ username: "testuser" });
    expect(axios.get).toHaveBeenCalledWith(
      "https://api.github.com/search/users?q=testuser%20in%3Alogin"
    );
    expect(result).toEqual(mockData);
  });

  it("should handle API errors gracefully", async () => {
    axios.get.mockRejectedValueOnce({ response: { data: { message: "API error" } } });

    await expect(fetchUserData({ username: "testuser" })).rejects.toThrow("API error");
  });
});
