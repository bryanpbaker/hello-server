const User = use('App/Models/User');

class LoginController {
  async redirect({ ally }) {
    await ally.driver('facebook').redirect();
  }

  async callback({ ally, auth }) {
    try {
      const fbUser = await ally.driver('facebook').getUser();

      // user details to be saved
      const userDetails = {
        email: fbUser.getEmail(),
        username: fbUser.getEmail(),
        token: fbUser.getAccessToken(),
        login_source: 'facebook'
      };

      const user = await User.findOrCreate(
        { email: fbUser.getEmail() },
        userDetails
      );
      await auth.login(user);

      return 'Logged in';
    } catch (error) {
      return 'Unable to authenticate. Try again later';
    }
  }
}

module.exports = LoginController;
