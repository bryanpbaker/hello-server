;

const Schema = use('Schema');

class ConversationUserSchema extends Schema {
  up() {
    this.drop('conversation_user');
  }

  down() {
    this.table('conversation_users', table => {
      // reverse alternations
    });
  }
}

module.exports = ConversationUserSchema;
