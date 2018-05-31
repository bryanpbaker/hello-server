'use strict';

const Model = use('Model');

class Conversation extends Model {
  users() {
    return this.belongsToMany('App/Models/Conversation');
  }

  messages() {
    return this.hasMany('App/Models/Message');
  }
}

module.exports = Conversation;
