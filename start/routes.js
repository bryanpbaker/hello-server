'use strict'

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

const Route = use('Route')

Route.get('/', ({ request }) => {
  return { greeting: 'Hello world in JSON' }
})

// User
Route
  .get('users/:id', 'UserController.show')
  .middleware('auth')
Route.post('users', 'UserController.store')
Route.post('login', 'UserController.login')

// Conversation
Route.post('conversations', 'ConversationController.store')

// Message
Route
  .post('messages', 'MessageController.store')
  .middleware('auth')
