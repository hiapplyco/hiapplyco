
import { useState } from "react";
import NeonTextAnimation from "@/components/NeonTextAnimation";
import SimpleAnimation from "@/components/SimpleAnimation";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function AnimationDemo() {
  const [animationType, setAnimationType] = useState<"threeJS" | "canvas">("threeJS");
  const [customText, setCustomText] = useState("Apply");

  return (
    <main className="min-h-[300vh] bg-[#050505] text-white">
      <div className="p-5 pt-24 max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center">Animation Demos</h1>
        
        <Tabs defaultValue="threeJS" className="w-full mb-8" onValueChange={(value) => setAnimationType(value as "threeJS" | "canvas")}>
          <TabsList className="grid grid-cols-2 w-full">
            <TabsTrigger value="threeJS">Three.js (3D)</TabsTrigger>
            <TabsTrigger value="canvas">Canvas (2D)</TabsTrigger>
          </TabsList>
          <TabsContent value="threeJS" className="py-4">
            <p className="text-gray-300 mb-4">
              This demo shows a 3D particle animation created with Three.js. As you scroll down,
              the particles disperse based on scroll position.
            </p>
            <div className="flex space-x-2 mb-6">
              <input
                type="text"
                value={customText}
                onChange={(e) => setCustomText(e.target.value)}
                className="bg-gray-800 border border-gray-700 rounded px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-accent"
                placeholder="Enter custom text"
              />
              <Button variant="outline" onClick={() => setCustomText("Apply")}>
                Reset
              </Button>
            </div>
          </TabsContent>
          <TabsContent value="canvas" className="py-4">
            <p className="text-gray-300 mb-6">
              This demo shows a 2D particle animation created with Canvas API. The text is sampled
              as pixels and converted to particles that disperse as you scroll.
            </p>
          </TabsContent>
        </Tabs>

        {animationType === "threeJS" ? (
          <NeonTextAnimation text={customText} />
        ) : (
          <SimpleAnimation />
        )}
      </div>

      <div className="pt-[100vh] p-5 max-w-xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Scroll Animation</h2>
        <p className="text-lg text-gray-300">
          Keep scrolling to see the effect. The particles will gradually disperse as you scroll down the page.
        </p>
      </div>

      <div className="p-5 max-w-xl mx-auto text-center mt-20">
        <p className="text-lg text-gray-300">
          Continue scrolling to see the full explosion effect. By the time you reach the bottom of the page, the
          particles will be completely dispersed.
        </p>
      </div>

      <div className="p-5 max-w-xl mx-auto text-center mt-[100vh]">
        <p className="text-lg text-gray-300">
          At this point, the particles should be fully dispersed across the screen.
        </p>
      </div>
    </main>
  );
}
