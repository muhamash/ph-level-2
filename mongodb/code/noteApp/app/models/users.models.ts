import { model, Schema } from "mongoose";
import bcrypt from "bcryptjs";
import { IUser } from "../interfaces/user.interface";
import validator from "validator";


const userSchema = new Schema<IUser>( {
    firstName: {
        type: String,
        required: [ true, "Must require the first name" ],
        trim: true

    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true,
        min: [ 18, "Age should not below than {VALUE}" ],
        unique: [ true, "Email must be unique; {VALUE} already exists" ],
        // validate: {
        //     validator: function (value) {
        //         return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
        //     },
        //     message: function (props) {
        //         return `Email ${props.value} is not valid email`
        //     }
        // }
        validate: [ validator.isEmail, "Invalid Email sent {VALUE}" ]
    },
    password: {
        type: String,
        required: [ true, "Password is required" ],
        min: [ 8, "Password should longer than 7 character" ]
    },
    role: {
        type: String,
        // enum: ['user', 'admin'],
        enum: {
            values: [ 'user', 'admin' ],
            message: "Role is not valid rather it got {VALUE}"
        }
        default: 'user'
    }
}, {
    versionKey: false,
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
} );

userSchema.method("hashPassword", async function (plainPassword: string) {
    const password = await bcrypt.hash(plainPassword, 10)
    return password
})
userSchema.static("hashPassword", async function (plainPassword: string) {
    const password = await bcrypt.hash(plainPassword, 10)
    return password
})

// Pre Hooks

// Document Middleware

userSchema.pre("save", async function (next) {
    this.password = await bcrypt.hash(this.password, 10)
    next()
})

//Query Middlware

userSchema.pre("find", function (next) {
    console.log("Inside pre find hook");
    next()
})


//Post Hook

//Document Middlware
userSchema.post('save', function (doc, next) {
    console.log(`${doc.email} has been saved`);
    next()
});

//Query Middlware 
userSchema.post("findOneAndDelete", async function (doc, next) {
    if (doc) {
        console.log(doc);
        await Note.deleteMany({ user: doc._id })
    }

    next()
})

userSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`
})


export const User = model("User", userSchema)