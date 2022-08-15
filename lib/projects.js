import path from 'path';
import fs from 'fs/promises';

export async function getProjects() {
  const filePath = path.join(process.cwd(), 'db', 'data.json');
  const jsonData = await fs.readFile(filePath);
  const projects = await JSON.parse(jsonData);

  return projects;
}

export async function getProject(id) {
  const filePath = path.join(process.cwd(), 'db', 'data.json');
  const jsonData = await fs.readFile(filePath);
  const projects = await JSON.parse(jsonData)['projects'];

  return projects[id];
}
