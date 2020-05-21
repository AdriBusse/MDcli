const {Command, flags} = require('@oclif/command')
const { Transactions} = require('../db')
const c = require("colors")

class AddTCommand extends Command {
  async run() {
    const {flags} = this.parse(AddTCommand)
    const amount = flags.amount;
    const purpose = flags.purpose;
    const dest = flags.destination;
    const res = await Transactions.push({amount, purpose, dest}).write()
    console.log("added".grey)
  }
}

AddTCommand.description = `Create a new Transaction. It can positiv or negativ.
eg: MDcli addT -a 30 -p "small describtion -d RND 
`

AddTCommand.flags = {
  amount: flags.string({char: 'a', description: 'amount of Money for input or output. Expense start with - eg: -12', multiple: false,parse: input => Number(input),required: true, }),
  purpose: flags.string({char:'p', description:'for which reason spend the money. simple string',multiple: false,default: 'not specified',required: false,}),
  destination: flags.string({char:'d', description:'In which depot you safe the money. Provide the shortform of the Depot',multiple: false,default: 'DFT',required: false,})
}

module.exports = AddTCommand
