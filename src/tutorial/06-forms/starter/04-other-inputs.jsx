import { useState } from "react"
const frameworks = ["react", "angular", "vue", "svelte"]

const OtherInputs = () => {
  // Checkbox can either be true / false, so default value is set to False
  const [shipping, setShipping] = useState(false)

  const handleShipping = (e) => {
    console.log(e.target.checked)

    setShipping(e.target.checked)
  }
  return (
    <div>
      <form className="form">
        <h4>Other Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="shipping"> Free Shipping </label>
          <input
            type="checkbox"
            name="shipping"
            //Checked is used instead of value in a checkbox input
            checked={shipping}
            onChange={handleShipping}
          />
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  )
}
export default OtherInputs
