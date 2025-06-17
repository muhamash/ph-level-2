import { model, Schema } from "mongoose"
import { INotes } from "../interfaces/note.interface"

const noteSchema = new Schema<INotes>(
    {
        title: { type: String, required: true, trim: true , max:[20, "Title -> {VALUE} should not longer than 20 character"]},
        content: { type: String, default: '' },
        category: {
            type: String,
            enum: ["personal", "work", "study", "other"],
            default: "personal"
        },
        pinned: {
            type: Boolean,
            default: false
        },
        tags: {
            label: { type: String, required: true },
            color: { type: String, default: 'gray' }
        }
    }, {
    versionKey: false,
    timestamps: true,
}

)

export const Note = model<INotes>("Note", noteSchema)