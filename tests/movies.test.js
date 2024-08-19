const request = require("supertest");
const app = require("../app");

describe("GET /api/movies", () => {
  it("should return all movies", async () => {
    const response = await request(app).get("/api/movies");

    // Vérifie que la réponse est bien au format JSON
    expect(response.headers["content-type"]).toMatch(/json/);

    // Vérifie que le statut de la réponse est 200
    expect(response.status).toEqual(200);
  });
});

describe("GET /api/movies/:id", () => {
    it("should return movie with id 1", async () => {
      const response = await request(app).get("/api/movies/1");
  
      expect(response.headers["content-type"]).toMatch(/json/);
      expect(response.status).toEqual(200);
    });
  
    it("should return 404 for a movie with id 0", async () => {
      const response = await request(app).get("/api/movies/0");
  
      expect(response.status).toEqual(404);
    });
  });

