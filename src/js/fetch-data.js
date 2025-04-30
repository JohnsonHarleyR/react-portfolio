import { createClient } from '@supabase/supabase-js';
// import { projectTableId, projectSupabaseKey } from './private';

const projectTableId = process.env.PROJECTS_TABLE_ID;
const projectSupabaseKey = process.env.PROJECTS_SUPABASE_KEY;

function getSupabaseUrl(tableId) {
  return `https://${tableId}.supabase.co`;
}

const projectSupabase = createClient(getSupabaseUrl(projectTableId), projectSupabaseKey)

export async function fetchAllProjectData(setData) {
    let { data: projects, error } = await projectSupabase
    .from('projects')
    .select('*')
    // TODO more error handling
    if (error) {
      console.log('loading error: ', error);
      return null;
    }
    let formattedProjects = [];
    for (const project of projects) {
      formattedProjects.push({
        ...project,
        image: `../public/images/projects/${project.image}`
      });
    }
    setData(formattedProjects);
  }