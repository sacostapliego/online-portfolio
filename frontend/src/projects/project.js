import { create } from 'zustand';

export const showProjects = create((set) => ({ 
    projects: [],
    setProjects: (projects) => set({ projects }),

    fetchProjects: async () => {
        const res = await fetch('/api/projects');
        const data = await res.json();
        set({ projects: data.data });
    },
}));