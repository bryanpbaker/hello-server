const Schema = use('Schema');

class ConversationUserSchema extends Schema {
  up() {
    this.renameTable('conversation_users', 'conversation_user');
  }

  down() {
    this.renameTable('conversation_user', 'conversation_users');
  }
}

module.exports = ConversationUserSchema;
