'use strict'

const Message = use('App/Models/Message')

class MessageController {
  async index () {
  }

  async create () {
  }

  async store ({ request, response, auth }) {
    const { receipient, body } = request.all()
    const userId = auth.user.id

    // TODO: create a new conversation here, if there isn't
    // already one existing between these two users

    const message = await Message.create({
      user_id: userId,
      // pass in the conversation id here
      conversation_id: 1,
      body
    })

    return message
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
