import { AppDataSource } from "./data-source"

AppDataSource.initialize().then(async () => {

    console.log(AppDataSource.manager)

}).catch(error => console.log(error))
