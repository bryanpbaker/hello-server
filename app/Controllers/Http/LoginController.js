const User = use('App/Models/User');

class LoginController {
  async verifyFbToken({ request, response, ally, auth }) {
    const { accessToken } = request.all();
    const user = await ally.driver('facebook').getUserByToken(accessToken);

    console.log(user);

    return {
      success: true
    };
  }
}

module.exports = LoginController;
