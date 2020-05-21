const {Command, flags} = require('@oclif/command')
const {Depots} = require('../db')


class DeleteDepotCommand extends Command {
  async run() {
    const {flags} = this.parse(DeleteDepotCommand)
    const short = flags.short 
    const res = Depots.remove({short: short}).write()
    this.log(res)
  }
}

DeleteDepotCommand.description = `
Delete a Depot. You need to provide the short form of your Depot name
eg: MDcli deleteDepot -s RND

It will not delete the Transactions assosiated with this Depot
`

DeleteDepotCommand.flags = {
  short: flags.string({char: 's', description: 'Short form of your Depot 1 to 3 capital letters',multiple: false,required: true, })
}

module.exports = DeleteDepotCommand
