import React, { useState } from "react"

function Declaration() {
  const [declaration, setDeclaration] = useState(false)

  const handleDeclarationChange = (event) => {
    setDeclaration(event.target.checked)
  }

  return (
    <div>
      {/* Other form fields */}

      <label>
        <input
          type="checkbox"
          checked={declaration}
          onChange={handleDeclarationChange}
          required
        />
        I hereby declare that the information given above is true to the best of
        my knowledge.
      </label>

      {/* Submit button */}
    </div>
  )
}

export default Declaration
