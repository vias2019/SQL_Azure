const { findMovieByActor, findMoviesHighRating,
  findMoviesSpecificDuration }  = require('./queries.js');
  const { Request } = require("tedious");
  const {connection} = require('./AzureConnection.js');
  
  let response = [];
  function getResponse(query){
  // Attempt to connect and execute queries if connection goes through
  connection.on("connect", err => {
    if (err) {
      console.error(err.message);
    } else {
      queryDatabase(query);
    }
  });
  }
  
  connection.connect();
  
  function queryDatabase(query) {
    console.log("Reading rows from the Table...");
    
    // Read all rows from table
    const request = new Request(
      // `SELECT * FROM RATING`,
      query,
      (err, rowCount) => {
        if (err) {
          console.error(err.message);
        } else {
          console.log(`${rowCount} row(s) returned`);
        }
      }
    );
  
    request.on(
      "row", columns => {
      response.push(columns);
      columns.forEach(column => {
        console.log("%s\t%s", column.metadata.colName, column.value);
      });
    });
    connection.execSql(request);
  }
  
  function query(qry){
    getResponse(qry);
    return response;
  }
  
  // example to call the function
  // let h = query(findMovieByActor);
  // console.log("print response: ");
  // console.log(h);

  module.exports = {query};
  