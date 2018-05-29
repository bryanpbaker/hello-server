'use strict'

const Schema = use('Schema')

class ConversationUserSchema extends Schema {
  up () {
    this.create('conversation_users', (table) => {
      table.increments()
      table.integer('user_id').unsigned().references('id').inTable('users').onDelete('cascade')
      table.integer('conversation_id').unsigned().references('id').inTable('conversations').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('conversation_users')
  }
}

module.exports = ConversationUserSchema
