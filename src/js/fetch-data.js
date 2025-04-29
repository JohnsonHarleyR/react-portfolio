import { createClient } from '@supabase/supabase-js';
import { projectTableId, projectSupabaseKey, getSupabaseUrl } from './private';

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
    console.log('formattedProjects', formattedProjects);
    setData(formattedProjects);
  }