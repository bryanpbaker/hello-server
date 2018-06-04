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

Route.get('/', ({ request }) => ({ greeting: 'Hello world in JSON' }));

// prefix all routes with 'api/v1'
Route.group(() => {
  // User
  Route.post('users', 'UserController.store');
  Route.post('login', 'UserController.login');
  Route.get('users/:id', 'UserController.show').middleware('auth');
  Route.patch('users/:id', 'UserController.update').middleware('auth');
  Route.delete('users/:id', 'UserController.destroy').middleware('auth');

  // Conversation
  Route.post('conversations', 'ConversationController.store');

  // Message
  Route.post('messages', 'MessageController.store')
    .middleware('auth')
    .middleware('FindConversation');
}).prefix('api/v1');
