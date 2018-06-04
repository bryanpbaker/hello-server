const Conversation = use('App/Models/Conversation');

class ConversationController {
  async index() {}

  async store({ request, auth }) {
    return request.conversationUserMatch;
  }

  async show() {}

  async edit() {}

  async update() {}

  async destroy() {}
}

module.exports = ConversationController;
