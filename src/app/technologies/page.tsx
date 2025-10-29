
import { Metadata } from 'next';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ConnectionMeshAnimation } from '@/components/connection-mesh-animation';
import {
    SiNextdotjs, SiReact, SiTailwindcss, SiVercel, SiNodedotjs, SiPython, SiGo, SiFlutter, SiPostgresql, SiMysql, SiMongodb, SiRedis, SiDocker, SiKubernetes, SiAmazon, SiGooglecloud, SiCisco, SiJunipernetworks, SiPaloaltonetworks, SiFortinet,
    SiTypescript, SiJavascript, SiHtml5, SiCss3,
    SiPhp, SiGraphql,
    SiFirebase, SiSqlite,
    SiGit, SiGithubactions, SiJenkins, SiTerraform,
    SiFigma, SiAdobeillustrator, SiAdobephotoshop
} from '@icons-pack/react-simple-icons';

export const metadata: Metadata = {
  title: 'Nos Technologies - ITSS',
  description: 'Découvrez la pile technologique que nous utilisons pour construire des solutions robustes et innovantes.',
};

const technologies = {
    frontend: [
        { name: 'Next.js', icon: <SiNextdotjs size={40} /> },
        { name: 'React', icon: <SiReact size={40} /> },
        { name: 'Flutter', icon: <SiFlutter size={40} /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss size={40} /> },
        { name: 'TypeScript', icon: <SiTypescript size={40} /> },
        { name: 'JavaScript', icon: <SiJavascript size={40} /> },
        { name: 'HTML5', icon: <SiHtml5 size={40} /> },
        { name: 'CSS3', icon: <SiCss3 size={40} /> },
    ],
    backend: [
        { name: 'Node.js', icon: <SiNodedotjs size={40} /> },
        { name: 'Python', icon: <SiPython size={40} /> },
        { name: 'Go', icon: <SiGo size={40} /> },
        { name: 'PHP', icon: <SiPhp size={40} /> },
        { name: 'GraphQL', icon: <SiGraphql size={40} /> },
    ],
    database: [
        { name: 'PostgreSQL', icon: <SiPostgresql size={40} /> },
        { name: 'MySQL', icon: <SiMysql size={40} /> },
        { name: 'MongoDB', icon: <SiMongodb size={40} /> },
        { name: 'Redis', icon: <SiRedis size={40} /> },
        { name: 'Firebase', icon: <SiFirebase size={40} /> },
        { name: 'SQLite', icon: <SiSqlite size={40} /> },
    ],
    design: [
        { name: 'Figma', icon: <SiFigma size={40} /> },
        { name: 'Illustrator', icon: <SiAdobeillustrator size={40} /> },
        { name: 'Photoshop', icon: <SiAdobephotoshop size={40} /> },
    ],
    devops: [
        { name: 'Docker', icon: <SiDocker size={40} /> },
        { name: 'Kubernetes', icon: <SiKubernetes size={40} /> },
        { name: 'Vercel', icon: <SiVercel size={40} /> },
        { name: 'Git', icon: <SiGit size={40} /> },
        { name: 'GitHub Actions', icon: <SiGithubactions size={40} /> },
        { name: 'Jenkins', icon: <SiJenkins size={40} /> },
        { name: 'Terraform', icon: <SiTerraform size={40} /> },
    ],
    cloud: [
        { name: 'AWS', icon: <SiAmazon size={40} /> },
        { name: 'Google Cloud', icon: <SiGooglecloud size={40} /> },
    ],
    network: [
        { name: 'Cisco', icon: <SiCisco size={40} /> },
        { name: 'Juniper', icon: <SiJunipernetworks size={40} /> },
        { name: 'Palo Alto', icon: <SiPaloaltonetworks size={40} /> },
        { name: 'Fortinet', icon: <SiFortinet size={40} /> },
    ]
};

const TechSection = ({ title, techs }: { title: string, techs: { name: string, icon: JSX.Element }[] }) => (
    <div className="space-y-12">
        <h2 className="text-3xl md:text-4xl font-headline font-bold text-center">{title}</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {techs.map(tech => (
                <Card key={tech.name} className="glow-card flex flex-col items-center justify-center p-6 bg-card/80 backdrop-blur-sm border-white/10 hover:-translate-y-2 transition-transform duration-300">
                    <div className="text-primary mb-4">{tech.icon}</div>
                    <CardTitle className="text-lg font-semibold text-center">{tech.name}</CardTitle>
                </Card>
            ))}
        </div>
    </div>
);

export default function TechnologiesPage() {
    return (
        <>
            <section className="relative w-full h-[50vh] flex items-center justify-center overflow-hidden">
                <ConnectionMeshAnimation />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background" />
                <div className="relative z-10 container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-headline font-extrabold md:text-7xl tracking-tight">Nos Technologies</h1>
                    <p className="mt-6 max-w-3xl mx-auto text-lg md:text-xl text-muted-foreground">
                        Les outils et plateformes que nous maîtrisons pour donner vie à vos projets les plus ambitieux.
                    </p>
                </div>
            </section>

            <section className="py-20 md:py-32">
                <div className="container mx-auto px-4 space-y-24">
                    <TechSection title="Développement Frontend" techs={technologies.frontend} />
                    <TechSection title="Développement Backend" techs={technologies.backend} />
                    <TechSection title="Bases de Données" techs={technologies.database} />
                    <TechSection title="Outils de Design" techs={technologies.design} />
                    <TechSection title="DevOps & Déploiement" techs={technologies.devops} />
                    <TechSection title="Plateformes Cloud" techs={technologies.cloud} />
                    <TechSection title="Infrastructure Réseau & Sécurité" techs={technologies.network} />
                </div>
            </section>
        </>
    );
}
