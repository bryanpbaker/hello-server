'use strict'

class UserController {
  async index () {
  }

  async create () {
  }

  async store ({request, response}) {
    console.log('==============REQ============', request.body)
    console.log('==============RES============', response)
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

module.exports = UserController
