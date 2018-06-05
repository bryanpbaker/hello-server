const Conversation = use('App/Models/Conversation');
const User = use('App/Models/User');

class ConversationController {
  /**
   * find an authenticated user and returns all of
   * that user's conversations
   * @param {Object} Context - destructured { auth } prop
   */
  async index({ auth }) {
    const user = await User.find(auth.user.id);

    return user.conversations().fetch();
  }

  /**
   * create a conversation between two users if one does not already exist
   * @param {Object} Context - destructured { request, auth } props
   */
  async findOrStore({ request, auth }) {
    if (!request.conversationUserMatch) {
      // instantiate new Conversation and assign the users to it
      const conversation = new Conversation();
      const user = await User.find(auth.user.id);
      const recipient = await User.find(request.body.recipientId);

      await conversation.users().saveMany([user, recipient]);

      return {
        success: true,
        message: 'A new conversation has been created',
        conversation
      };
    }

    // find the existing conversation
    const conversationId = request.conversationUserMatch[0].conversation_id;
    const conversation = await Conversation.find(conversationId);
    const messages = await conversation.messages().fetch();

    return {
      success: true,
      message: 'This conversation already existed',
      conversation,
      messages
    };
  }

  /**
   * find and return a conversation with the given id
   * @param {integer} conversationId
   */
  async show({ request }) {
    const conversation = await Conversation.find(request.params.id);
    const messages = await conversation.messages().fetch();

    return {
      success: true,
      conversation,
      messages
    };
  }

  /**
   * delete a conversation from the database
   * @param {Object} Context
   */
  async destroy({ request }) {
    const conversation = await Conversation.find(request.params.id);

    await conversation.delete();

    return `Conversation with id:${conversation.id} has been deleted.`;
  }
}

module.exports = ConversationController;
