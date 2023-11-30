import { json } from '@sveltejs/kit';
 
export async function POST({ request, locals }) {
  const { id, icon } = await request.json();

  const { dbconn } = locals;

  const result = await dbconn.query(`UPDATE public.posts 
                                      SET icon = $1 
                                      WHERE id = $2`, [icon, id]);               

  return json(result);
}