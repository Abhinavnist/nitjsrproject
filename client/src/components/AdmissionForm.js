import React, { useState } from "react"
import axios from "axios"
import "./AdmissionForm.css"
import Sign from "./sign"
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
    communicationAddress: {
      communicationPincode: "",
      communicationCity: "",
      communicationStreetAddress: "",
      communicationState: "",
      communicationCountry: "",
      communicationPhone: "",
      communicationMobile: "",
      communicationBusStation: "",
      communicationRailwayStation: "",
    },
    permanentAddress: {
      permanentPincode: "",
      permanentCity: "",
      permanentStreetAddress: "",
      permanentState: "",
      permanentCountry: "",
      permanentPhone: "",
      permanentMobile: "",
      permanentBusStation: "",
      permanentRailwayStation: "",
    },
    ddDetails: [
      {
        transactionIdNo: "",
        amount: "",
        date: "",
        bankName: "",
      },
    ],
    declaration: true,
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }))
  }

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

  const handleInputChange = async (event, addressType) => {
    const { name, value } = event.target

    setFormData((prevFormData) => ({
      ...prevFormData,
      [addressType]: {
        ...prevFormData[addressType],
        [name]: value,
      },
    }))

    if (value.length === 6) {
      await fetchAddressByPincode(value, addressType)
    }
  }

  const fetchAddressByPincode = async (pincode, addressType) => {
    try {
      const response = await axios.get(
        `https://api.postalpincode.in/pincode/${pincode}`
      )

      if (response.data && response.data.length > 0) {
        const { District, State, Country } = response.data[0].PostOffice[0]
        setFormData((prevFormData) => ({
          ...prevFormData,
          [addressType]: {
            ...prevFormData[addressType],
            [addressType === "communicationAddress"
              ? "communicationCity"
              : "permanentCity"]: District,
            [addressType === "communicationAddress"
              ? "communicationState"
              : "permanentState"]: State,
            [addressType === "communicationAddress"
              ? "communicationCountry"
              : "permanentCountry"]: Country,
          },
        }))
      } else {
        console.log("Invalid pincode or no data found")
      }
    } catch (error) {
      console.error("Error fetching address:", error)
    }
  }

  const handleSameAsCommunicationAddress = () => {
    const {
      communicationPincode,
      communicationCity,
      communicationStreetAddress,
      communicationState,
      communicationCountry,
      communicationPhone,
      communicationMobile,
      communicationBusStation,
      communicationRailwayStation,
    } = formData.communicationAddress

    setFormData((prevFormData) => ({
      ...prevFormData,
      permanentAddress: {
        ...prevFormData.permanentAddress,
        permanentPincode: communicationPincode,
        permanentCity: communicationCity,
        permanentStreetAddress: communicationStreetAddress,
        permanentState: communicationState,
        permanentCountry: communicationCountry,
        permanentPhone: communicationPhone,
        permanentMobile: communicationMobile,
        permanentBusStation: communicationBusStation,
        permanentRailwayStation: communicationRailwayStation,
      },
    }))
  }

  /* const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log(formData)
  } */

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
    // Make the POST request using Axios
    axios
      .post("http://localhost:8080/api/admissionform", formData)
      .then((response) => {
        console.log("Admission form submitted:", response.data)
        // Optionally, handle the response from the backend and show a success message to the user
      })
      .catch((error) => {
        console.error("Failed to submit admission form:", error)
        // Optionally, handle the error and show an error message to the user
      })
  }

  return (
    <form
      className="admission-form"
      onSubmit={handleSubmit}
    >
      <div className="container mx-auto">
        <div className="profile flex flex-col items-center justify-center py-4 md:flex-row md:justify-start">
          <img
            src={Nitjsr}
            // className="w-24 h-24 md:w-32 md:h-32 mr-4"
            alt="logo"
          />

          <label className="top-label heading text-center md:text-left">
            NATIONAL INSTITUTE OF TECHNOLOGY JAMSHEDPUR, INDIA <br />
            राष्ट्रीय प्रौद्योगिकी संस्थान जमशेदपुर
          </label>
        </div>

        <h2 className="top-label text-center md:text-left">
          (An Institute of National importance under MHRD, Government of India)
        </h2>
        <h2 className="top-label text-center md:text-left">Admission Form</h2>
      </div>

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

      <div>
        <h3>Communication Address</h3>
        <label htmlFor="communicationPincode">Pincode:</label>
        <input
          type="text"
          id="communicationPincode"
          name="communicationPincode"
          value={formData.communicationAddress.communicationPincode}
          onChange={(e) => handleInputChange(e, "communicationAddress")}
        />

        <label htmlFor="communicationCity">City:</label>
        <input
          type="text"
          id="communicationCity"
          name="communicationCity"
          value={formData.communicationAddress.communicationCity}
          readOnly
        />

        <label htmlFor="communicationStreetAddress">Street Address:</label>
        <input
          type="text"
          id="communicationStreetAddress"
          name="communicationStreetAddress"
          value={formData.communicationAddress.communicationStreetAddress}
          onChange={(e) => handleInputChange(e, "communicationAddress")}
        />

        <label htmlFor="communicationState">State:</label>
        <input
          type="text"
          id="communicationState"
          name="communicationState"
          value={formData.communicationAddress.communicationState}
          readOnly
        />

        <label htmlFor="communicationCountry">Country:</label>
        <input
          type="text"
          id="communicationCountry"
          name="communicationCountry"
          value={formData.communicationAddress.communicationCountry}
          readOnly
        />

        <label htmlFor="communicationPhone">Phone No. (Land line):</label>
        <input
          type="tel"
          id="communicationPhone"
          name="communicationPhone"
          value={formData.communicationAddress.communicationPhone}
          onChange={(e) => handleInputChange(e, "communicationAddress")}
        />

        <label htmlFor="communicationMobile">Mobile No.:</label>
        <input
          type="tel"
          id="communicationMobile"
          name="communicationMobile"
          value={formData.communicationAddress.communicationMobile}
          onChange={(e) => handleInputChange(e, "communicationAddress")}
        />

        <label htmlFor="communicationBusStation">Nearest Bus Station:</label>
        <input
          type="text"
          id="communicationBusStation"
          name="communicationBusStation"
          value={formData.communicationAddress.communicationBusStation}
          onChange={(e) => handleInputChange(e, "communicationAddress")}
        />

        <label htmlFor="communicationRailwayStation">
          Nearest Railway Station:
        </label>
        <input
          type="text"
          id="communicationRailwayStation"
          name="communicationRailwayStation"
          value={formData.communicationAddress.communicationRailwayStation}
          onChange={(e) => handleInputChange(e, "communicationAddress")}
        />

        <button
          className="small-button"
          onClick={handleSameAsCommunicationAddress}
        >
          Same as Communication Address
        </button>

        <h3>Permanent Address</h3>
        <label htmlFor="permanentPincode">Pincode:</label>
        <input
          type="text"
          id="permanentPincode"
          name="permanentPincode"
          value={formData.permanentAddress.permanentPincode}
          onChange={(e) => handleInputChange(e, "permanentAddress")}
        />

        <label htmlFor="permanentCity">City:</label>
        <input
          type="text"
          id="permanentCity"
          name="permanentCity"
          value={formData.permanentAddress.permanentCity}
          readOnly
        />

        <label htmlFor="permanentStreetAddress">Street Address:</label>
        <input
          type="text"
          id="permanentStreetAddress"
          name="permanentStreetAddress"
          value={formData.permanentAddress.permanentStreetAddress}
          onChange={(e) => handleInputChange(e, "permanentAddress")}
        />

        <label htmlFor="permanentState">State:</label>
        <input
          type="text"
          id="permanentState"
          name="permanentState"
          value={formData.permanentAddress.permanentState}
          readOnly
        />

        <label htmlFor="permanentCountry">Country:</label>
        <input
          type="text"
          id="permanentCountry"
          name="permanentCountry"
          value={formData.permanentAddress.permanentCountry}
          readOnly
        />

        <label htmlFor="permanentPhone">Phone No. (Land line):</label>
        <input
          type="tel"
          id="permanentPhone"
          name="permanentPhone"
          value={formData.permanentAddress.permanentPhone}
          onChange={(e) => handleInputChange(e, "permanentAddress")}
        />

        <label htmlFor="permanentMobile">Mobile No.:</label>
        <input
          type="tel"
          id="permanentMobile"
          name="permanentMobile"
          value={formData.permanentAddress.permanentMobile}
          onChange={(e) => handleInputChange(e, "permanentAddress")}
        />

        <label htmlFor="permanentBusStation">Nearest Bus Station:</label>
        <input
          type="text"
          id="permanentBusStation"
          name="permanentBusStation"
          value={formData.permanentAddress.permanentBusStation}
          onChange={(e) => handleInputChange(e, "permanentAddress")}
        />

        <label htmlFor="permanentRailwayStation">
          Nearest Railway Station:
        </label>
        <input
          type="text"
          id="permanentRailwayStation"
          name="permanentRailwayStation"
          value={formData.permanentAddress.permanentRailwayStation}
          onChange={(e) => handleInputChange(e, "permanentAddress")}
        />
      </div>

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

      <label>
        <input
          type="checkbox"
          name="fullNameEnglish"
          value={formData.declaration}
          onChange={handleChange}
          required
        />
        I hereby declare that the information given above is true to the best of
        my knowledge.
      </label>

      <button type="submit">Submit</button>
    </form>
  )
}

export default AdmissionForm
