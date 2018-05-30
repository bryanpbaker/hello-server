'use strict'

const Conversation = use('App/Models/Conversation')
const Message = use('App/Models/Message')

class MessageController {
  async index () {
  }

  async create () {
  }

  async store ({ request, response, auth }) {
    const data = request.all()
    const userId = auth.user.id

    // TODO - findOrCreate conversation between sender and recipient
    const conversation = await Conversation.find(2)
    const messages = await conversation.messages().create({
      user_id: userId,
      conversation_id: conversation.id,
      body: data.body
    })
  }

  async show () {
  }

  async edit () {
  }

  async update () {
  }

  async destroy () {
  }
}

module.exports = MessageController
