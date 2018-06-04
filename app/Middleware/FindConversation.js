const Database = use('Database');
const User = use('App/Models/User');

class FindConversation {
  async handle({ request, auth }, next) {
    const userId = auth.user.id;
    const { recipientId } = request.body;
    const user = User.find(userId);

    const userConversations = await Database.table('conversation_user').where(
      'user_id',
      userId
    );

    const userConversationIds = userConversations.map(
      conversation => conversation.conversation_id
    );

    const conversation = await Database.table('conversation_user')
      .whereIn('conversation_id', userConversationIds)
      .where('user_id', recipientId);

    console.log(conversation);
    // call next to advance the request
    await next();
  }
}

module.exports = FindConversation;
