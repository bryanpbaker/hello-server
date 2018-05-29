'use strict'

const Schema = use('Schema')

class MessagesSchema extends Schema {
  up () {
    this.table('messages', (table) => {
      table.integer('user_id').unsigned().references('id').inTable('users')
      table.integer('conversation_id').unsigned().references('id').inTable('conversations')
    })
  }

  down () {
    this.table('messages', (table) => {
      // reverse alternations
    })
  }
}

module.exports = MessagesSchema
