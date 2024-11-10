import { supabase } from '../../../lib/supabaseClient'
import { nanoid } from 'nanoid'

export async function POST(req) {
  try {
    const { long_url } = await req.json()

    if (!long_url) {
      return new Response(
        JSON.stringify({ status: 'Failed', message: 'Invalid URL' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    const short_url = nanoid(8)

    const { data, error } = await supabase
      .from('url_pair')
      .insert([
        { long_url: long_url, short_url: short_url }
      ])

    if (error) {
      throw error
    }

    return new Response(
      JSON.stringify({ status: 'Success', short_url }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    console.error('Error:', error.message)
    return new Response(
      JSON.stringify({ status: 'Failed', message: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}