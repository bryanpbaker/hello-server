const Db = use('Database');
const User = use('App/Models/User');
const Message = use('App/Models/Message');
const Conversation = use('App/Models/Conversation');

class MessageController {
  async index() {}

  async create() {}

  async store({ request, auth }) {
    const { recipientId, message } = request.body;
    const userId = auth.user.id;
    const conversation = new Conversation();
    const user1 = await User.find(userId);
    const user2 = await User.find(recipientId);

    await conversation.users().saveMany([user1, user2]);

    return 'Success!';
  }

  async show() {}

  async edit() {}

  async update() {}

  async destroy() {}
}

module.exports = MessageController;
