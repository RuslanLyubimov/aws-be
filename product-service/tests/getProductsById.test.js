import { getProductsById } from "../handlers/getProductsById.mjs";

describe("getProductsById", () => {
  it("should return a product when a valid ID is provided", async () => {
    const event = {
      pathParameters: { id: "7567ec4b-b10c-48c5-9345-fc73c48a80aa" },
    };
    const response = await getProductsById(event);

    expect(response.statusCode).toBe(200);
    const body = JSON.parse(response.body);
    expect(body.title).toBe("God of War");
  });

  it("should return a 404 status when an invalid ID is provided", async () => {
    const event = {
      pathParameters: { id: "invalid-id" },
    };
    const response = await getProductsById(event);

    expect(response.statusCode).toBe(404);
    const body = JSON.parse(response.body);
    expect(body.message).toBe("Product not found");
  });
});
