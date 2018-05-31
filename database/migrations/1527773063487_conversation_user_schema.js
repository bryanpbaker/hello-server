'use strict';

const Schema = use('Schema');

class ConversationUserSchema extends Schema {
  up() {
    this.drop('conversation_user');
    this.create('conversation_user', table => {
      table
        .increments()
        .unsigned()
        .index();
      table
        .timestamps()
        .unsigned()
        .index();
      table.integer('conversation_id');
      table.integer('user_id');
      table
        .foreign('conversation_id')
        .references('conversations.id')
        .onDelete('cascade');
      table
        .foreign('user_id')
        .references('users.id')
        .onDelete('cascade');
    });
  }

  down() {
    this.drop('conversation_user');
  }
}

module.exports = ConversationUserSchema;
