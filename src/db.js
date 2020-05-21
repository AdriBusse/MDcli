const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({depots: []}).write()
db.defaults({transactions: []}).write()

const Depots = db.get('depots')
const Transactions = db.get('transactions')

module.exports = {
    db,
    Depots,
    Transactions
}