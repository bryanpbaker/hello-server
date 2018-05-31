'use strict';

const Schema = use('Schema');

class ConversationUserSchema extends Schema {
  up() {
    this.create('conversation_users', table => {
      table.increments();
      table.timestamps();
    });
  }

  down() {
    this.drop('conversation_users');
  }
}

module.exports = ConversationUserSchema;
