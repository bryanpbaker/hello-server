const Db = use('Database');
const User = use('App/Models/User');
const Message = use('App/Models/Message');
const Conversation = use('App/Models/Conversation');

class MessageController {
  async index() {}

  async create() {}

  async store({ request, auth }) {
    const userId = auth.user.id;
    const { recipientId } = request.body;

    if (!request.conversationUserMatch) {
      // instantiate new Conversation and assign the users to it
      const conversation = new Conversation();
      const user = await User.find(userId);
      const recipient = await User.find(recipientId);

      await conversation.users().saveMany([user, recipient]);

      return {
        success: true,
        conversation
      };
    }

    // find the existing conversation
    const conversationId = request.conversationUserMatch[0].conversation_id;
    const conversation = await Conversation.find(conversationId);

    return {
      success: true,
      conversation
    };
  }

  async show() {}

  async edit() {}

  async update() {}

  async destroy() {}
}

module.exports = MessageController;
