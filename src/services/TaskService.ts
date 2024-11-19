import api from "../config/api"
import ITask from "../interfaces/ITask"

const getTasks = () => {
    return api.get<Array<ITask>>("/tasks")
}