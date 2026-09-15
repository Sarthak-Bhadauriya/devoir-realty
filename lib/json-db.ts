import fs from 'fs';
import path from 'path';

const dbPath = path.join(process.cwd(), 'data', 'properties.json');

export function getProperties() {
  try {
    if (!fs.existsSync(dbPath)) {
      // If doesn't exist, create it with empty array
      fs.writeFileSync(dbPath, JSON.stringify([]));
      return [];
    }
    const fileData = fs.readFileSync(dbPath, 'utf-8');
    return JSON.parse(fileData);
  } catch (err) {
    console.error('Error reading JSON DB', err);
    return [];
  }
}

export function saveProperties(properties: any[]) {
  try {
    fs.writeFileSync(dbPath, JSON.stringify(properties, null, 2));
    return true;
  } catch (err) {
    console.error('Error writing JSON DB', err);
    return false;
  }
}

const blogsDbPath = path.join(process.cwd(), 'data', 'blogs.json');

export function getBlogs() {
  try {
    if (!fs.existsSync(blogsDbPath)) {
      fs.writeFileSync(blogsDbPath, JSON.stringify([]));
      return [];
    }
    return JSON.parse(fs.readFileSync(blogsDbPath, 'utf-8'));
  } catch (err) {
    return [];
  }
}

export function saveBlogs(blogs: any[]) {
  try {
    fs.writeFileSync(blogsDbPath, JSON.stringify(blogs, null, 2));
    return true;
  } catch (err) {
    return false;
  }
}
