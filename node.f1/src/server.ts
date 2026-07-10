import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register (cors, {
    origin: "*",
})

const teams = [
    { id: 1, name: "ferrari", base: "Maranello, Italy" },
    { id: 2, name: "mercedes", base: "Brackley, United Kingdom" },
    { id: 3, name: "red bull", base: "Milton Keynes, United Kingdom" },
    { id: 4, name: "mclaren", base: "Woking, United Kingdom" },
    { id: 5, name: "alpine", base: "Enstone, United Kingdom" },
    { id: 6, name: "aston martin", base: "Silverstone, United Kingdom" },
    { id: 7, name: "williams", base: "Grove, United Kingdom" },
    { id: 8, name: "alphatauri", base: "Faenza, Italy" },
    { id: 9, name: "haas", base: "Kannapolis, United States" },
    { id: 10, name: "alfa romeo", base: "Hinwil, Switzerland" }
];

const drivers = [
    { id: 1, name: "Charles Leclerc", teamId: 1 },
    { id: 2, name: "Carlos Sainz", teamId: 1 },
    { id: 3, name: "Lewis Hamilton", teamId: 2 },
    { id: 4, name: "George Russell", teamId: 2 },
    { id: 5, name: "Max Verstappen", teamId: 3 },
    { id: 6, name: "Sergio Pérez", teamId: 3 },
    { id: 7, name: "Lando Norris", teamId: 4 },
    { id: 8, name: "Oscar Piastri", teamId: 4 },
    { id: 9, name: "Esteban Ocon", teamId: 5 },
    { id: 10, name: "Pierre Gasly", teamId: 5 },
    { id: 11, name: "Fernando Alonso", teamId: 6 },
    { id: 12, name: "Lance Stroll", teamId: 6 },
    { id: 13, name: "Alex Albon", teamId: 7 },
    { id: 14, name: "Logan Sargeant", teamId: 7 },
    { id: 15, name: "Yuki Tsunoda", teamId: 8 },
    { id: 16, name: "Nyck de Vries", teamId: 8 },
    { id: 17, name: "Kevin Magnussen", teamId: 9 },
    { id: 18, name: "Nico Hülkenberg", teamId: 9 },
    { id: 19, name: "Valtteri Bottas", teamId: 10 },
    { id: 20, name: "Zhou Guanyu", teamId: 10 }
];

server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    return { teams };
});

interface TeamParams {
    id: string;
}

server.get<{ Params: TeamParams }>('/teams/:id', async (request, response) => {
    const id = Number(request.params.id);
    const team = teams.find((t) => t.id === id);

    if (!team) {
        response.type('application/json').code(404);
        return { error: 'Team not found' };
    }

    const teamDrivers = drivers.filter((d) => d.teamId === team.id);
    response.type('application/json').code(200);
    return { team: { ...team, drivers: teamDrivers } };
});

server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);
    return { drivers };
});

interface DriverParams {
    id: string;
}

server.get<{ Params: DriverParams }>('/drivers/:id', async (request, response) => {
    const id = Number(request.params.id);
    const driver = drivers.find((d) => d.id === id);

    if (!driver) {
        response.type('application/json').code(404);
        return { error: 'Driver not found' };
    }

    const team = teams.find((t) => t.id === driver.teamId);

    response.type('application/json').code(200);
    return { driver: { ...driver, team } };
});

server.listen({ port: 3333, host: '0.0.0.0' }, () => {
    console.log('Server is running on port 3333');
});