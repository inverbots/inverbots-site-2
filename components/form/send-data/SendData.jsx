'use client'
import axios from 'axios';

// Config variables
const SPREADSHEET_ID = process.env.NEXT_PUBLIC_SPREADSHEET_ID;
const SHEET_ID = process.env.NEXT_PUBLIC_SHEET_ID;
const GOOGLE_CLIENT_EMAIL = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_EMAIL;
const GOOGLE_SERVICE_PRIVATE_KEY =
  process.env.NEXT_PUBLIC_GOOGLE_SERVICE_PRIVATE_KEY;

const appendSpreadsheet = async (row) => {
  try {
    const authResponse = await axios.post(
      `https://accounts.google.com/o/oauth2/token`,
      {
        grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
        assertion: {
          iss: GOOGLE_CLIENT_EMAIL,
          scope: 'https://www.googleapis.com/auth/spreadsheets',
          aud: 'https://accounts.google.com/o/oauth2/token',
          exp: Math.floor(Date.now() / 1000) + 3600,
          iat: Math.floor(Date.now() / 1000),
        },
      }
    );

    const accessToken = authResponse.data.access_token;

    const requestBody = {
      values: Object.values(row),
    };

    await axios.post(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_ID}:append`,
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
        params: {
          valueInputOption: 'USER_ENTERED',
        },
      }
    );
  } catch (e) {
    console.error(e);
  }
};

export default function sendData(data) {
  appendSpreadsheet(data);
}
