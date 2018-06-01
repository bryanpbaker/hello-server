'use strict'

const Schema = use('Schema')

class ConversationUserSchema extends Schema {
  up () {
    this.table('conversation_users', (table) => {
      // alter table
    })
  }

  down () {
    this.table('conversation_users', (table) => {
      // reverse alternations
    })
  }
}

module.exports = ConversationUserSchema
