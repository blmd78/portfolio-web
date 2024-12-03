import React from "react";
import { TimelineLayout } from "./timeline/timeline-layout";
import { timelineData, timelineEducation } from "../data";
import { Separator } from "@radix-ui/react-separator";
import { Card, CardContent } from "@/components/ui/card";
import { Code } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

const Resume: React.FC = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">Resume</h1>
      <Separator className="h-1 w-[40px] rounded-full bg-[#BBB5A5] mb-4" />
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
        <div>
          <h1 className="text-2xl font-bold mb-4">Experience</h1>
          {/* <TimelineLayout items={timelineData} /> */}
          <Accordion type="single" collapsible className="w-full">
            {timelineData.map((item, index) => (
              <AccordionItem value={`item-${index}`} className="border-none">
                <AccordionTrigger className="bg-[#2E2E2E] text-white hover:bg-[#464646] rounded-md mb-4 flex justify-between px-4">
                  <div>{item.title}</div>
                  <div>
                    {item.date1} - {item.date2}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="bg-[#464646] rounded-md p-4 mb-4">
                  {item.description.split("•").map((text, index) => (
                    <p key={index} className="mb-2">
                      {index > 0 && " • "}
                      {text.trim()}
                    </p>
                  ))}

                  <div className="justify-center flex">
                    <img
                      src={item.companyIcon}
                      alt="company icon"
                      height={100}
                      className="h-[100px]"
                    />
                  </div>
                  <div>
                    {item?.skills?.map((skill) => (
                      <Badge variant="secondary" className="bg-[#BBB5A5] m-1">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div>
          <h1 className="text-2xl font-bold mb-4">Education</h1>
           <TimelineLayout items={timelineEducation} />
        </div>
      </div>

      <div className="py-4 flex justify-center">
        <Separator className="h-1 w-[400px] rounded-full bg-[#BBB5A5]" />
      </div>
      <h1 className="text-2xl font-bold">My Skills</h1>
      <Separator className="h-1 w-[40px] rounded-full bg-[#BBB5A5] mb-4" />
      <div className="grid lg:grid-cols-6 grid-cols-1 gap-4">
        <Card className="bg-[#2E2E2E] border-none text-white hover:bg-[#464646] w-full">
          <CardContent className="px-6 pt-6 h-full flex flex-col justify-between">
            <div className="flex items-start items-center">
              <Code size={30} className="text-[#BBB5A5] mr-2 flex-shrink-0" />
              <div className="flex-1">
                <h1 className="font-bold">ReactJs</h1>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#2E2E2E] border-none text-white hover:bg-[#464646] w-full">
          <CardContent className="px-6 pt-6 h-full flex flex-col justify-between">
            <div className="flex items-start items-center">
              <Code size={30} className="text-[#BBB5A5] mr-2 flex-shrink-0" />
              <div className="flex-1">
                <h1 className="font-bold">NodeJs</h1>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* <Card className="bg-[#2E2E2E] border-none text-white hover:bg-[#464646] w-full">
          <CardContent className="px-6 pt-6 h-full flex flex-col justify-between">
            <div className="flex items-start items-center">
              <Code size={30} className="text-[#BBB5A5] mr-2 flex-shrink-0" />
              <div className="flex-1">
                <h1 className="font-bold">Express</h1>
              </div>
            </div>
          </CardContent>
        </Card> */}
        <Card className="bg-[#2E2E2E] border-none text-white hover:bg-[#464646] w-full">
          <CardContent className="px-6 pt-6 h-full flex flex-col justify-between">
            <div className="flex items-start items-center">
              <Code size={30} className="text-[#BBB5A5] mr-2 flex-shrink-0" />
              <div className="flex-1">
                <h1 className="font-bold">NextJs</h1>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#2E2E2E] border-none text-white hover:bg-[#464646] w-full">
          <CardContent className="px-6 pt-6 h-full flex flex-col justify-between">
            <div className="flex items-start items-center">
              <Code size={30} className="text-[#BBB5A5] mr-2 flex-shrink-0" />
              <div className="flex-1">
                <h1 className="font-bold">Shadcn</h1>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#2E2E2E] border-none text-white hover:bg-[#464646] w-full">
          <CardContent className="px-6 pt-6 h-full flex flex-col justify-between">
            <div className="flex items-start items-center">
              <Code size={30} className="text-[#BBB5A5] mr-2 flex-shrink-0" />
              <div className="flex-1">
                <h1 className="font-bold">MongoDB</h1>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* <Card className="bg-[#2E2E2E] border-none text-white hover:bg-[#464646] w-full">
          <CardContent className="px-6 pt-6 h-full flex flex-col justify-between">
            <div className="flex items-start items-center">
              <Code size={30} className="text-[#BBB5A5] mr-2 flex-shrink-0" />
              <div className="flex-1">
                <h1 className="font-bold">Python</h1>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#2E2E2E] border-none text-white hover:bg-[#464646] w-full">
          <CardContent className="px-6 pt-6 h-full flex flex-col justify-between">
            <div className="flex items-start items-center">
              <Code size={30} className="text-[#BBB5A5] mr-2 flex-shrink-0" />
              <div className="flex-1">
                <h1 className="font-bold">Azure</h1>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="bg-[#2E2E2E] border-none text-white hover:bg-[#464646] w-full">
          <CardContent className="px-6 pt-6 h-full flex flex-col justify-between">
            <div className="flex items-start items-center">
              <Code size={30} className="text-[#BBB5A5] mr-2 flex-shrink-0" />
              <div className="flex-1">
                <h1 className="font-bold">GIT</h1>
              </div>
            </div>
          </CardContent>
        </Card> */}
        {/* <Card className="bg-[#2E2E2E] border-none text-white hover:bg-[#464646] w-full">
          <CardContent className="px-6 pt-6 h-full flex flex-col justify-between">
            <div className="flex items-start items-center">
              <Code size={30} className="text-[#BBB5A5] mr-2 flex-shrink-0" />
              <div className="flex-1">
                <h1 className="font-bold">SQL</h1>
              </div>
            </div>
          </CardContent>
        </Card> */}
        {/* <Card className="bg-[#2E2E2E] border-none text-white hover:bg-[#464646] w-full">
          <CardContent className="px-6 pt-6 h-full flex flex-col justify-between">
            <div className="flex items-start items-center">
              <Code size={30} className="text-[#BBB5A5] mr-2 flex-shrink-0" />
              <div className="flex-1">
                <h1 className="font-bold">Docker</h1>
              </div>
            </div>
          </CardContent>
        </Card> */}
        <Card className="bg-[#2E2E2E] border-none text-white hover:bg-[#464646] w-full">
          <CardContent className="px-6 pt-6 h-full flex flex-col justify-between">
            <div className="flex items-start items-center">
              <Code size={30} className="text-[#BBB5A5] mr-2 flex-shrink-0" />
              <div className="flex-1">
                <h1 className="font-bold">Typescript</h1>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Resume;
