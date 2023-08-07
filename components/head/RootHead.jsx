import HeadScript from "./headScript"
import Head from "next/head"

export default function RootHead() {

  return (
    <head>
      <meta name="robots" content="index,follow" />
      <meta name="google-site-verification" content="bPuKNVrJr2DOOOu0fhvQypoVd_yAnFBypnMclDZGbNE" />
      <HeadScript />
    </head>
  )
}