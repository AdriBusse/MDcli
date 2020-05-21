MDcli
=====



[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/MDcli.svg)](https://npmjs.org/package/MDcli)
[![Downloads/week](https://img.shields.io/npm/dw/MDcli.svg)](https://npmjs.org/package/MDcli)
[![License](https://img.shields.io/npm/l/MDcli.svg)](https://github.com/AdrianBusse/MDcli/blob/master/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g moneydcli
$ MDcli COMMAND
running command...
$ MDcli (-v|--version|version)
moneydcli/1.0.2 win32-x64 node-v10.15.1
$ MDcli --help [COMMAND]
USAGE
  $ MDcli COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`MDcli addDepot`](#mdcli-adddepot)
* [`MDcli addT`](#mdcli-addt)
* [`MDcli deleteDepot`](#mdcli-deletedepot)
* [`MDcli help [COMMAND]`](#mdcli-help-command)
* [`MDcli ls`](#mdcli-ls)

## `MDcli addDepot`

Add a new Depot where you can safe money

```
USAGE
  $ MDcli addDepot

OPTIONS
  -n, --name=name    (required) Name of your new Depot post
  -s, --short=short  (required) Short form of your Depot 1 to 3 capital letters

DESCRIPTION
  eg: MDcli addDepot -n "random Name" -s RND
```

_See code: [src\commands\addDepot.js](https://github.com/AdriBusse/MDcli/blob/v1.0.2/src\commands\addDepot.js)_

## `MDcli addT`

Create a new Transaction. It can positiv or negativ.

```
USAGE
  $ MDcli addT

OPTIONS
  -a, --amount=amount            (required) amount of Money for input or output. Expense start with - eg: -12
  -d, --destination=destination  [default: DFT] In which depot you safe the money. Provide the shortform of the Depot
  -p, --purpose=purpose          [default: not specified] for which reason spend the money. simple string

DESCRIPTION
  eg: MDcli addT -a 30 -p "small describtion -d RND
```

_See code: [src\commands\addT.js](https://github.com/AdriBusse/MDcli/blob/v1.0.2/src\commands\addT.js)_

## `MDcli deleteDepot`

Delete a Depot. You need to provide the short form of your Depot name

```
USAGE
  $ MDcli deleteDepot

OPTIONS
  -s, --short=short  (required) Short form of your Depot 1 to 3 capital letters

DESCRIPTION
  Delete a Depot. You need to provide the short form of your Depot name
  eg: MDcli deleteDepot -s RND

  It will not delete the Transactions assosiated with this Depot
```

_See code: [src\commands\deleteDepot.js](https://github.com/AdriBusse/MDcli/blob/v1.0.2/src\commands\deleteDepot.js)_

## `MDcli help [COMMAND]`

display help for MDcli

```
USAGE
  $ MDcli help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.0.1/src\commands\help.ts)_

## `MDcli ls`

List all your Depots or transactions. Depend on the flag you set. No flag will show you booth

```
USAGE
  $ MDcli ls

OPTIONS
  -d, --depots         for print all your Depots
  -f, --filter=filter  filter for one Depot
  -t, --transactions   for print all transactions

DESCRIPTION
  List all your Depots or transactions. Depend on the flag you set. No flag will show you booth
```

_See code: [src\commands\ls.js](https://github.com/AdriBusse/MDcli/blob/v1.0.2/src\commands\ls.js)_
<!-- commandsstop -->
