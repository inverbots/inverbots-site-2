'use client'
import React, { useState, useEffect } from 'react'
import style from './Form.module.css'

export default function Form () {
  const [fullName, setFullName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [email, setEmail] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)
  const [countries, setCountries] = useState([])

  // fetch countries from API on component mount
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => setCountries(data))
  }, [])

  const handleSubmit = (event) => {
    event.preventDefault()
    const dataLocation = location.href
    // send form data to server
    const formData = {
      origin: dataLocation,
      fullName,
      whatsapp,
      selectedCountry,
      email,
      acceptTerms
    }
    console.log(formData)
  }

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <div className={style.nombre}>
        <input
          placeholder='Nombre completo:'
          type='text'
          id='fullName'
          value={fullName}
          onChange={(event) => setFullName(event.target.value)}
          required
        />
      </div>
      <div className={style.whatsapp}>
        <input
          placeholder='Whatsapp'
          type='tel'
          id='whatsapp'
          value={whatsapp}
          onChange={(event) => setWhatsapp(event.target.value)}
          required
        />
      </div>
      <div className={style.country}>
        <select
          placeholder='Seleccionar país'
          id='selectedCountry'
          value={selectedCountry}
          onChange={(event) => setSelectedCountry(event.target.value)}
          required
        >
          <option value=''>Selecciona un país</option>
          {countries.map((country, key) => (
            <option key={key} value={country.name.common}>
              {country.name.common}
            </option>
          ))}
        </select>
      </div>
      <div className={style.mail}>
        <input
          placeholder='Correo electrónico:'
          type='email'
          id='email'
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          required
        />
      </div>
      <div className={style.terms}>
        <input
          type='checkbox'
          id='acceptTerms'
          checked={acceptTerms}
          onChange={(event) => setAcceptTerms(event.target.checked)}
          required
        />
        <label htmlFor='acceptTerms'>
          Acepto el tratamiento de mis datos personales.
        </label>
      </div>
      <button className={style.buton} type='submit'>Enviar</button>
    </form>
  )
}
