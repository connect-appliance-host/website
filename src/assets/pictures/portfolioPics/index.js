const importAll = (r) => r.keys().map(r);

// project 1
const project1Images = importAll(require.context('./project_1', false, /\.jpg/));
// project 2
const project2Images = importAll(require.context('./project_2', false, /\.jpg/));
// project 3
const project3Images = importAll(require.context('./project_3', false, /\.jpg/));


export {project1Images, project2Images, project3Images};