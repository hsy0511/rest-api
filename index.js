const oracledb = require('oracledb');
oracledb.outFormat = oracledb.OUT_FORMAT_OBJECT;

async function fun() {
    let con;
    try{
        con = await oracledb.getConnection({
            user : "hr",
            password : "hr",
            connectString : "localhsot/orcl"
        });
        const data = await con.execute(
            `select * from departments`,
        );
        console.log(data.row);
    } catch (err) {
        console.error(err);
    }
}
fun();