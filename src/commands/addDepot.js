const {Command, flags} = require('@oclif/command')
const {Depots}= require('../db')
const c = require("colors")


class AddDepotCommand extends Command {
  async run() {
    const {flags} = this.parse(AddDepotCommand)
    const name = flags.name;
    const short = flags.short;
    const res = await Depots.push({name: name, short: short}).write()
    this.log("added".grey)

  }
}

AddDepotCommand.description = `Add a new Depot where you can safe money
eg: MDcli addDepot -n "random Name" -s RND
`

AddDepotCommand.flags = {
  name: flags.string({char: 'n', description: 'Name of your new Depot post',multiple: false,required: true, }),
  short: flags.string({char: 's', description: 'Short form of your Depot 1 to 3 capital letters',multiple: false,required: true, })
}

module.exports = AddDepotCommand
