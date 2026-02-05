export const PROJECTS = [
    {
        id: 'login-system',
        title: 'Sistema de Login con Roles',
        description: 'Spring Boot + Android con autenticación JWT y roles múltiples',
        technologies: ['Spring Boot', 'Android', 'JWT', 'MySQL'],
        model: '/models/projects/login-system.glb',
        github: 'https://github.com/robertoquintana/login-system',
        color: '#10B981' // Verde
    },
    {
        id: 'vr-game',
        title: 'Videojuego en Realidad Virtual',
        description: 'Experiencia inmersiva en Unity con C# para Oculus Quest',
        technologies: ['Unity', 'C#', 'VR', 'Blender'],
        model: '/models/projects/vr-game.glb',
        demo: 'https://vr-demo.com',
        color: '#8B5CF6' // Violeta
    },
    {
        id: 'shopping-cart',
        title: 'Shopping Cart Microservices',
        description: 'Sistema distribuido de e-commerce escalable',
        technologies: ['Docker', 'Kubernetes', 'RabbitMQ', 'Node.js'],
        model: '/models/projects/shopping-cart.glb',
        color: '#F59E0B' // Ambar
    },
    {
        id: 'syntax-analyzer',
        title: 'Syntax Analyzer',
        description: 'Compilador educativo con análisis léxico y sintáctico',
        technologies: ['Python', 'Regex', 'Automata Theory'],
        model: '/models/projects/syntax.glb',
        color: '#EF4444' // Rojo
    }
];

export const SKILLS = {
    frontend: [
        { name: 'React', level: 90, icon: '⚛️' },
        { name: 'Next.js', level: 85, icon: '▲' },
        { name: 'TypeScript', level: 80, icon: 'TS' },
        { name: 'Angular', level: 75, icon: '🅰️' },
    ],
    backend: [
        { name: 'Node.js', level: 85, icon: '🟢' },
        { name: 'Spring Boot', level: 80, icon: '🌱' },
        { name: 'Express', level: 90, icon: '🚂' },
        { name: 'Python', level: 75, icon: '🐍' },
    ],
    devops: [
        { name: 'Docker', level: 80, icon: '🐳' },
        { name: 'Google Cloud', level: 75, icon: '☁️' },
        { name: 'Azure', level: 70, icon: '🔷' },
        { name: 'Linux', level: 85, icon: '🐧' },
    ]
};

export const SOCIAL_LINKS = {
    github: 'https://github.com/robertoquintana',
    linkedin: 'https://linkedin.com/in/roberto-quintana',
    email: 'mailto:contacto@robertoquintana.dev'
};
