;

const Schema = use('Schema');

class ConversationUserSchema extends Schema {
  up() {
    this.table('conversation_user', table => {
      table.dropColumn('created_at');
      table.dropColumn('updated_at');
    });
  }

  down() {
    this.table('conversation_user', table => {
      // reverse alternations
    });
  }
}

module.exports = ConversationUserSchema;
