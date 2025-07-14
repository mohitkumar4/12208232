# 12208232
Afford medical assignment



---

## Features

-  **Shorten URLs** with optional custom shortcodes
-  **Redirect** using short links with expiry validation
-  **Track statistics** including clicks, referrer, location, and timestamp
-  **Centralized Logging Middleware** using Affordmed's logging API

---

##  Tech Stack

- Node.js + Express
- Axios for API calls
- In-memory store (for short URLs and stats)
- Postman for testing
- Logging Middleware (via Affordmed test server)

---

##  Authentication

The app fetches a token from the Affordmed auth server using the provided:

- `clientID`
- `clientSecret`
- `rollNo`
- `accessCode`

The token is reused in every logging API call.

---

##  API Endpoints

### POST `/shorturls`
Creates a new shortened URL.

#### Request:
```json
{
  "url": "https://example.com/long/path",
  "validity": 30,
  "shortcode": "abc123"
}
