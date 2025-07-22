import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_BASE_URL = 'https://danamit-auth-service.liara.run/api';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { path } = req.query;
  
  // Construct the target URL
  const targetPath = Array.isArray(path) ? path.join('/') : path || '';
  const targetUrl = `${API_BASE_URL}/${targetPath}`;

  try {
    // Forward the request to the external API
    const response = await axios({
      method: req.method,
      url: targetUrl,
      data: req.body,
      headers: {
        'Content-Type': 'application/json',
        // Forward any authorization headers
        ...(req.headers.authorization && { Authorization: req.headers.authorization }),
      },
    });

    // Return the response from the external API
    res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error('Proxy API Error:', error.response?.data || error.message);
    
    if (error.response) {
      // Forward the error response from the external API
      res.status(error.response.status).json(error.response.data);
    } else {
      // Handle network or other errors
      res.status(500).json({ 
        message: 'Internal Server Error', 
        error: error.message 
      });
    }
  }
}
