import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ReactNode } from "react";

interface LegalModalProps {
  title: string;
  children: ReactNode;
  trigger: ReactNode;
}

const LegalModal = ({ title, children, trigger }: LegalModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh]">
        <DialogHeader>
          <DialogTitle className="font-serif text-2xl">{title}</DialogTitle>
        </DialogHeader>
        <ScrollArea className="max-h-[60vh] pr-4">
          <div className="prose prose-sm text-muted-foreground font-sans space-y-4">
            {children}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default LegalModal;
