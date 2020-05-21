const {Command, flags} = require('@oclif/command')
const { Transactions} = require('../db')
const { Depots} = require('../db')
const c = require("colors")



class LsCommand extends Command {
   getSum(depot){
    let sum=0;
    const all = Transactions.__wrapped__.transactions.filter(t =>t.dest === depot)
    all.forEach(x=> sum +=x.amount)
    return sum
  }
  async run() {
    const {flags} = this.parse(LsCommand)
    const transactions = flags.transactions
    const depots = flags.depots
    const filterD = flags.filter

    if(transactions){
      if(filterD!=undefined){
        const res=Transactions.__wrapped__.transactions
        res.forEach((x,i)=>{x.dest===filterD?printTline(x,i):null})

      }else{
      const res=Transactions.__wrapped__.transactions
      res.forEach((x, i)=> printTline(x,i))
    }
  }
    if(depots){


      const res = Depots.__wrapped__.depots
      res.forEach((x,i)=>{this.log(`${x.name} (${x.short})   ${this.getSum(x.short)}`);this.log("___________".grey)})
      
      
    }

    if(transactions===undefined&&depots===undefined){
      const resT=Transactions.__wrapped__.transactions
      resT.forEach((x, i)=> this.log(`${i+1}: ${x.purpose}      ${x.amount}    Depot:${x.dest}`))
      this.log("________________")
      const resD = Depots.__wrapped__.depots

      resD.forEach((x,i)=>{this.log(`${x.name}   ${this.getSum(x.short)}`)})


    }
  }
}

LsCommand.description = `
List all your Depots or transactions. Depend on the flag you set. No flag will show you booth
`

LsCommand.flags = {
  transactions: flags.boolean({char: 't', description: 'for print all transactions',  }),
  depots: flags.boolean({char: 'd', description: 'for print all your Depots',   }),
  filter: flags.string({char: 'f', description: 'filter for one Depot',required: false   }),
}
function printTline(x, i){
  if(x.amount>0){
    console.log(`${i+1}: ${x.purpose}      ${x.amount}€    Depot:${x.dest}`.green)
  }else{
    console.log(`${i+1}: ${x.purpose}      ${x.amount}€    Depot:${x.dest}`.red)
  }
  
}

module.exports = LsCommand
