# 📚 School Locator API

This is a Node.js and Express.js-based REST API that allows users to:
- Add school data (including location)
- Retrieve a list of nearby schools sorted by proximity to the user's location

MySQL is used as the database, and Geo-coordinates are used to compute distance using the Haversine formula.

---

## 🚀 Features

- 🌐 Add new schools with name, address, latitude, and longitude
- 📍 Get schools sorted by distance from a given location
- ⚙️ MySQL-backed data persistence
- 📦 Modular and clean API structure

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Utilities**: dotenv, mysql2, body-parser, nodemon

---

## 📦 Installation

### Prerequisites

- Node.js v18+ (or v20.x)
- MySQL 8+
- `npm` or `yarn`

### Clone and Setup

```bash
git clone https://github.com/NIKSH02/schoolmanagement.git
cd schoolmanagement
npm install
