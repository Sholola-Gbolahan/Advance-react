import { useState } from "react"
import { data } from "../../../data"
const UserChallenge = () => {
  const [users, setUsers] = useState(data)

  const [name, setName] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(name)
    // If no value do nothing
    if (!name) return

    // if value, setup new user and add to current users
    const fakeId = Date.now()
    console.log(fakeId)

    const newUser = { id: fakeId, name }
    const updatedUsers = [...users, newUser]

    setUsers(updatedUsers)

    // set back to empty when submitted
    setName("")
  }
  //Function to remove user
  const handleRemove = (id) => {
    const updatedUsers = users.filter((person) => person.id !== id)

    setUsers(updatedUsers)
  }

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>

      {/* render users below */}

      {users.map(({ id, name }) => {
        return (
          <div key={id}>
            <h3> {name} </h3>
            <button className="btn" onClick={() => handleRemove(id)}>
              Remove
            </button>
          </div>
        )
      })}
    </div>
  )
}
export default UserChallenge
