// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
      const response = await fetch('https://glsr-mura-tomos-projects.vercel.app/api/random-number');
      const data = await response.json();
      res.status(200).json(data);
  } catch (error) {
      console.error('Fetch error:', error);
      res.status(500).json({ message: 'Internal Server Error' });
  }
}
