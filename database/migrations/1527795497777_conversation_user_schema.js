const Schema = use('Schema');

class ConversationUserSchema extends Schema {
  up() {
    this.table('conversation_user', table => {
      table.timestamps();
    });
  }

  down() {
    this.table('conversation_user', table => {
      // reverse alternations
    });
  }
}

module.exports = ConversationUserSchema;
