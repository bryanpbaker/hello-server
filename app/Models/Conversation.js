const Model = use('Model');

class Conversation extends Model {
  users() {
    return this.belongsToMany('App/Models/User').withTimestamps();
  }

  messages() {
    return this.hasMany('App/Models/Message').withTimestamps();
  }
}

module.exports = Conversation;
