import Server from "./src/server.js";
import router from './src/router.js'

const server = new Server(router)


server.start(3030)