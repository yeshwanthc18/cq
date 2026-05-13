import ProjectDetail from '@/components/project-detail/ProjectDetail';
import { projectsData } from '@/components/project-detail/projectsData';

export const metadata = {
  title: 'Project Case Study - Crayon & Quill',
  description: 'Explore our detailed case studies and marketing solutions.',
};

export async function generateStaticParams() {
  return projectsData.map((project) => ({
    slug: project.slug,
  }));
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  return <ProjectDetail slug={params.slug} />;
}
