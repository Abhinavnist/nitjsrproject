import mongoose from "mongoose"

const mongoose = require("mongoose")

const AdmissionSchema = new mongoose.Schema({
  fullNameEnglish: {
    type: String,
    uppercase: true,
    required: true,
  },
  fullNameHindi: {
    type: String,
    required: true,
  },
  aadhaarNo: {
    type: Number,
    required: true,
  },
  gateNetScore: {
    type: String,
    required: true,
  },
  qualifyingYear: {
    type: String,
    required: true,
  },
  semester: {
    type: String,
  },
  branch: {
    type: String,
    enum: [
      "Civil Engineering",
      "Computer Science and Engineering",
      "Electronics and Communication Engineering",
      "Electrical Engineering",
      "Humanities, Social Sciences and Management",
      "Mathematics",
      "Mechanical Engineering",
      "Metallurgical and Materials Engineering",
      "Physics",
      "Production and Industrial Engineering",
    ],
  },
  category: {
    type: String,
  },
  subCategory: {
    type: String,
  },
  batch: {
    type: String,
  },
  email: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: Date,
    required: true,
  },
  placeOfBirth: {
    type: String,
  },
  maritalStatus: {
    type: String,
  },
  religion: {
    type: String,
  },
  nationality: {
    type: String,
  },
  motherTongue: {
    type: String,
  },
  bloodGroup: {
    type: String,
  },
  fatherName: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
  },
  motherName: {
    type: String,
    required: true,
  },
  motherOccupation: {
    type: String,
  },
  identificationMark: {
    type: String,
    required: true,
  },
  sex: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  height: {
    type: Number,
  },
  weight: {
    type: Number,
  },
  // address field would be defined separately, either as embedded sub-document or a separate model/schema

  residencePincode: {
    type: String,
    required: true,
  },
  residenceCity: {
    type: String,
    required: true,
  },
  residenceStreetAddress: {
    type: String,
    required: true,
  },
  residenceState: {
    type: String,
    required: true,
  },
  residenceCountry: {
    type: String,
    required: true,
  },
  residencePhone: {
    type: String,
  },
  residenceMobile: {
    type: String,
  },
  residenceBusStation: {
    type: String,
  },
  residenceRailwayStation: {
    type: String,
  },
  permanentPincode: {
    type: String,
    required: true,
  },
  permanentCity: {
    type: String,
    required: true,
  },
  permanentStreetAddress: {
    type: String,
    required: true,
  },
  permanentState: {
    type: String,
    required: true,
  },
  permanentCountry: {
    type: String,
    required: true,
  },
  permanentPhone: {
    type: String,
  },
  permanentMobile: {
    type: String,
  },
  permanentBusStation: {
    type: String,
  },
  permanentRailwayStation: {
    type: String,
  },

  ddDetails: [
    {
      transactionIdNo: {
        type: String,
      },
      amount: {
        type: String,
      },
      date: {
        type: String,
      },
      bankName: {
        type: String,
      },
    },
  ],
})

module.exports = mongoose.model("Admission", AdmissionSchema)
