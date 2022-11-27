import mongoose from 'mongoose';
const schema = mongoose.Schema({
                                   tuit: String,
                                   likes: Number,
                                   liked: Boolean,
                               }, {collection: 'tuits'}); // collection name where tuits are stored in tuiter database
export default schema;