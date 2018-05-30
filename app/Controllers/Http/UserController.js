'use strict'

const User = use('App/Models/User')

class UserController {
  /**
   * store a new user if that user does not already exist
   * return existing user if it the user does exist
   * @param {Object} Context (destructure request and response)
   */
  async store ({request, response}) {
    const { body } = request

    const user = await User.findOrCreate(
      { email: body.email },
      {
        body
      }
    )
    const { $attributes: { username, email } } = user

    return {
      success: true,
      username,
      email
    }
  }

  /**
   * log a user in with email and password
   * @param {Object} Context
   */
  async login ({ request, auth }) {
    const { email, password } = request.all()

    const { type, token } = await auth.attempt(email, password)

    return {
      success: true,
      type,
      token
    }
  }

  /**
   * attempt to authenticate a user with the provided JWT
   * @param {Object} Context
   */
  async show ({ auth, params }) {
    if (auth.user.id !== Number(params.id)) {
      return 'You cannot see someone else\'s profile'
    }

    return auth.user
  }

  async update () {
  }

  async destroy () {
  }
}

module.exports = UserController
