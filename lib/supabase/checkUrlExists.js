import { supabase } from '../supabaseClient';

export async function checkUrlExists(longUrl) {
  try {
    const { data, error } = await supabase
      .from('url_pair')
      .select('short_url')
      .eq('long_url', longUrl)
      .single();

    if (error) {
        return { exists: false };
    }

    return { exists: true, shortUrl: data.short_url };
  } catch (err) {
    console.error('Error checking if URL exists:', err.message);
    throw err;
  }
}