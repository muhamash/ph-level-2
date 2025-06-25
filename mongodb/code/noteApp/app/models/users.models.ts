import bcrypt from "bcryptjs";
import { Model, model, Schema } from "mongoose";
import validator from "validator";
import { IAddress, IUser, UserInstanceMethods } from "../interfaces/user.interface";

const addressSchema = new Schema<IAddress>( {
    city: { type: String },
    street: { type: String },
    zip: { type: Number }
}, {
    _id: false
} );

const userSchema = new Schema<IUser, Model<IUser>, UserInstanceMethods>( {
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
        // uppercase,
        // enum: ['user', 'admin'],
        enum: {
            values: [ 'user', 'admin' ],
            message: "Role is not valid rather it got {VALUE}"
        },
        default: 'user'
    },
    address: {
        type: addressSchema
    },
    // notes: [{
    //     type: Schema.Types.ObjectId,
    //     ref: "Note"
    // }]
}, {
    versionKey: false,
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true }
} );

// Instance Methods
userSchema.method( "hashPassword", async function ( plainPassword: string )
{
    const password = await bcrypt.hash( plainPassword, 10 )
    return password
} );

// Static Methods
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
        console.log("Query Middleware: User deleted", doc);
        await Note.deleteMany({ userId: doc._id })
    }

    next()
})

userSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`
} )

userSchema.virtual( 'addressInfo' ).get( function ()
{
    return `${ this.address?.city }, ${ this.address?.street }`
} );

userSchema.virtual( 'notes', {
    ref: "Note",
    localField: "_id",
    foreignField: "userId",
    justOne: false
} );

userSchema.virtual( 'notesCount', {
    ref: "Note",
    localField: "_id",
    foreignField: "userId",
    count: true
} );

userSchema.virtual( 'notesWithTags', {
    ref: "Note",
    localField: "_id",
    foreignField: "userId",
    match: { tags: { $exists: true, $ne: [] } },
    options: { sort: { createdAt: -1 } }
} );

userSchema.virtual( 'testVirtual' ).set( function ( value )
{
    console.log( "Setting value to testVirtual", value );
} ).get( function (value)
{
    console.log( "Getting value from testVirtual" );
    return `This is a test virtual value`;
} );

export const User = model("User", userSchema)