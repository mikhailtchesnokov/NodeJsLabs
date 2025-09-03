const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('users', 'postgres', 'postgres', {
    host: 'localhost',
    dialect: 'postgres'
});

const User = sequelize.define('User', {
    Id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    Name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: { name: 'unique_name', msg: 'Name must be unique' }
    }
}, {tableName: 'users', timestamps: false });

// User.sync().then(() => {
//     console.log('User table created');
// }).catch(err => {
//     console.error('Error creating User table:', err);
// });


// User.findAll({
//     attributes: ['Id', 'Name'],
//     where: { Id: 1 },
//     order: [['Name', 'ASC']]
// }).then(users => {
//     console.log('All users:', JSON.stringify(users, null, 2));
// }).catch(err => {
//     console.error('Error fetching users:', err);    
// });


// User.findOne({
//     attributes: ['Id', 'Name'],
//     where: { Id: 1 },
//     order: [['Name', 'ASC']]
// }).then(users => {
//     console.log('All users:', JSON.stringify(users, null, 2));
// }).catch(err => {
//     console.error('Error fetching users:', err);
// });


// User.create({
//     Name: 'Test User'
// }).then(user => {
//     console.log('User created:', JSON.stringify(user, null, 2));
// }).catch(err => {
//     console.error('Error creating user:', err);
// });


// User.destroy({
//     where: { Id: 6 }
// }).then(() => {
//     console.log('User deleted');
// }).catch(err => {
//     console.error('Error deleting user:', err);
// });