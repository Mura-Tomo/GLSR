// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const response = await fetch('http://localhost:5000/api/random-number');
  const data = await response.json();
  res.status(200).json(data);
}