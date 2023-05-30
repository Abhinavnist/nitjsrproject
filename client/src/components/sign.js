import React, { useState } from "react"
import "./form.css"

function Sign() {
  const [photoPreview, setPhotoPreview] = useState("")
  const [signaturePreview, setSignaturePreview] = useState("")

  // Handle photo upload and preview
  const handlePhotoUpload = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onload = () => {
      setPhotoPreview(reader.result)
    }

    reader.readAsDataURL(file)
  }

  // Handle signature upload and preview
  const handleSignatureUpload = (event) => {
    const file = event.target.files[0]
    const reader = new FileReader()

    reader.onload = () => {
      setSignaturePreview(reader.result)
    }

    reader.readAsDataURL(file)
  }

  return (
    <div className="imgsig">
      {/* Photo upload */}
      <label
        className="small-button "
        htmlFor="photo"
      >
        Photo:{" "}
      </label>
      <input
        type="file"
        id="photo"
        name="photo"
        accept="image/*"
        onChange={handlePhotoUpload}
      />
      {photoPreview && (
        <img
          src={photoPreview}
          alt="Photo Preview"
        />
      )}

      {/* Signature upload */}

      <label
        className="small-button sign"
        htmlFor="signature"
      >
        Signature:
      </label>

      <input
        type="file"
        id="signature"
        name="signature"
        accept="image/*"
        onChange={handleSignatureUpload}
      />

      {signaturePreview && (
        <img
          src={signaturePreview}
          alt="Signature Preview"
        />
      )}
    </div>
  )
}

export default Sign
