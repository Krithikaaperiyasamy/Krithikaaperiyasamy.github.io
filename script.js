const projects = [
    {
        title: 'Brand Website Redesign',
        description: 'A polished and responsive website built for a creative startup, including case study pages and interactive product highlights.',
        tags: ['Responsive', 'UI Design', 'JavaScript'],
        link: '#'
    },
    {
        title: 'Portfolio Landing Page',
        description: 'A modern portfolio experience with fast animations, clean typography, and a focus on readability across devices.',
        tags: ['Web Design', 'HTML', 'CSS'],
        link: '#'
    },
    {
        title: 'E-commerce Product Showcase',
        description: 'A product-focused shop layout with interactive cards, featured collections, and accessible checkout flows.',
        tags: ['E-commerce', 'UX', 'Performance'],
        link: '#'
    },
    {
        title: 'Interactive Dashboard',
        description: 'A data-rich dashboard with custom visual components, mobile-first layout, and smooth transitions.',
        tags: ['Dashboard', 'Data', 'UX'],
        link: '#'
    }
];

function createProjectCard(project) {
    const card = document.createElement('article');
    card.className = 'project-card';

    const title = document.createElement('h3');
    title.textContent = project.title;

    const description = document.createElement('p');
    description.textContent = project.description;

    const meta = document.createElement('div');
    meta.className = 'project-meta';

    project.tags.forEach((tag) => {
        const span = document.createElement('span');
        span.className = 'project-tag';
        span.textContent = tag;
        meta.appendChild(span);
    });

    const link = document.createElement('a');
    link.href = project.link;
    link.textContent = 'View details';
    link.target = '_blank';

    card.append(title, description, meta, link);
    return card;
}

function renderProjects() {
    const grid = document.getElementById('projectGrid');
    if (!grid) return;
    projects.forEach((project) => {
        grid.appendChild(createProjectCard(project));
    });
}

window.addEventListener('DOMContentLoaded', () => {
    renderProjects();
});


