async function connectToDatabase(user, password) {
    if(user===process.env.USERDATABASE && password===process.env.PASSWORDDATABASE) {
        console.log("Connected to the database successfully!");
    }else{
        console.log("Failed to connect to the database. Please check your credentials.");
    }

}

export default connectToDatabase;