const { Client} = require('pg');

const client = new Client({
    host:"localhost",
    port: 5432,
    user: "postgres",
    password:"postgres",
    database:"my_db"
})

client.connect();
async function dbConnect(){

    client.query(`select * from student`,(err,result)=>{
        if(!err){
            console.log(result.rows[0])
        }
        console.log("connect")
        //client.end();
    })
}
module.exports = client;