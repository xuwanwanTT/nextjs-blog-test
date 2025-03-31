import { AppDataSource } from "./data-source"
import { User } from "./entity/User"

AppDataSource.initialize().then(async () => {

    console.log(AppDataSource.manager)

}).catch(error => console.log(error))
