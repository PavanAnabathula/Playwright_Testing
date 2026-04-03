const ENV = {
  Base_URL: 'https://staging.myapp.com',
  Timeout: 3000,
  RETRIES: 2,
  BROWSER: 'Chrome'
}

const Expected_Response = {
  status: 200,
  body: {
    user: { role: 'admin', active: true }
  }
}

const config = {
  //Base URl
  base_url: 'http://localhost:3000',
  apiBaseUrl: 'http://localhost:3000/api',
  testuser:{
    username:"test",
    password:"test@123"

  },
  //logging
  loglevel: 'INFO',

  // Retry configuration
    retryCount: parseInt(process.env.RETRY_COUNT || '3', 10),
}
