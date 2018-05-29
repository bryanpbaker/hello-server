'use strict'

const ConversationUser = use('App/Models/Conversationuser')

class ConversationController {
  async index () {
  }

  async create () {
  }

  async store ({ request, response }) {
    const { body } = request

    console.log(body)
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

module.exports = ConversationController
