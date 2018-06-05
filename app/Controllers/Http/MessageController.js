const Message = use('App/Models/Message');
const Conversation = use('App/Models/Conversation');

class MessageController {
  async index() {}

  async store({ request, auth }) {
    const { conversationId, message } = request.all();
    const conversation = await Conversation.find(conversationId);
    await conversation.messages().create({
      user_id: auth.user.id,
      conversation_id: conversation.id,
      body: message
    });

    return 'Message has been created!';
  }

  async destroy({ request }) {
    const message = await Message.find(request.params.id);

    await message.delete();

    return 'Message has been deleted';
  }
}

module.exports = MessageController;
