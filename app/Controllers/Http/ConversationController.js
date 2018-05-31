'use strict';

const Conversation = use('App/Models/Conversation');

class ConversationController {
  async index() {}

  async store() {
    const conversation = await Conversation.create();
  }

  async show() {}

  async edit() {}

  async update() {}

  async destroy() {}
}

module.exports = ConversationController;
