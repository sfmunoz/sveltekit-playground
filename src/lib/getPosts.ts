import fs from "fs";
import path from "path";
import matter from "gray-matter";

const folder = path.resolve("src/lib/posts");

type getPostsRet = {
  slug: string;
  meta: { [key: string]: any };
  body: string;
};

export const getPosts = (): getPostsRet[] =>
  fs
    .readdirSync(folder)
    .map((file) => {
      const filePath = path.join(folder, file);
      const content = fs.readFileSync(filePath, "utf-8");
      const { data: meta, content: body } = matter(content);
      return { slug: file.replace(".md", ""), meta, body };
    })
    .sort(
      (a, b) =>
        new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime()
    );
