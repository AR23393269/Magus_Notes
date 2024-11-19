import api from "../config/api"
import IUser from "../interfaces/IUser"

const getUsers = () => {
    return api.get<Array<IUser>>("/users")
}

const getUser = (id:number) => {
    return api.get<IUser>(`/users/${id}`)
}

const createUser = (currentUser: IUser) {
    return api.post<IUser>("/users", currentUser)
}