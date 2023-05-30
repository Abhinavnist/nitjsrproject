import React, { useState } from "react"
import axios from "axios"

function AddressForm() {
  const [residencePincode, setResidencePincode] = useState("")
  const [residenceCity, setResidenceCity] = useState("")
  const [residenceStreetAddress, setResidenceStreetAddress] = useState("")
  const [residenceState, setResidenceState] = useState("")
  const [residenceCountry, setResidenceCountry] = useState("")
  const [residencePhone, setResidencePhone] = useState("")
  const [residenceMobile, setResidenceMobile] = useState("")
  const [residenceBusStation, setResidenceBusStation] = useState("")
  const [residenceRailwayStation, setResidenceRailwayStation] = useState("")

  const [permanentPincode, setPermanentPincode] = useState("")
  const [permanentCity, setPermanentCity] = useState("")
  const [permanentStreetAddress, setPermanentStreetAddress] = useState("")
  const [permanentState, setPermanentState] = useState("")
  const [permanentCountry, setPermanentCountry] = useState("")
  const [permanentPhone, setPermanentPhone] = useState("")
  const [permanentMobile, setPermanentMobile] = useState("")
  const [permanentBusStation, setPermanentBusStation] = useState("")
  const [permanentRailwayStation, setPermanentRailwayStation] = useState("")

  const handleResidencePincodeChange = (event) => {
    const { value } = event.target
    setResidencePincode(value)

    if (value.length === 6) {
      fetchAddressByPincode(
        value,
        setResidenceCity,
        setResidenceState,
        setResidenceCountry
      )
    }
  }

  const handlePermanentPincodeChange = (event) => {
    const { value } = event.target
    setPermanentPincode(value)

    if (value.length === 6) {
      fetchAddressByPincode(
        value,
        setPermanentCity,
        setPermanentState,
        setPermanentCountry
      )
    }
  }

  const fetchAddressByPincode = async (
    pincode,
    setCity,
    setState,
    setCountry
  ) => {
    try {
      const response = await axios.get(
        `https://api.postalpincode.in/pincode/${pincode}`
      )

      if (response.data && response.data.length > 0) {
        const { District, State, Country } = response.data[0].PostOffice[0]
        setCity(District)
        setState(State)
        setCountry(Country)
      } else {
        console.log("Invalid pincode or no data found")
      }
    } catch (error) {
      console.error("Error fetching address:", error)
    }
  }

  const handleSameAsResidenceAddress = () => {
    setPermanentPincode(residencePincode)
    setPermanentCity(residenceCity)
    setPermanentStreetAddress(residenceStreetAddress)
    setPermanentState(residenceState)
    setPermanentCountry(residenceCountry)
    setPermanentPhone(residencePhone)
    setPermanentMobile(residenceMobile)
    setPermanentBusStation(residenceBusStation)
    setPermanentRailwayStation(residenceRailwayStation)
  }

  return (
    <div>
      <h3>Address for Communication</h3>
      <label htmlFor="residencePincode">Pincode:</label>
      <input
        type="text"
        id="residencePincode"
        name="residencePincode"
        value={residencePincode}
        onChange={handleResidencePincodeChange}
      />

      <label htmlFor="residenceCity">City:</label>
      <input
        type="text"
        id="residenceCity"
        name="residenceCity"
        value={residenceCity}
        readOnly
      />

      <label htmlFor="residenceStreetAddress">Street Address:</label>
      <input
        type="text"
        id="residenceStreetAddress"
        name="residenceStreetAddress"
        value={residenceStreetAddress}
        onChange={(e) => setResidenceStreetAddress(e.target.value)}
      />

      <label htmlFor="residenceState">State:</label>
      <input
        type="text"
        id="residenceState"
        name="residenceState"
        value={residenceState}
        onChange={(e) => setResidenceState(e.target.value)}
      />

      <label htmlFor="residenceCountry">Country:</label>
      <input
        type="text"
        id="residenceCountry"
        name="residenceCountry"
        value={residenceCountry}
        onChange={(e) => setResidenceCountry(e.target.value)}
      />

      <label htmlFor="residencePhone">Phone No. (Land line):</label>
      <input
        type="tel"
        id="residencePhone"
        name="residencePhone"
        value={residencePhone}
        onChange={(e) => setResidencePhone(e.target.value)}
      />

      <label htmlFor="residenceMobile">Mobile No.:</label>
      <input
        type="tel"
        id="residenceMobile"
        name="residenceMobile"
        value={residenceMobile}
        onChange={(e) => setResidenceMobile(e.target.value)}
      />

      <label htmlFor="residenceBusStation">Nearest Bus Station:</label>
      <input
        type="text"
        id="residenceBusStation"
        name="residenceBusStation"
        value={residenceBusStation}
        onChange={(e) => setResidenceBusStation(e.target.value)}
      />

      <label htmlFor="residenceRailwayStation">Nearest Railway Station:</label>
      <input
        type="text"
        id="residenceRailwayStation"
        name="residenceRailwayStation"
        value={residenceRailwayStation}
        onChange={(e) => setResidenceRailwayStation(e.target.value)}
      />

      <button
        className="small-button"
        onClick={handleSameAsResidenceAddress}
      >
        Same as Residence Address
      </button>

      <h3>Permanent Address</h3>
      <label htmlFor="permanentPincode">Pincode:</label>
      <input
        type="text"
        id="permanentPincode"
        name="permanentPincode"
        value={permanentPincode}
        onChange={handlePermanentPincodeChange}
      />

      <label htmlFor="permanentCity">City:</label>
      <input
        type="text"
        id="permanentCity"
        name="permanentCity"
        value={permanentCity}
        readOnly
      />

      <label htmlFor="permanentStreetAddress">Street Address:</label>
      <input
        type="text"
        id="permanentStreetAddress"
        name="permanentStreetAddress"
        value={permanentStreetAddress}
        onChange={(e) => setPermanentStreetAddress(e.target.value)}
      />

      <label htmlFor="permanentState">State:</label>
      <input
        type="text"
        id="permanentState"
        name="permanentState"
        value={permanentState}
        onChange={(e) => setPermanentState(e.target.value)}
      />

      <label htmlFor="permanentCountry">Country:</label>
      <input
        type="text"
        id="permanentCountry"
        name="permanentCountry"
        value={permanentCountry}
        onChange={(e) => setPermanentCountry(e.target.value)}
      />

      <label htmlFor="permanentPhone">Phone No. (Land line):</label>
      <input
        type="tel"
        id="permanentPhone"
        name="permanentPhone"
        value={permanentPhone}
        onChange={(e) => setPermanentPhone(e.target.value)}
      />

      <label htmlFor="permanentMobile">Mobile No.:</label>
      <input
        type="tel"
        id="permanentMobile"
        name="permanentMobile"
        value={permanentMobile}
        onChange={(e) => setPermanentMobile(e.target.value)}
      />

      <label htmlFor="permanentBusStation">Nearest Bus Station:</label>
      <input
        type="text"
        id="permanentBusStation"
        name="permanentBusStation"
        value={permanentBusStation}
        onChange={(e) => setPermanentBusStation(e.target.value)}
      />

      <label htmlFor="permanentRailwayStation">Nearest Railway Station:</label>
      <input
        type="text"
        id="permanentRailwayStation"
        name="permanentRailwayStation"
        value={permanentRailwayStation}
        onChange={(e) => setPermanentRailwayStation(e.target.value)}
      />
    </div>
  )
}

export default AddressForm
