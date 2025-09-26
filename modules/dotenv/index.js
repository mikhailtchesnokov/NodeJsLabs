require("dotenv").config({ path: `.env.${process.env.NODE_ENV || "development"}` });


console.log(process.env.PORT);
console.log(process.env.DB_HOST);