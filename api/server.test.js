const request = require("supertest");
const server = require("./server");
const db = require("../database/dbConfig");

const SamplePost = {
    title: "Sample Post",
    description: "Sample Description",
    user_id: "1"
};

beforeAll(async () => {
    await db.migrate.rollback();
    await db.migrate.latest();
});

beforeEach(async () => {
    await db("posts").truncate();
});

afterAll(async () => {
    await db.destroy();
});

describe("Sanity Checks: ", () => {
    it("Adds two numbers correctly", () => {
        expect(1 + 1).toBe(2);
    });
    it("Does not add two numbers", () => {
        expect(1 + 1).toBe(4);
    });
});

describe("Endpoint Testing: ", () => {
    describe("[GET] /posts", () => {
        it("Responds with a status code of 200", async () => {
            const res = await request(server).get("/api/posts");
            expect(res.status).toBe(200);
        });
        it("Responds with a status code of 403 if not logged in", async () => {
            const res = await request(server).get("/api/posts");
            expect(res.status).toBe(403);
        });
        it("Responds with posts if there are posts", async () => {
            await db("posts").insert(SamplePost);
            let res = await request(server).get("/api/posts");
            expect(res.body).toHaveLength(1);
            expect(res.body[0]).toMatchObject(SamplePost);
        });
    });
});

