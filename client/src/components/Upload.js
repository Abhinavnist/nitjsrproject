import React, { useState } from "react"
import axios from "axios"
import { Formik, Form, ErrorMessage } from "formik"

function Upload() {
  const [photoPreview, setPhotoPreview] = useState("")
  const [signaturePreview, setSignaturePreview] = useState("")

  const handleSubmit = (values) => {
    // Convert photo and signature to base64 before sending
    const photoBase64 = values.photo.split(",")[1]
    const signatureBase64 = values.signature.split(",")[1]

    // Create an object with base64 values
    const formData = {
      photo: photoBase64,
      signature: signatureBase64,
    }

    // Make a POST request to the backend API to register the user
    axios
      .post("http://localhost:8080/api/photo", formData)
      .then((response) => {
        // Handle the response from the backend
        console.log(response.data)
      })
      .catch((error) => {
        // Handle the error
        console.error(error)
      })
  }

  const handlePhotoUpload = (event, setFieldValue) => {
    const file = event.target.files[0]
    if (file && file.size >= 30 * 1024 && file.size <= 100 * 1024) {
      convertToBase64(file).then((base64) => {
        setFieldValue("photo", base64)
        setPhotoPreview(URL.createObjectURL(file))
      })
    } else {
      // Handle file size error
      console.log("Please upload an image between 30KB and 100KB")
    }
  }

  const handleSignatureUpload = (event, setFieldValue) => {
    const file = event.target.files[0]
    if (file && file.size >= 30 * 1024 && file.size <= 100 * 1024) {
      convertToBase64(file).then((base64) => {
        setFieldValue("signature", base64)
        setSignaturePreview(URL.createObjectURL(file))
      })
    } else {
      // Handle file size error
      console.log("Please upload an image between 30KB and 100KB")
    }
  }

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => resolve(reader.result)
      reader.onerror = (error) => reject(error)
    })
  }

  return (
    <div className="container mx-auto flex justify-center items-center h-screen">
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold mb-4 text-center">Register Form</h1>

        <Formik
          initialValues={{ photo: "", signature: "" }}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue }) => (
            <Form className="space-y-4">
              <div className="flex flex-col">
                <label
                  htmlFor="photo"
                  className="font-medium mb-1"
                >
                  Photo (30KB - 100KB):
                </label>
                <div className="h-40 border border-gray-300 flex justify-center items-center">
                  {photoPreview ? (
                    <img
                      src={photoPreview}
                      alt="Photo Preview"
                      className="h-full w-auto"
                    />
                  ) : (
                    <span className="text-gray-500">No photo uploaded</span>
                  )}
                </div>
                <input
                  type="file"
                  id="photo"
                  name="photo"
                  onChange={(event) => handlePhotoUpload(event, setFieldValue)}
                  className="hidden"
                  accept=".jpeg, .png, .jpg"
                />
                <label
                  htmlFor="photo"
                  className="cursor-pointer bg-blue-500 text-white py-2 px-4 mt-2 rounded-md text-center"
                >
                  Upload Photo
                </label>
                <ErrorMessage
                  name="photo"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="signature"
                  className="font-medium mb-1"
                >
                  Signature (30KB - 100KB):
                </label>
                <div className="h-20 border border-gray-300 flex justify-center items-center">
                  {signaturePreview ? (
                    <img
                      src={signaturePreview}
                      alt="Signature Preview"
                      className="h-full w-auto"
                    />
                  ) : (
                    <span className="text-gray-500">No signature uploaded</span>
                  )}
                </div>
                <input
                  type="file"
                  id="signature"
                  name="signature"
                  accept=".jpeg, .png, .jpg"
                  onChange={(event) =>
                    handleSignatureUpload(event, setFieldValue)
                  }
                  className="hidden"
                />
                <label
                  htmlFor="signature"
                  className="cursor-pointer bg-blue-500 text-white py-2 px-4 mt-2 rounded-md text-center"
                >
                  Upload Signature
                </label>
                <ErrorMessage
                  name="signature"
                  component="div"
                  className="text-red-500"
                />
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white py-2 px-4 rounded-md"
              >
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}

export default Upload
