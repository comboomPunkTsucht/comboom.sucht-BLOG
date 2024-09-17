import { NextResponse } from 'next/server';
import axios from 'axios';

// Helper function to get the Auth0 Management API access token
async function getManagementApiAccessToken(): Promise<string> {
  const yourDomain = process.env.AUTH0_ISSUER_BASE_URL;
  const clientId = process.env.AUTH0_CLIENT_ID;
  const clientSecret = process.env.AUTH0_CLIENT_SECRET;

  if (!yourDomain || !clientId || !clientSecret) {
    throw new Error('Missing Auth0 environment variables.');
  }

  const options = {
    method: 'POST',
    url: `${yourDomain}/oauth/token`,
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: new URLSearchParams({
      grant_type: 'client_credentials',
      client_id: clientId,
      client_secret: clientSecret,
      audience: `${yourDomain}/api/v2/`,
    }),
  };

  try {
    const response = await axios.request<{ access_token: string }>(options);
    return response.data.access_token;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.error(
        'Error fetching Auth0 access token:',
        error.response?.data ? error.response.data : error.message,
      );
    } else {
      console.error('Unknown error:', (error as Error).message);
    }
    throw new Error('Failed to fetch Auth0 access token.');
  }
}

export async function GET(
  req: Request,
  { params }: { params: { email: string } },
) {
  const { email } = params;

  try {
    const yourDomain = process.env.AUTH0_ISSUER_BASE_URL;

    if (!yourDomain) {
      return NextResponse.json(
        { error: 'Missing Auth0 domain environment variable' },
        { status: 500 },
      );
    }

    const yourMgmtApiAccessToken = await getManagementApiAccessToken();

    const options = {
      method: 'GET',
      url: `${yourDomain}/api/v2/users-by-email`,
      params: { email: email.toLowerCase() },
      headers: {
        Authorization: `Bearer ${yourMgmtApiAccessToken}`,
      },
    };

    try {
      const response =
        await axios.request<
          { email: string; nickname: string; name: string; picture: string }[]
        >(options);
      const userData = response.data[0];

      if (!userData) {
        return NextResponse.json({ error: 'User not found' }, { status: 404 });
      }

      return NextResponse.json({
        username: userData.nickname || '',
        name: userData.name || '',
        email: userData.email || '',
        picture: userData.picture || '',
      });
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.error(
          'Error fetching user data:',
          error.response?.data ? error.response.data : error.message,
        );
      } else {
        console.error('Unknown error:', (error as Error).message);
      }
      return NextResponse.json({
        name: 'comboom.sucht',
        email: 'comboom.sucht@comboompunksucht.app',
        picture: '/media/1024.png',
        username: 'comboomPunkTsucht',
      });
    }
  } catch (error) {
    console.error('Internal server error:', (error as Error).message);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 },
    );
  }
}
