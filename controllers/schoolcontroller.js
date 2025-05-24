const db = require('../config/db');
const haversine = require('haversine-distance');

exports.addSchool = async (req, res) => {
  const { name, address, latitude, longitude } = req.body;

  if (!name || !address || isNaN(latitude) || isNaN(longitude)) {
    return res.status(400).json({ message: "Invalid input data" });
  }

  try {
    await db.execute(
      'INSERT INTO schools (name, address, latitude, longitude) VALUES (?, ?, ?, ?)',
      [name, address, parseFloat(latitude), parseFloat(longitude)]
    );
    res.status(201).json({ message: 'School added successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Database error', error: err.message });
  }
};

exports.listSchools = async (req, res) => {
  const userLat = parseFloat(req.query.latitude);
  const userLng = parseFloat(req.query.longitude);

  if (isNaN(userLat) || isNaN(userLng)) {
    return res.status(400).json({ message: "Invalid coordinates" });
  }

  try {
    const [rows] = await db.execute('SELECT * FROM schools');
    const userLocation = { latitude: userLat, longitude: userLng };

    const sortedSchools = rows.map(school => {
      const schoolLocation = { latitude: school.latitude, longitude: school.longitude };
      const distance = haversine(userLocation, schoolLocation) / 1000; // in km
      return { ...school, distance };
    }).sort((a, b) => a.distance - b.distance);

    res.json(sortedSchools);
  } catch (err) {
    res.status(500).json({ message: 'Database error', error: err.message });
  }
};
