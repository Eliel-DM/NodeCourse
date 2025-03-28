import cors from "@fastify/cors";
import fastify from "fastify";

const server = fastify({ logger: true });

server.register(cors, {
    origin: "*",
});

const teams = [
  { id: 1, name: "ferrari", base: "Woking, United Kingdom" },
  { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 3, name: "RedBull", base: "Milton Keynes, United Kingdom" },
];

const drivers = [
  {
    id: 1,
    name: "Max Verstappen",
    team: "Red Bull Racing",
  },
  {
    id: 2,
    name: "Lewis Hamilton",
    team: "Ferrari",
  },
  {
    id: 3,
    name: "Lando Norris",
    team: "McLaren",
  },
];

server.get("/teams", async (request, response) => {
  response.type("application/json").code(200);

  return { teams };
});

server.get("/drivers", async (request, response) => {
  response.type("applitacion/json").code(200);
  return { drivers };
});

server.listen({ port: 3333 }, () => {
  console.log("Server init");
});
