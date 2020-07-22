const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: { type: String },
    password: { type: String },
    email: { type: String }
});

UserSchema.statics.editPassword = function (id, password) {
    // const Lyric = mongoose.model('lyric');

    return this.findById(id)
        .then(user => {
            // const lyric = new Lyric({ content, song })
            // song.lyrics.push(lyric)
            user.password = password;
            return Promise.all([user.save()])
                // .then(([lyric, song]) => song);
                .then(([user]) => user)
        });
}

// UserSchema.statics.findLyrics = function (id) {
//     return this.findById(id)
//         .populate('lyrics')
//         .then(song => song.lyrics);
// }

mongoose.model('user', UserSchema);
