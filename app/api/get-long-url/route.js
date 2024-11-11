import { supabase } from "@/lib/supabase/supabaseClient";

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const shortcode = searchParams.get('shortcode');
  
    if (!shortcode) {
      return new Response(JSON.stringify({message: 'Shortcode is required'}), { status: 400 });
    }
  
    const { data, error } = await supabase
      .from('url_pair')
      .select('long_url')
      .eq('short_url', shortcode)
      .single();
  
    if (error || !data) {
      return new Response(JSON.stringify({ message: 'Shortcode not found' }), { status: 404 });
    }
  
    return new Response(JSON.stringify({ longUrl: data.long_url }), { status: 200,  });
}