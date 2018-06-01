const Schema = use('Schema');

class ConversationUserSchema extends Schema {
  up() {
    this.create('conversation_user', table => {
      table.increments();
      table.timestamps();
      table
        .integer('conversation_id')
        .unsigned()
        .index();
      table
        .integer('user_id')
        .unsigned()
        .index();
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
