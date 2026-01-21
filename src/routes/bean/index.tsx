import { createFileRoute } from "@tanstack/react-router";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useState } from "react";
import clsx from "clsx";
import { Button } from "@/components/ui/button";
import * as motion from "motion/react-client";

export const Route = createFileRoute("/bean/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [isViolet, setIsViolet] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <h2
        className={clsx("text-6xl", {
          "bg-indigo-100 px-4 rounded-md": isViolet,
        })}
      >
        Testa React-bibliotek
      </h2>
      <Button variant="secondary" onClick={() => setIsViolet(!isViolet)}>
        Toggla bakgrundsfärg på rubriken
      </Button>
      <p>Här kan du testa olika färdigbyggda UI-komponenter</p>
      <div className="min-h-32">
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.4,
              scale: { type: "spring", visualDuration: 0.4, bounce: 0.5 },
            }}
            className="size-32 rounded-full bg-amber-500"
          />
        )}
      </div>
      <Button
        onClick={() => {
          setIsVisible(false);
          setTimeout(() => {
            setIsVisible(true);
          }, 0);
        }}
      >
        Starta om animationer
      </Button>
      {isVisible && (
        <motion.h1 drag className="rounded-md bg-indigo-100 px-4">
          draggable heading
        </motion.h1>
      )}

      <Accordion
        type="single"
        collapsible
        defaultValue="item-1"
        className="border w-1/2 p-4 rounded-md"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Lär dig mer om shadcn</AccordionTrigger>
          <AccordionContent>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos unde
              eum, dolorem eaque, impedit est dignissimos, sapiente aperiam
              officiis enim ab mollitia quia harum! Nemo porro dicta vero
              eligendi cupiditate.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </>
  );
}
