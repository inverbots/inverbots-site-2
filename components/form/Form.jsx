'use client'
import React, { useState } from 'react'
import style from './Form.module.css'
import countries from '../../services/countriesList.json'
import sendData from './send-data/SendData'

export default function Form () {
  const [fullName, setFullName] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [selectedCountry, setSelectedCountry] = useState('')
  const [email, setEmail] = useState('')
  const [acceptTerms, setAcceptTerms] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    const dataLocation = location.href
    const urlParams = new URLSearchParams(window.location.search)
    const origin = urlParams.get('origin')

    // send form data to server
    const formData = {
      URLorigin: dataLocation,
      origin,
      fullName,
      whatsapp,
      selectedCountry,
      email,
      acceptTerms
    }
    sendData(formData)
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
          onChange={(event) => { setSelectedCountry(event.target.value) }}
          required
        >
          <option value=''>Selecciona un país</option>
          {countries.map((country, key) => (
            <option key={key} value={country.CountryName}>
              {country.CountryName}
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
          className={style.acceptTerms}
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
