import mongoose, { Schema } from 'mongoose';

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    minLength: [5, 'Name must be 5 character long']
  },
  description: {
    type: String,
    required: true,
    unique: true,
    minLength: [10, 'Description must be 10 character long']
  },
  category: {
    type: String
  },
  meetups: {
    type: Schema.Types.ObjectId,
    ref: 'Meetup'
  }
}, { timestamps: true });

export default mongoose.model('Group', GroupSchema);
