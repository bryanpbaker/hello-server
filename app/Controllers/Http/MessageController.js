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

    // TODO DEFINE USER AND RECIPIENT
    const recipient = await User.find(recipientId);
    const user = await User.find(userId);

    // TODO: check if conversation exists
    let recipientConversations = await recipient
      .conversations()
      .whereInPivot('user_id', [recipientId])
      .fetch();
    recipientConversations = recipientConversations.rows.map(
      convo => convo.$attributes.id
    );
    const userConversations = await user
      .conversations()
      .whereInPivot('conversation_id', recipientConversations)
      .fetch();

    return userConversations;

    // const conversation = new Conversation();
    // const user1 = await User.find(userId);
    // const user2 = await User.find(recipientId);

    // await conversation.users().saveMany([user1, user2]);

    // return 'Success!';
  }

  async show() {}

  async edit() {}

  async update() {}

  async destroy() {}
}

module.exports = MessageController;
