import api from "../config/api"
import IActivity from "../interfaces/IActivity"

const getActivities = () => {
    return api.get<Array<IActivity>>("/activities")
}