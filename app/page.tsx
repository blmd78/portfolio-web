import { Metadata } from "next";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
// import Avatar from "/portfolio.png";
import { Button } from "@/components/ui/button";
import { Calendar, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import About from "./components/about";
import Resume from "./components/resume";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import { ScrollArea } from "@/components/ui/scroll-area";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default function Home() {
  return (
    <div className="bg-[#101010]">
      <div className="flex-1 space-y-4 lg:p-8 p-4">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-12 h-[calc(100vh-64px)] grid-cols-1">
          <Card className="lg:col-span-2 col-span-6 bg-[#212121] border-none text-white flex flex-col justify-center h-full">
            <CardHeader>
              <CardTitle>
                <div className="flex justify-center">
                  <Card className="w-54 h-54 bg-[#464646] border-none text-white flex items-center justify-center">
                    <CardContent className="">
                      {" "}
                      <Image
                      src="/portfolio.png"
                      width={200}
                      height={200}
                        alt="portfolio"
                        className="w-48 h-48 object-cover"
                      />
                    </CardContent>
                  </Card>
                </div>
                <div className="p-4 flex justify-center mt-4">
                  Benoit GASNIER
                </div>
                <div className="flex justify-center mb-6">
                  <Button className="bg-[#2E2E2E]  hover:bg-[#464646]">
                    Web Developer Fullstack
                  </Button>
                </div>
                <Separator className="h-1 w-full rounded-full bg-[#BBB5A5]" />
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6">
              <div className="flex justify-start items-center mb-6">
                <div className="w-54 h-54 bg-[#464646] text-white flex items-center justify-center p-2 rounded-lg mr-2">
                  <Mail size={24} className="text-[#BBB5A5]"/>
                </div>
                <div className="truncate max-w-xs" style={{ lineHeight: "1" }}>
                  benoit.gasnier@epitech.eu
                </div>
              </div>
              <div className="flex justify-start items-center mb-6">
                <div className="w-54 h-54 bg-[#464646] text-white flex items-center justify-center p-2 rounded-lg mr-2">
                  <Phone size={24} className="text-[#BBB5A5]"/>
                </div>
                <div className="truncate max-w-xs" style={{ lineHeight: "1" }}>
                  (+33) 6 95 41 83 47
                </div>
              </div>
              {/* <div className="flex justify-start items-center mb-6">
                <div className="w-54 h-54 bg-[#464646] text-white flex items-center justify-center p-2 rounded-lg mr-2">
                  <Calendar size={24} className="text-[#BBB5A5]"/>
                </div>
                <div className="truncate max-w-xs" style={{ lineHeight: "1" }}>
                  Juillet 2024
                </div>
              </div> */}
              <div className="flex justify-start items-center mb-6">
                <div className="w-54 h-54 bg-[#464646] text-white flex items-center justify-center p-2 rounded-lg mr-2">
                  <MapPin size={24} className="text-[#BBB5A5]"/>
                </div>
                <div className="truncate max-w-xs" style={{ lineHeight: "1" }}>
                  Paris
                </div>
              </div>
              <div className="flex justify-center">
                <div className="w-54 h-54 bg-[#464646] text-white hover:bg-[#2E2E2E] hover:cursor-pointer flex items-center justify-center p-2 rounded-lg mr-2">
                  <Linkedin size={24} className="text-[#BBB5A5]"/>
                </div>
                <div className="w-54 h-54 bg-[#464646] text-white hover:bg-[#2E2E2E] hover:cursor-pointer flex items-center justify-center p-2 rounded-lg mr-2">
                  <Github size={24} className="text-[#BBB5A5]"/>
                </div>
                {/* <Linkedin
                  size={30}
                  className="mr-2 hover:bg-[#464646] p-1 rounded-lg cursor-pointer"
                />
                <Github
                  size={30}
                  className="mr-2 hover:bg-[#464646] p-1 rounded-lg  cursor-pointer"
                /> */}
              </div>
            </CardContent>
          </Card>
          <Card className="lg:col-span-10 col-span-6  bg-[#212121] border-none text-white">
            <CardHeader>
              <Tabs defaultValue="about" className="w-full">
                <div className="flex justify-end">
                  <TabsList className="bg-[#2E2E2E] text-white">
                    <TabsTrigger
                      value="about"
                      className="data-[state=active]:bg-[#464646] data-[state=active]:text-[#BBB5A5]"
                    >
                      About
                    </TabsTrigger>
                    <TabsTrigger
                      value="resume"
                      className="data-[state=active]:bg-[#464646] data-[state=active]:text-[#BBB5A5]"
                    >
                      Resume
                    </TabsTrigger>
                    <TabsTrigger
                      value="portfolio"
                      className="data-[state=active]:bg-[#464646] data-[state=active]:text-[#BBB5A5]"
                    >
                      Portfolio
                    </TabsTrigger>
                    <TabsTrigger
                      value="contact"
                      className="data-[state=active]:bg-[#464646] data-[state=active]:text-[#BBB5A5]"
                    >
                      Contact
                    </TabsTrigger>
                  </TabsList>
                </div>
                <TabsContent
                  value="about"
                  // className="max-h-[calc(100vh-160px)] overflow-y-scroll"
                >
                  <ScrollArea className="h-[calc(100vh-160px)] -r-4 p-4"   >
                    <About />
                  </ScrollArea>
                </TabsContent>
                <TabsContent
                  value="resume"
                  // className="max-h-[calc(100vh-160px)] overflow-y-scroll"
                >
                  <ScrollArea className="h-[calc(100vh-160px)] -r-4 p-4">
                    <Resume />
                  </ScrollArea>
                </TabsContent>
                <TabsContent
                  value="portfolio"
                  // className="max-h-[calc(100vh-160px)] overflow-y-scroll"
                >
                  <ScrollArea className="h-[calc(100vh-160px)] -r-4 p-4">
                    <Portfolio />
                  </ScrollArea>
                </TabsContent>
                <TabsContent
                  value="contact"
                  // className="max-h-[calc(100vh-160px)] overflow-y-scroll"
                >
                  <ScrollArea className="h-[calc(100vh-160px)] -r-4 p-4">
                    <Contact />
                  </ScrollArea>
                </TabsContent>
              </Tabs>
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
}
