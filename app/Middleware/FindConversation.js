const Database = use('Database');
const User = use('App/Models/User');

class FindConversation {
  async handle({ request, auth }, next) {
    const userId = auth.user.id;
    const { recipientId } = request.body;

    // query the conversation_user pivot table for the user's conversations
    const userConversations = await Database.table('conversation_user').where(
      'user_id',
      userId
    );
    // create an array of conversation_id from the user's conversations
    const userConversationIds = userConversations.map(
      conversation => conversation.conversation_id
    );
    // query the conversation_user pivot table to see if the recipient
    // shares a common conversation with the user
    const conversation = await Database.table('conversation_user')
      .whereIn('conversation_id', userConversationIds)
      .where('user_id', recipientId);

    // set request.conversation equal to the conversation
    // if it exists, or null if not
    if (conversation.length > 0) {
      request.conversation = conversation;
    } else {
      request.conversation = null;
    }
    // call next to advance the request
    await next();
  }
}

module.exports = FindConversation;
