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

    // // find the recipient specified in the request
    // const recipient = await User.find(recipientId);
    // // find the user who created the message
    // const user = await User.find(userId);
    // // grab the conversations belonging to the recipient
    // const recipientConversations = await recipient.conversations().fetch();
    // // create an array of the recipients conversation ids
    // const recipientConversationIds = recipientConversations.rows.map(
    //   convo => convo.$attributes.id
    // );
    // // check if the user has any conversations with an id matching
    // // any one of the recipient's conversation ids
    // const userConversations = await user
    //   .conversations()
    //   .whereInPivot('conversation_id', recipientConversationIds)
    //   .fetch();

    // // if a conversation exists between the two users, fetch that conversation
    // if (userConversations.rows.length > 0) {
    //   return 'yes!';
    // }
    // return 'no!';
    // instantiate new Conversation if one does not yet exist
    // between the two users
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
