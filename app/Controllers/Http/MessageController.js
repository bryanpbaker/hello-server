'use strict'

class MessageController {
  async index () {
  }

  async create () {
  }

  async store ({ request, response }) {
    const { body } = request

    console.log(request)
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
