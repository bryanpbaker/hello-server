const User = use('App/Models/User');

class UserController {
  /**
   * store a new user if that user does not already exist
   * return existing user if it the user does exist
   * @param {Object} Context (destructure request and response)
   */
  async store({ request }) {
    const { body } = request;
    const user = await User.findOrCreate(
      { email: body.email.toLowerCase() },
      {
        email: body.email.toLowerCase(),
        username: body.username.toLowerCase(),
        password: request.body.password
      }
    );
    const {
      $attributes: { username, email }
    } = user;

    return {
      success: true,
      username,
      email
    };
  }

  /**
   * log a user in with email and password
   * @param {Object} Context
   */
  async login({ request, auth }) {
    const { email, password } = request.all();
    const { type, token } = await auth.attempt(email, password);

    return {
      success: true,
      type,
      token
    };
  }

  /**
   * attempt to authenticate a user with the provided JWT
   * @param {Object} Context
   */
  async show({ auth, params }) {
    if (auth.user.id !== Number(params.id)) {
      return 'You are not authorized';
    }

    return {
      success: true,
      id: auth.user.id,
      email: auth.user.email
    };
  }

  /**
   * find a user by id and update that user
   * @param {Object} Context
   */
  async update({ request }) {
    const {
      body,
      params: { id }
    } = request;
    const user = await User.find(id);

    user.username = body.username;
    user.email = body.email;

    user.save();

    return `The user with the id: ${user.id} has been updated.`;
  }

  /**
   * find a user with the given id and delete
   * @param {Object} Context
   */
  async destroy({ request }) {
    const {
      params: { id }
    } = request;
    const user = await User.find(id);
    await user.delete();

    return `The user with the id: ${id} has been deleted.`;
  }
}

module.exports = UserController;
