const { MongoClient } = require("mongodb");
 
// Replace the following with your Atlas connection string                                                                                                                                        
const uri = "mongodb+srv://wsteele:Cathy!7399@cluster0.pyndb.mongodb.net/assignments?retryWrites=true&w=majority";
const client = new MongoClient(uri,{ useNewUrlParser: true,  useUnifiedTopology: true });

async function run() {
    try {
        await client.connect( );
        console.log("Connected correctly to server");

    } catch (err) {
        console.log(err.stack);
    }
    finally {
        await client.close();
    }
}

run().catch(console.dir);