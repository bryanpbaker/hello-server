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

    const message = await Message.create({
      user_id: userId,
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
