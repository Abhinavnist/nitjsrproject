import React, { useState } from "react"

function DocumentVerification() {
  const [documents, setDocuments] = useState([
    {
      id: 1,
      name: "GATE/NET/JAM Score Card as applicable",
      verified: false,
      remarks: "",
    },
    {
      id: 2,
      name: "High School (Class – X) Certificate as proof of age",
      verified: false,
      remarks: "",
    },
    {
      id: 3,
      name: "12th Pass Certificate / Mark sheet",
      verified: false,
      remarks: "",
    },
    {
      id: 4,
      name: "Marks Card of B. Tech. and M. Tech.",
      verified: false,
      remarks: "",
    },
    {
      id: 5,
      name: "College Leaving Certificate (last attended)",
      verified: false,
      remarks: "",
    },
    { id: 6, name: "Migration Certificate", verified: false, remarks: "" },
    {
      id: 7,
      name: "Character Certificate from the Institution last attended",
      verified: false,
      remarks: "",
    },
    {
      id: 8,
      name: "Passport size photograph - 4 Nos.",
      verified: false,
      remarks: "",
    },
    {
      id: 9,
      name: "Category Certificate SC/ST/PWD/OBC/EWS",
      verified: false,
      remarks: "",
    },
    {
      id: 10,
      name: "Candidates selected in External PRS category are required to furnish NOC from employer stating that they have been granted permission to pursue Ph.D. programme at NIT Jamshedpur and leave possibly for one year to attend course work towards Ph.D. as per rules.",
      verified: false,
      remarks: "",
    },
    { id: 11, name: "Copy of Aadhaar Card", verified: false, remarks: "" },
  ])

  const handleVerificationChange = (id) => {
    setDocuments((prevDocuments) =>
      prevDocuments.map((doc) =>
        doc.id === id ? { ...doc, verified: !doc.verified } : doc
      )
    )
  }

  const handleRemarksChange = (id, remarks) => {
    setDocuments((prevDocuments) =>
      prevDocuments.map((doc) =>
        doc.id === id ? { ...doc, remarks: remarks } : doc
      )
    )
  }

  return (
    <div>
      <h3>DOCUMENTS VERIFICATION DETAILS:</h3>
      <table>
        <thead>
          <tr>
            <th>Sl. No.</th>
            <th>Details of Documents (Original)</th>
            <th>Verified</th>
            <th>Remarks if any</th>
          </tr>
        </thead>
        <tbody>
          {documents.map((doc) => (
            <tr key={doc.id}>
              <td>{doc.id}</td>
              <td>{doc.name}</td>
              <td>
                <input
                  type="checkbox"
                  checked={doc.verified}
                  onChange={() => handleVerificationChange(doc.id)}
                />
              </td>
              <td>
                <input
                  type="text"
                  value={doc.remarks}
                  onChange={(e) => handleRemarksChange(doc.id, e.target.value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <h3>UNDERTAKINGS:</h3>
        <div>
          <label>(i)</label>
          <input type="text" />
        </div>
        <div>
          <label>(ii)</label>
          <input type="text" />
        </div>
      </div>
      {/* <div>
        <p>Signature of Verifying Officer</p>
        <p>Admitted / Not Admitted</p>
        <p>Dean (Academic)</p>
      </div> */}
    </div>
  )
}

export default DocumentVerification
