import { createServer, Model } from "miragejs";

import { tasks, successResponse } from "./db.utils";

export function makeServer() {
  createServer({
    models: {
      task: Model,
    },

    seeds(server) {
      server.db.loadData({
        tasks,
      });
    },

    routes() {
      this.namespace = "api";

      this.get("/tasks", () => {
        const tasks = this.schema.all("task");

        return successResponse(200, tasks);
      });

      this.post("/tasks", (schema, request) => {
        const data = JSON.parse(request.requestBody);

        const task = schema.create("task", data);

        return successResponse(200, task);
      });
    },
  });
}
