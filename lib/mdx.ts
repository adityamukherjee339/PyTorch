import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface ModuleMeta {
  number: string;
  title: string;
  tag: string;
  subtitle: string;
  slug: string;
}

export interface ModuleData extends ModuleMeta {
  content: string;
}

const modulesDirectory = path.join(process.cwd(), 'content/modules');

export function getAllModules(): ModuleData[] {
  if (!fs.existsSync(modulesDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(modulesDirectory);
  const allModulesData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      // Remove ".mdx" from file name to get id
      const slug = fileName.replace(/\.mdx$/, '');

      // Read markdown file as string
      const fullPath = path.join(modulesDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');

      // Use gray-matter to parse the post metadata section
      const matterResult = matter(fileContents);

      return {
        slug,
        content: matterResult.content,
        ...(matterResult.data as Omit<ModuleMeta, 'slug'>),
      };
    });

  // Sort modules by number
  return allModulesData.sort((a, b) => {
    if (a.number < b.number) {
      return -1;
    } else if (a.number > b.number) {
      return 1;
    } else {
      return 0;
    }
  });
}
