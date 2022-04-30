import wallpapers from "../projects/wallpapers";
import query from "../projects/query";
import blog from "../projects/blog";

export default function getProjects() {
    const projects = [wallpapers, query, blog];

    const sortedProjects = projects.sort((a, b) => {
        const aTime = Date.parse(a.date);
        const bTime = Date.parse(b.date);
        return bTime - aTime;
    });

    return sortedProjects;
}
