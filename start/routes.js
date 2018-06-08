/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route');

Route.get('/', () => ({ greeting: 'Hello App server is running' }));

// prefix all routes with 'api/v1'
Route.group(() => {
  // Users
  Route.post('users', 'UserController.store');
  Route.post('login', 'UserController.login');
  Route.get('users/:id', 'UserController.show').middleware('auth');
  Route.patch('users/:id', 'UserController.update').middleware('auth');
  Route.delete('users/:id', 'UserController.destroy').middleware('auth');

  // Facebook Auth
  Route.get('login/facebook', 'LoginController.redirect');
  Route.get('facebook/callback', 'LoginController.callback');

  // Conversations
  Route.get('conversations', 'ConversationController.index').middleware('auth');
  Route.post('conversations', 'ConversationController.findOrStore')
    .middleware('auth')
    .middleware('MatchConversations');
  Route.get('conversations/:id', 'ConversationController.show').middleware(
    'auth'
  );
  Route.delete(
    'conversations/:id',
    'ConversationController.destroy'
  ).middleware('auth');

  // Messages
  Route.post('messages', 'MessageController.store').middleware('auth');
  Route.delete('messages/:id', 'MessageController.destroy').middleware('auth');
}).prefix('api/v1');
