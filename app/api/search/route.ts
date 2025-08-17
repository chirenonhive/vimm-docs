import { NextRequest, NextResponse } from 'next/server';
import { searchDocumentation } from '../../utils/search';

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const query = searchParams.get('q');

    if (!query) {
      return NextResponse.json({ error: 'Query parameter "q" is required' }, { status: 400 });
    }

    const results = searchDocumentation(query);
    
    return NextResponse.json({
      query,
      results,
      total: results.length
    });
  } catch (error) {
    console.error('Search API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
