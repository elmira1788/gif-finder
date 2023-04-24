import { useState } from "react"

export default function LoginPage({ onLogin }) {
  const [formData, setFormData] = useState({})
  const [error, setError] = useState("")

  const handleSubmit = e => {
    e.preventDefault()

    if (formData.email && formData.password) {
      onLogin(formData)
    } else {
      setError("invalid email or password")
    }
  }

  const handleChange = e => {
    console.log(e.target.value)
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setError("")
  }

  return (
    <section className="login">
      <h1>login</h1>

      <p>{error}</p>

      <form onSubmit={handleSubmit} action="">
        <label htmlFor="">email</label>
        <input onChange={handleChange} type="text" name="email" />
        <label htmlFor="">password</label>
        <input onChange={handleChange} type="password" name="password" />
        <button>login</button>
      </form>
    </section>
  )
}