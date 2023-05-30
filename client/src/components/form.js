import React, { useState } from "react"
import "./form.css"
import Sign from "./sign"
import DocumentVerification from "./DocumentVerification"
import AddressForm from "./AddressForm"
import Declaration from "./Declaration"
import Nitjsr from "../assets/logo.png"
const AdmissionForm = () => {
  const [formData, setFormData] = useState({
    fullNameEnglish: "",
    fullNameHindi: "",
    aadhaarNo: "",
    gateNetScore: "",
    qualifyingYear: "",
    semester: "",
    branch: "",
    category: "",
    subCategory: "",
    batch: "",
    email: "",
    dateOfBirth: "",
    placeOfBirth: "",
    maritalStatus: "",
    religion: "",
    nationality: "",
    motherTongue: "",
    bloodGroup: "",
    fatherName: "",
    fatherOccupation: "",
    motherName: "",
    motherOccupation: "",
    identificationMark: "",
    sex: "",
    height: "",
    weight: "",
    /* communicationAddress: {
      address: "",
      city: "",
      phoneNumber: "",
      mobileNumber: "",
      nearestBusStation: "",
      nearestRailwayStation: "",
    },
    permanentAddress: {
      address: "",
      city: "",
      phoneNumber: "",
      mobileNumber: "",
      nearestBusStation: "",
      nearestRailwayStation: "",
    }, */
    ddDetails: [
      {
        transactionIdNo: "",
        amount: "",
        date: "",
        bankName: "",
      },
    ],
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

  /* const handleAddressChange = (e) => {
    const { name, value } = e.target
    const addressType = e.target.dataset.addressType
    setFormData((prevFormData) => ({
      ...prevFormData,
      [addressType]: {
        ...prevFormData[addressType],
        [name]: value,
      },
    }))
  } */

  const handleDdDetailsChange = (e, index) => {
    const { name, value } = e.target
    const updatedDdDetails = [...formData.ddDetails]
    updatedDdDetails[index] = {
      ...updatedDdDetails[index],
      [name]: value,
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      ddDetails: updatedDdDetails,
    }))
  }

  /* const handleAddDdDetails = () => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      ddDetails: [...prevFormData.ddDetails, {}],
    }))
  } */

  const handleRemoveDdDetails = (index) => {
    setFormData((prevFormData) => {
      const updatedDdDetails = [...prevFormData.ddDetails]
      updatedDdDetails.splice(index, 1)
      return {
        ...prevFormData,
        ddDetails: updatedDdDetails,
      }
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
  }

  return (
    <form
      className="admission-form"
      onSubmit={handleSubmit}
    >
      <div className="profile flex justify-center py-4">
        <img
          src={Nitjsr}
          // className={styles.profile_img}
          alt="avatar"
        />

        <label className="top-label heading">
          NATIONAL INSTITUTE OF TECHNOLOGY JAMSHEDPUR , INDIA <br />
          राष्ट्रीय प्रौद्योगिकी संस्थान जमशेदपुर
        </label>
      </div>

      <h2 className="top-label">
        (An Institute of National importance under MHRD, Government of India)
      </h2>
      <h2>Admission Form</h2>
      <label>
        Full Name (English Capitals):
        <input
          type="text"
          name="fullNameEnglish"
          placeholder="Name (English)"
          value={formData.fullNameEnglish.toUpperCase()}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Full Name (Hindi):
        <input
          type="text"
          name="fullNameHindi"
          placeholder="Name (Hindi)"
          value={formData.fullNameHindi}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Aadhaar No:
        <input
          type="number"
          name="aadhaarNo"
          placeholder="222222222222"
          value={formData.aadhaarNo}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        GATE/NET Score:
        <input
          type="text"
          name="gateNetScore"
          value={formData.gateNetScore}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Qualifying Year:
        <input
          type="text"
          min={1000}
          max={9999}
          name="qualifyingYear"
          value={formData.qualifyingYear}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Semester:
        <input
          type="text"
          name="semester"
          value={formData.semester}
          onChange={handleChange}
        />
      </label>

      <label>
        Branch:
        <select
          name="branch"
          value={formData.branch}
          onChange={handleChange}
        >
          <option value="">Select</option>
          <option value="Civil Engineering">Civil Engineering</option>
          <option value="Computer Science and Engineering">
            Computer Science and Engineering
          </option>
          <option value="Electronics and Communication Engineering">
            Electronics and Communication Engineering
          </option>
          <option value="Electrical Engineering">Electrical Engineering</option>
          <option value="Humanities, Social Sciences and Management">
            Humanities, Social Sciences and Management
          </option>
          <option value="Mathematics">Mathematics</option>
          <option value="Mechanical Engineering">Mechanical Engineering</option>
          <option value="Metallurgical and Materials Engineering">
            Metallurgical and Materials Engineering
          </option>
          <option value="Physics">Physics</option>
          <option value="Production and Industrial Engineering">
            Production and Industrial Engineering
          </option>
        </select>
      </label>

      <label>
        Category:
        <input
          type="text"
          name="category"
          value={formData.category}
          onChange={handleChange}
        />
      </label>
      <label>
        Sub-Category:
        <input
          type="text"
          name="subCategory"
          value={formData.subCategory}
          onChange={handleChange}
        />
      </label>
      <label>
        Batch:
        <input
          type="text"
          name="batch"
          value={formData.batch}
          onChange={handleChange}
        />
      </label>
      <label>
        E-mail ID:
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Date of Birth:
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Place of Birth:
        <input
          type="text"
          name="placeOfBirth"
          value={formData.placeOfBirth}
          onChange={handleChange}
        />
      </label>
      <label>
        Marital Status:
        <input
          type="text"
          name="maritalStatus"
          value={formData.maritalStatus}
          onChange={handleChange}
        />
      </label>
      <label>
        Religion:
        <input
          type="text"
          name="religion"
          value={formData.religion}
          onChange={handleChange}
        />
      </label>
      <label>
        Nationality:
        <input
          type="text"
          name="nationality"
          value={formData.nationality}
          onChange={handleChange}
        />
      </label>
      <label>
        Mother Tongue:
        <input
          type="text"
          name="motherTongue"
          value={formData.motherTongue}
          onChange={handleChange}
        />
      </label>
      <label>
        Blood Group:
        <input
          type="text"
          name="bloodGroup"
          value={formData.bloodGroup}
          onChange={handleChange}
        />
      </label>
      <label>
        Father's Name:
        <input
          type="text"
          name="fatherName"
          value={formData.fatherName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Father's Occupation:
        <input
          type="text"
          name="fatherOccupation"
          value={formData.fatherOccupation}
          onChange={handleChange}
        />
      </label>
      <label>
        Mother's Name:
        <input
          type="text"
          name="motherName"
          value={formData.motherName}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Mother's Occupation:
        <input
          type="text"
          name="motherOccupation"
          value={formData.motherOccupation}
          onChange={handleChange}
        />
      </label>
      <label>
        Identification Mark:
        <input
          type="text"
          name="identificationMark"
          value={formData.identificationMark}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Sex:
        <select
          name="sex"
          value={formData.sex}
          onChange={handleChange}
          required
        >
          <option value="">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </label>
      <label>
        Height (in cm):
        <input
          type="number"
          name="height"
          value={formData.height}
          onChange={handleChange}
        />
      </label>
      <label>
        Weight (in Kg):
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
        />
      </label>
      <AddressForm />
      {/* <h3>Address for Communication</h3>
      <label>
        Address:
        <input
          type="text"
          name="address"
          data-address-type="communicationAddress"
          value={formData.communicationAddress.address}
          onChange={handleAddressChange}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          name="city"
          data-address-type="communicationAddress"
          value={formData.communicationAddress.city}
          onChange={handleAddressChange}
        />
      </label>
      <label>
        Phone No. (Land line):
        <input
          type="tel"
          pattern="[0-9*]"
          name="phoneNumber"
          data-address-type="communicationAddress"
          value={formData.communicationAddress.phoneNumber}
          onChange={handleAddressChange}
        />
      </label>
      <label>
        Mobile No.:
        <input
          type="tel"
          pattern="[0-9*]"
          name="mobileNumber"
          data-address-type="communicationAddress"
          value={formData.communicationAddress.mobileNumber}
          onChange={handleAddressChange}
        />
      </label>
      <label>
        Nearest Bus Station:
        <input
          type="text"
          name="nearestBusStation"
          data-address-type="communicationAddress"
          value={formData.communicationAddress.nearestBusStation}
          onChange={handleAddressChange}
        />
      </label>
      <label>
        Nearest Railway Station:
        <input
          type="text"
          name="nearestRailwayStation"
          data-address-type="communicationAddress"
          value={formData.communicationAddress.nearestRailwayStation}
          onChange={handleAddressChange}
        />
      </label>

      <h3>Permanent Address</h3>
      <label>
        Address:
        <input
          type="text"
          name="address"
          data-address-type="permanentAddress"
          value={formData.permanentAddress.address}
          onChange={handleAddressChange}
        />
      </label>
      <label>
        City:
        <input
          type="text"
          name="city"
          data-address-type="permanentAddress"
          value={formData.permanentAddress.city}
          onChange={handleAddressChange}
        />
      </label>
      <label>
        Phone No. (Land line):
        <input
          type="text"
          name="phoneNumber"
          data-address-type="permanentAddress"
          value={formData.permanentAddress.phoneNumber}
          onChange={handleAddressChange}
        />
      </label>
      <label>
        Mobile No.:
        <input
          type="text"
          name="mobileNumber"
          data-address-type="permanentAddress"
          value={formData.permanentAddress.mobileNumber}
          onChange={handleAddressChange}
        />
      </label>
      <label>
        Nearest Bus Station:
        <input
          type="text"
          name="nearestBusStation"
          data-address-type="permanentAddress"
          value={formData.permanentAddress.nearestBusStation}
          onChange={handleAddressChange}
        />
      </label>
      <label>
        Nearest Railway Station:
        <input
          type="text"
          name="nearestRailwayStation"
          data-address-type="permanentAddress"
          value={formData.permanentAddress.nearestRailwayStation}
          onChange={handleAddressChange}
        />
      </label> */}

      <h3>Demand Draft Details</h3>
      {formData.ddDetails.map((ddDetail, index) => (
        <div key={index}>
          <label>
            Transaction ID No.:
            <input
              type="text"
              name="transactionIdNo"
              value={ddDetail.transactionIdNo || ""}
              onChange={(e) => handleDdDetailsChange(e, index)}
            />
          </label>
          <label>
            Amount:
            <input
              type="text"
              name="amount"
              value={ddDetail.amount || ""}
              onChange={(e) => handleDdDetailsChange(e, index)}
            />
          </label>
          <label>
            Date:
            <input
              type="text"
              name="date"
              value={ddDetail.date || ""}
              onChange={(e) => handleDdDetailsChange(e, index)}
            />
          </label>
          <label>
            Name of the Bank:
            <input
              type="text"
              name="bankName"
              value={ddDetail.bankName || ""}
              onChange={(e) => handleDdDetailsChange(e, index)}
            />
          </label>
          {index > 0 && (
            <button
              type="button"
              onClick={() => handleRemoveDdDetails(index)}
            >
              Remove DD Details
            </button>
          )}
        </div>
      ))}
      <Sign />
      {/* <button
        type="button"
        onClick={handleAddDdDetails}
      >
        Add DD Details
      </button> */}

      <DocumentVerification />
      <Declaration />
      <button type="submit">Submit</button>
    </form>
  )
}

export default AdmissionForm