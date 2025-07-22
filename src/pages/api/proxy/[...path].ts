import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const API_BASE_URL = 'https://danamit-auth-service.liara.run/api';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { path } = req.query;
  
  if (!Array.isArray(path)) {
    return res.status(400).json({ error: 'Invalid path' });
  }

  const apiPath = path.join('/');
  const targetUrl = `${API_BASE_URL}/${apiPath}`;

  try {
    console.log(`🔄 Proxying ${req.method} request to: ${targetUrl}`);
    console.log('📝 Request body:', req.body);

    const response = await axios({
      method: req.method,
      url: targetUrl,
      data: req.body,
      headers: {
        'Content-Type': 'application/json',
        // Forward authorization header if present
        ...(req.headers.authorization && {
          Authorization: req.headers.authorization,
        }),
      },
      timeout: 10000,
    });

    console.log('✅ Proxy response successful:', {
      status: response.status,
      data: response.data,
    });

    // Forward the response
    res.status(response.status).json(response.data);
  } catch (error: any) {
    console.error('❌ Proxy error:', error.message);
    
    if (error.response) {
      console.error('📊 Error response:', {
        status: error.response.status,
        data: error.response.data,
      });
      res.status(error.response.status).json(error.response.data);
    } else {
      res.status(500).json({ 
        error: 'Internal server error',
        message: error.message 
      });
    }
  }
}
