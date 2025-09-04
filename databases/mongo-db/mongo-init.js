db = db.getSiblingDB("myappdb");

db.createUser({
  user: "appuser",
  pwd: "apppass",
  roles: [{ role: "readWrite", db: "myappdb" }]
});
