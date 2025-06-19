import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      lowercase: true,
      trim: true,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
    },
    fullName: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      unique: true,
      sparse: true, // In case not all users set it
    },
    password: {
      type: String,
      required: true,
      minLength: 6,
    },
    profilePic: {
      type: String,
      default: "",
    },
    coverPic: {
      type: String,
      default: "",
    },
    bio: {
      type: String,
      maxlength: 160,
    },
    status: {
      type: String,
      enum: ["Online", "Offline", "Typing", "Away"],
      default: "Offline",
    },
    lastSeen: {
      type: Date,
      default: Date.now,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
    blockedUsers: [
      {
        type: String, // store UIDs
      },
    ],
    mutedChats: [
      {
        type: String, // chat IDs
      },
    ],
    archivedChats: [
      {
        type: String,
      },
    ],
    pinnedChats: [
      {
        type: String,
      },
    ],
    chatList: [
      {
        type: String, // chat IDs
      },
    ],
    unreadCountMap: {
      type: Map,
      of: Number,
      default: {},
    },
    friends: [
      {
        type: String, // user UIDs
      },
    ],
    nicknames: {
      type: Map,
      of: String,
      default: {},
    },
    theme: {
      type: String,
      default: "light",
    },
    emoji: {
      type: String,
      default: "👍",
    },
    notificationsEnabled: {
      type: Boolean,
      default: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    isDeleted: {
      type: Boolean,
      default: false,
    },
    language: {
      type: String,
      default: "en",
    },
    pushToken: {
      type: String,
    },
    devices: [
      {
        type: String,
      },
    ],
    twoFactorEnabled: {
      type: Boolean,
      default: false,
    },
    location: {
      lat: Number,
      lng: Number,
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);

export default User;
