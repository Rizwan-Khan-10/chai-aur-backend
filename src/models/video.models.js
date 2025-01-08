import mongoose from 'mongoose';
import mongooseAggregatePaginate from 'mongoose-aggregate-paginate-v2';

const videoSchema=new mongoose.Schema({
    videoFile:{
        type:String, //cloudinary url
        requires:true
    },
    thumbnail:{
        type:String, //cloudinary url
        requires:true
    },
    title:{
        type:String,
        requires:true
    },
    description:{
        type:String,
        requires:true
    },
    duration:{
        type:String,
        requires:true
    },
    views:{
        type:String,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
},{timestamps:true});

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video",videoSchema);