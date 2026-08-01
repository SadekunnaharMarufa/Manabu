import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Base Route
app.get('/', (req, res) => {
  res.json({ message: "Manabuu AI Backend is running smoothly!" });
});

// Dummy AI Route for future implementation
app.post('/api/ai', (req, res) => {
  res.json({ reply: "Hello from the future Manabuu AI engine!" });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Backend server successfully listening on port ${PORT}`);
});