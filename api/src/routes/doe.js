import Router from "@koa/router";
import db from "../utils/database.js";

const router = new Router({ prefix: "/api/doe" });

// Middleware for all doe routes
router.use(async (ctx, next) => {
  // Add common headers
  ctx.set("X-API-Version", "1.0");
  ctx.set("X-Content-Type-Options", "nosniff");
  await next();
});

// // Create new location entry
router.post("/", async (ctx, next) => {
  const { lat, lon } = ctx.request.body;
  db.prepare(`
    INSERT INTO location (position)
    VALUES (?)
  `).run(`[${lon}, ${lat}]`);
  ctx.body = {
    message: "Location entry created successfully!",
  };
});

// // Get all doe location entries
router.get("/", async (ctx, next) => {
  db.prepare(`select * from location`);
  const locations = db
    .prepare(`
      SELECT id, json_extract(position, '$[1]') AS lat, json_extract(position, '$[0]') AS lon
      FROM location
    `)
    .all();
  ctx.body = locations;
});

export default router;
