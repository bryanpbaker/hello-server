const User = use('App/Models/User');

class LoginController {
  async verifyFbToken({ request, response, ally, auth }) {
    const body = request.all();

    return {
      success: true,
      message: 'test'
    };
  }
}

module.exports = LoginController;
