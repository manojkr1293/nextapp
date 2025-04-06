import { NextResponse } from 'next/server';
import { fetchtestSeriesOnId, getAlltestSeriesModels } from 'services/testseriesModelService';
export const dynamic = 'force-dynamic';

export async function GET(req) {
  try {
    const {searchParams} = new URL(req.url);
        const testseriesId = searchParams.get('testseriesId');
        
        if(testseriesId){
          
          const test_series = await fetchtestSeriesOnId(testseriesId);
          return new Response(JSON.stringify(test_series),{
            status:200
          })
        }else {
          const fetchAll = await getAlltestSeriesModels();
          return new Response(JSON.stringify(fetchAll),{
            status:200,
          });
        }
  } catch (error) {
    console.error('Error fetching test series:', error);
    return NextResponse.json({ error: 'Failed to fetch test series' }, { status: 500 });
  }
}
