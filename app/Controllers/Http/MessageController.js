const Db = use('Database');
const User = use('App/Models/User');
const Message = use('App/Models/Message');
const Conversation = use('App/Models/Conversation');

class MessageController {
  async index() {}

  async store({ request, auth }) {
    const { conversationId, message } = request.all();
    const conversation = await Conversation.find(conversationId);
    const newMessage = await conversation.messages().create({
      user_id: auth.user.id,
      conversation_id: conversation.id,
      body: message
    });

    return 'Message has been created!';
  }

  async show() {}

  async edit() {}

  async update() {}

  async destroy() {}
}

module.exports = MessageController;
