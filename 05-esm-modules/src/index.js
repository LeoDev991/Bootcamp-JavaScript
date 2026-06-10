import * as database from "./utils/database.js";

import {getDataFromApi} from "./utils/api.js"; 
import {disconnectDatabase} from "./utils/database.js";


getDataFromApi();
disconnectDatabase();