const Schema = use('Schema');

class ConversationUserSchema extends Schema {
  up() {
    this.table('conversation_user', table => {
      table.dateTime('created_at');
      table.dateTime('updated_at');
    });
  }

  down() {
    this.table('conversation_user', table => {
      // reverse alternations
    });
  }
}

module.exports = ConversationUserSchema;
