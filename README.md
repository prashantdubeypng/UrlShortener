🔗 URL Shortener with Click Tracking
A simple and efficient URL Shortener built with Node.js, Express.js, MongoDB, and NanoID, designed to generate short URLs and track the number of times they are clicked.

🚀 Features
Shorten Long URLs: Converts any long URL into a unique, short identifier.
Click Tracking: Monitors how many times a short URL has been accessed.
Automatic Redirection: Redirects users to the original URL when they access a short link.
Database Storage: Saves original URLs and click counts in MongoDB for persistent tracking.
🛠 Tech Stack
Backend: Node.js, Express.js
Database: MongoDB
Library: NanoID for unique short URLs
📌 Installation & Setup
1️⃣ Clone the repository

sh
Copy
Edit
git clone <your-repo-url>
cd <your-project-folder>
2️⃣ Install dependencies

sh
Copy
Edit
npm install
3️⃣ Start MongoDB
Make sure you have MongoDB installed and running locally or use a cloud-based service like MongoDB Atlas.

4️⃣ Run the server

sh
Copy
Edit
node index.js
(Default port: 3000)

📌 API Endpoints
1️⃣ Shorten a URL
Endpoint: POST /users
Request Body:

json
Copy
Edit
{
  "LongUrl": "https://example.com"
}
Response:

json
Copy
Edit
{
  "message": "GeneratedShortUrl successfully created"
}
2️⃣ Redirect to Original URL
Endpoint: GET /users/:shortUrl

Redirects the user to the original URL and updates the click count.
🎯 Future Enhancements
✅ Allow users to set custom short URLs
📊 Add detailed analytics on link performance
⏳ Implement an expiry feature for short URLs
