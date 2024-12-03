import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-separator";
import { AppWindow, CodeXml, TabletSmartphone } from "lucide-react";
import React from "react";

const About: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">A propos de moi</h1>
      <Separator className="h-1 w-[100px] rounded-full bg-[#BBB5A5] mb-4" />
      <p className="flex text-justify">
        Bonjour, je suis Benoît, développeur fullstack avec trois ans
        d’expérience. Passionné par les nouvelles technologies, je suis en quête
        constante d’apprentissage pour perfectionner mes compétences. La
        pratique intensive de divers sports m’a inculqué le goût de l’effort et
        la persévérance, des qualités que j’applique quotidiennement dans mes
        projets professionnels. Que ce soit dans le sport ou le développement,
        je me challenge continuellement pour atteindre l’excellence.
      </p>
      <div className="py-8 flex justify-center">
        <Separator className="h-1 w-[400px] rounded-full bg-[#BBB5A5]" />
      </div>
      <h1 className="text-2xl font-bold">Ce que je fais</h1>
      <Separator className="h-1 w-[100px] rounded-full bg-[#BBB5A5] mb-4" />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 relative">
        <Card className="bg-[#2E2E2E] border-none text-white hover:bg-[#464646] w-full h-[150px] z-10 opacity-90">
          <CardContent className="px-6 pt-6 h-full flex flex-col justify-between">
            <div className="flex items-start">
              <AppWindow
                size={30}
                className="text-[#BBB5A5] mr-2 flex-shrink-0"
              />
              <div className="flex-1">
                <div className="relative">
                  <h1 className="text-2xl font-bold relative z-10">
                    <span className="relative z-10">Web Design</span>
                    <Separator
                      className={`absolute h-[8px] w-[${
                        "Web Design".length * 10
                      }px] bg-[#DF058D] bottom-2`}
                    />
                  </h1>
                </div>
                <p>
                  Je crée des interfaces web modernes et fonctionnelles, en
                  assurant un design attractif et une bonne expérience
                  utilisateur.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* <Card className="bg-[#2E2E2E] border-none text-white hover:bg-[#464646] w-full h-[150px]">
          <CardContent className="px-6 pt-6 h-full flex flex-col justify-between">
            <div className="flex items-start">
              <CodeXml
                size={30}
                className="text-[#BBB5A5] mr-2 flex-shrink-0"
              />
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
        </Card> */}
        <Card className="bg-[#2E2E2E] border-none text-white hover:bg-[#464646] w-full h-[150px] z-10 opacity-90">
          <CardContent className="px-6 pt-6 h-full flex flex-col justify-between">
            <div className="flex items-start">
              <CodeXml
                size={30}
                className="text-[#BBB5A5] mr-2 flex-shrink-0"
              />
              <div className="flex-1">
                <div className="relative">
                  <h1 className="text-2xl font-bold relative z-10">
                    <span className="relative z-10">Web Fullstack</span>
                    <Separator
                      style={{
                        width: `${"Web Fullstack".length * 10}px`,
                      }}
                      className="absolute h-[8px] bg-[#2C49D8] bottom-2"
                    />
                  </h1>
                </div>
                {/* <h1 className="text-2xl font-bold">Web Fullstack</h1> */}
                <p>
                  Je développe des applications complètes, incluant frontend et
                  le backend avec des technologies modernes.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#2E2E2E] border-none text-white hover:bg-[#464646] w-full h-[150px] z-10 opacity-90">
          <CardContent className="px-6 pt-6 h-full flex flex-col justify-between">
            <div className="flex items-start">
              <TabletSmartphone
                size={30}
                className="text-[#BBB5A5] mr-2 flex-shrink-0"
              />
              <div className="flex-1">
                <div className="relative">
                  <h1 className="text-2xl font-bold relative z-10">
                    <span className="relative z-10">Mobile App</span>
                    <Separator
                      className={`absolute h-[8px] w-[${
                        "Mobile App".length * 10
                      }px] bg-[#FF6B2B] bottom-2`}
                    />
                  </h1>
                </div>
                {/* <h1 className="text-2xl font-bold">Mobile App</h1> */}
                <p>
                  Je sais adapter les technologies web pour créer des
                  applications mobiles réactives et fonctionnelles.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="hidden  absolute md:flex justify-center items-center top-28 w-full opacity-60">
          <img
            src="/background-about.webp"
            alt="profile"
            className="rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default About;
