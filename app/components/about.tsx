import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { AppWindow, CodeXml, TabletSmartphone } from "lucide-react";
import React from "react";

const About: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">About Me</h1>
      <Separator className="h-1 w-[40px] rounded-full bg-[#BBB5A5] mb-4" />
      <p className="flex text-justify">
        Passionné de nouvelles technologies, j’aime apprendre en permanence et
        développer mes compétences. Grâce aux sports que je pra=que de façon
        intensive, j’ai acquis le goût de l’eﬀort qui me s=mule dans divers
        aspects de ma vie. À travers ces domaines, je me challenge
        con=nuellement pour donner le meilleur de moi-même.
      </p>
      <div className="py-4 flex justify-center">
        <Separator className="h-1 w-[400px] rounded-full bg-[#BBB5A5]" />
      </div>
      <h1 className="text-2xl font-bold">What I'm doing</h1>
      <Separator className="h-1 w-[40px] rounded-full bg-[#BBB5A5] mb-4" />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <Card className="bg-[#2E2E2E] border-none text-white hover:bg-[#464646] w-full h-[150px]">
          <CardContent className="px-6 pt-6 h-full flex flex-col justify-between">
            <div className="flex items-start">
              <AppWindow size={30} className="text-[#BBB5A5] mr-2 flex-shrink-0" />
              <div className="flex-1">
                <h1 className="text-2xl font-bold">Web Design</h1>
                <p>
                  Je crée des interfaces web modernes et fonctionnelles, en
                  assurant un design attractif et une bonne expérience
                  utilisateur.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#2E2E2E] border-none text-white hover:bg-[#464646] w-full h-[150px]">
          <CardContent className="px-6 pt-6 h-full flex flex-col justify-between">
            <div className="flex items-start">
              <CodeXml size={30} className="text-[#BBB5A5] mr-2 flex-shrink-0" />
              <div className="flex-1">
                <h1 className="text-2xl font-bold">Web Development</h1>
                <p>
                  En tant que développeur Full Stack, j’ai développé des
                  fonctionnalités pour des applications variées en utilisant
                  React, Next.js et d’autres technologies.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#2E2E2E] border-none text-white hover:bg-[#464646] w-full h-[150px]">
          <CardContent className="px-6 pt-6 h-full flex flex-col justify-between">
            <div className="flex items-start">
              <CodeXml size={30} className="text-[#BBB5A5] mr-2 flex-shrink-0" />
              <div className="flex-1">
                <h1 className="text-2xl font-bold">Web Fullstack</h1>
                <p>
                  Je développe des applications complètes, incluant frontend et
                  le backend avec des technologies modernes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#2E2E2E] border-none text-white hover:bg-[#464646] w-full h-[150px]">
          <CardContent className="px-6 pt-6 h-full flex flex-col justify-between">
            <div className="flex items-start">
              <TabletSmartphone size={30} className="text-[#BBB5A5] mr-2 flex-shrink-0" />
              <div className="flex-1">
                <h1 className="text-2xl font-bold">Mobile App</h1>
                <p>
                  Je sais adapter les technologies web pour créer des
                  applications mobiles réactives et fonctionnelles.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;