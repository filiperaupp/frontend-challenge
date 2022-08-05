import axios from "axios";
import { Task } from "src/db/db.types";

export class TaskService {
    getAll() {
        return axios.get<{tasks: Task[]}>("/api/tasks")
    }

    create(task: any) {
        return axios.post("/api/tasks", task)
    }
}