import { getProductsList } from "../handlers/getProductsList.mjs";

describe("getProductsList", () => {
  it("should return a list of products", async () => {
    const event = {};
    const response = await getProductsList(event);

    expect(response.statusCode).toBe(200);
    const body = JSON.parse(response.body);
    expect(Array.isArray(body)).toBe(true);
    expect(body.length).toBeGreaterThan(0);
  });
});
