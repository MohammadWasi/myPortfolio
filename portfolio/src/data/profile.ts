export type Project = {
  name: string
  url?: string
  label: string
  premise: string
  challenge: string
  stack: string[]
  visual: 'graph' | 'path' | 'grid' | 'signal'
}

const resumeUrl = new URL('../assets/resume.pdf', import.meta.url).href

export const profile = {
  name: 'Mohammad Wasi',
  email: 'mdwasi15@gmail.com',
  github: 'https://github.com/MohammadWasi',
  linkedin: 'https://www.linkedin.com',
  // resume: resumeUrl,
}

export const principles = [
  ['01', 'Architecture before abstraction', 'Establish the shape of a system and its constraints before reaching for a pattern.'],
  ['02', 'Trade-offs over dogma', 'Choose the smallest sound decision for the context, then make its cost visible.'],
  ['03', 'Design for the real world', 'Reliability, failure modes, and operability belong in the initial design.'],
  ['04', 'AI is a component, not magic', 'Treat models as measurable system dependencies with clear inputs, boundaries, and feedback.'],
]

export const domains = [
  { name: 'System architecture', items: ['System design', 'Distributed applications', 'Reliability', 'REST APIs', 'Data-intensive systems'] },
  { name: 'Backend & data', items: ['Java', 'Spring', 'Python', 'Flask', 'SQL', 'Airflow', 'Node.js'] },
  { name: 'Product engineering', items: ['TypeScript', 'React', 'Angular', 'Next.js', 'Web performance', 'State management'] },
  { name: 'AI-enabled systems', items: ['LLM integration', 'RAG', 'Agentic workflows', 'Evaluation', 'AI product architecture'] },
]

export const projects: Project[] = [
  { name: 'InterviewsVector', url: 'https://www.interviewsvector.com/', label: 'Technical knowledge platform', premise: 'A growing platform for engineers developing better system-design judgment and senior-level technical depth.', challenge: 'Turn broad engineering topics into connected learning paths—from system design and Java to AI systems and architecture.', stack: ['System design', 'Architecture', 'Java', 'AI systems'], visual: 'graph' },
  { name: 'TutorPilotAI', url: 'https://www.tutorpilotai.com/', label: 'Adaptive learning product', premise: 'An AI-powered learning experience designed around personal progress rather than one-size-fits-all content.', challenge: 'Bring AI-enabled learning flows into a focused product experience with a practical, maintainable stack.', stack: ['React', 'Supabase', 'AI-enabled flows'], visual: 'path' },
  { name: 'UPSC Geeks', url: 'https://www.upscgeeks.in/', label: 'AI-assisted education', premise: 'A platform for UPSC aspirants to navigate study plans, quizzes, mock tests, and learning workflows.', challenge: 'Shape many high-intent learning moments into an experience that stays legible and useful.', stack: ['Next.js', 'Supabase', 'Learning workflows'], visual: 'grid' },
  { name: 'AI Stack', label: 'AI product discovery', premise: 'A structured discovery surface for AI tools and product submissions.', challenge: 'Combine structured product data with LLM-assisted form completion without losing information quality.', stack: ['Next.js', 'Supabase', 'LLM integration'], visual: 'signal' },
]

export const experience = [
  { period: '2022 — now', company: 'BNY', role: 'Vice President', focus: 'Architecture & engineering leadership', description: 'Engineering capital analysis and risk-related applications that support comprehensive capital analysis workflows. Focused on architectural ownership, resilient distributed applications, data and model execution, backend performance, and the quality of complex production systems.', current: true },
  { period: '2020 — 2022', company: 'Guardian Life', role: 'Frontend Software Engineer', focus: 'Enterprise product systems', description: 'Built enterprise administration experiences across policy, customer, and claims workflows with React and TypeScript—covering complex validation, exports, testing, CI/CD, and performance discipline.' },
  { period: '2018 — 2019', company: 'IChamp', role: 'Software Engineer', focus: 'Application engineering', description: 'Built mobile product features, profiles, progress and statistics, Node.js APIs, and administrative tools.' },
  { period: '2016 — 2018', company: 'KitsForHomes', role: 'Software Engineer', focus: 'Product foundations', description: 'Contributed to an e-commerce platform, inventory and administrative tooling, performance improvements, and SEO.' },
]
