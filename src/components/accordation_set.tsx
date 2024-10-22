import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function AccordionDemo() {
  return (
    <Accordion type="single" collapsible className="w-full max-w-7xl mx-auto max-sm:mr-16">
      <AccordionItem value="item-1">
        <AccordionTrigger>
          What makes Limelight different from other social platforms?
        </AccordionTrigger>
        <AccordionContent>
          We belive Limelight stands out due to: <br></br>- Its focus on
          creators instead of end users. <br></br>- Exclusive community lounges
          that facilitate interactions between users and creators <br></br>- A
          strong emphasis on gamification to encourage active participation{" "}
          <br></br>- Comprehensive monetization solutions for creators through
          advertising and e-commerce integrations
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>
          How does gamification work on Limelight?
        </AccordionTrigger>
        <AccordionContent>
          Limelight uses various metrics to calculate XP (experience points)
          from content interactions. This XP contributes to levels and ranks,
          which can lead to leaderboards and trending sections based on region
          and topic. Users can earn XP by engaging with content, which can
          unlock achievements, badges, and rewards.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>
          What are the benefits of joining lounges?
        </AccordionTrigger>
        <AccordionContent>
          Joining lounges allows users to:
          <br></br>- Interact with like-minded individuals
          <br></br>- Engage in activities and challenges set by the creator
          <br></br>- Access exclusive content and sections
          <br></br>- Earn points, levels, and ranks within the lounge community
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
