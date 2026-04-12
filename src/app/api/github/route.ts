import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const username = searchParams.get('username') || 'Nikhilesh-sarraf';
  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

  if (!GITHUB_TOKEN) {
    return NextResponse.json(
      { error: 'GitHub token not configured' },
      { status: 500 },
    );
  }

  const query = `
    query($userName:String!) {
      user(login: $userName){
        contributionsCollection {
          contributionCalendar {
            totalContributions
            weeks {
              contributionDays {
                contributionCount
                date
                contributionLevel
              }
            }
          }
        }
      }
    }
  `;

  try {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        Authorization: `bearer ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables: { userName: username },
      }),
      // Utilize Next.js ISR to cache the GitHub response for 1 hour
      // This stops the page from locking up while waiting for GitHub's GraphQL server on every load.
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error('GitHub API error details:', response.status, errorText);
      return NextResponse.json({ error: 'GitHub API error' }, { status: response.status });
    }

    const data = await response.json();
    
    if (data.errors) {
      console.error('GitHub GraphQL errors:', data.errors);
      return NextResponse.json({ error: 'GitHub GraphQL error', details: data.errors }, { status: 500 });
    }

    const weeks = data?.data?.user?.contributionsCollection?.contributionCalendar?.weeks;
    if (!weeks) {
      return NextResponse.json({ error: 'Invalid data format from GitHub' }, { status: 500 });
    }

    // Flatten weeks into an array of days
    const contributions = weeks.flatMap((week: any) => week.contributionDays);

    return NextResponse.json({ contributions });
  } catch (error) {
    console.error('Failed to fetch from GitHub:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
