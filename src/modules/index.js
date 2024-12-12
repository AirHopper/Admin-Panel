import { Router } from "express";
import authRouter from "./auth/auth.routes.js";
import dashboardRouter from "./dashboard/dashboard.routes.js";
import cityRoutes from "./city/city.routes.js";
import airportRoutes from "./airport/airport.routes.js";
import routeRoutes from "./route/route.routes.js";
import airlineRoutes from "./airline/airline.routes.js";
import flightRoutes from "./flight/flight.routes.js";
import ticketRoutes from "./tikcet/ticket.routes.js";

export default (app) => {
  const router = Router();

  app.get("/", (req, res) => {
    res.redirect("/admin/auth/login");
  });

  // prefix all routes
  app.use("/admin", router);

  // all main routers
  authRouter(router);
  dashboardRouter(router);
  cityRoutes(router);
  airportRoutes(router);
  routeRoutes(router);
  airlineRoutes(router);
  flightRoutes(router);
  ticketRoutes(router);
};
