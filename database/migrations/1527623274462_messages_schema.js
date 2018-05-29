'use strict'

const Schema = use('Schema')

class MessagesSchema extends Schema {
  up () {
    this.table('messages', (table) => {
      table.text('body').notNullable()
    })
  }

  down () {
    this.table('messages', (table) => {
      table.dropColumn('body')
    })
  }
}

module.exports = MessagesSchema
