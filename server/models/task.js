import { Mongoose, Schema } from "mongoose"
const taskSchema = new Schema({
    title: { type: String, required: true },
    date: { type: Date, default: new Date() },
    priority: {
        type: String,
        default: "normal",
        enum: ["high", "medium", "low"],
    },
    stage: {
        type: String,
        default: "todo",
        enum: ["todo", "in progress", "completed"],
    },
    activities: {
        type: {
            type: String,
            default: "assigned",
            enum: [
                "assigned",
                "started",
                "in progress",
                "bug",
                "completed",
                "commented",
            ],
        },
        activity:String,
        date:{
            type:Date,
            default:new Date(),
            by:{type:Schema.Types.ObjectId,ref:"User"}
        }


    }

})