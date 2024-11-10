import { supabase } from '../../../lib/supabase/supabaseClient'

export async function GET(req) {
  try {
    const { data, error } = await supabase
      .from('url_pair')
      .select('*')
      .limit(0)

    if (error) {
      throw error
    }

    return new Response(
      JSON.stringify({ status: 'Connection successful!' }),
      {
        status: 200,
        headers: { 'Content-Type': 'application/json' }
      }
    )
  } catch (error) {
    console.error('Error connecting to Supabase:', error.message)
    return new Response(
      JSON.stringify({ status: 'Failed to connect', error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}