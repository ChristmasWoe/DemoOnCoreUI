const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HookSchema = new Schema({
    name: { type: String },
    price: { type: String },
    hid: { type: String },
    material: { type: String },
    description: { type: String },
});


HookSchema.statics.editHook = function (id, newHookParams) {
    return this.findById(id)
        .then(hook => {
            (newHookParams.hid) ? hook.hid = newHookParams.hid : '';
            (newHookParams.name) ? hook.name = newHookParams.name : '';
            (newHookParams.price) ? hook.price = newHookParams.price : '';
            (newHookParams.material) ? hook.material = newHookParams.material : '';
            (newHookParams.description) ? hook.description = newHookParams.description : '';
            console.log(Promise)
            return hook.save();
        })
}

mongoose.model('hook', HookSchema);
