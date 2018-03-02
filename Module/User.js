/**
 * Created by ahmed aj on 28/02/2018.
 */
var mongoose =require('mongoose');
// User schema
var userSchema=mongoose.Schema({
    username:String,
    passwd:String,
    email:String,
    accountType:String
});

var user=module.exports=mongoose.model('User',userSchema,'User');

//get user
module.exports.getusers=function (callback,limet) {
     user.find(callback).limit(limet).pretty;
}
module.exports.getusersById=function (id,callback) {
    var query={_id:id}
    user.findById(id,callback);
}

//add user
module.exports.addUser=function(User,callback){
    user.create(User,callback);
}

//update user
module.exports.updateUser=function(id,User,option,callback){
    var query={_id:id};
    var update= {
        username: User.username,
    passwd:User.passwd,
        email:User.email,
        accountType:User.accountType
    }
    user.findOneAndUpdate(query,update,option,callback);
}
//delete user
module.exports.DeleteUser=function(id,callback){
    var query={_id:id};
    user.remove(query,callback);
}
