'use strict'

const User = use('App/Models/User')

class UserController {
  /**
   * store a new user if that user does not already exist
   * @param {Object} Context (destructure request and response)
   */
  async store ({request, response}) {
    const { body } = request

    const user = await User.findOrCreate(body)
    const { $attributes: { username, email } } = user

    return response.json({
      success: true,
      username,
      email
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

module.exports = UserController
