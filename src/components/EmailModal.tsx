import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useState } from "react";

interface EmailModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: { email: string; firstName: string }) => void;
}

export default function EmailModal({
  open,
  onClose,
  onSubmit,
}: EmailModalProps) {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");

  const handleSubmit = () => {
    if (email && firstName) {
      onSubmit({ email, firstName });
      onClose();
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Recevez votre analyse complète</DialogTitle>
        </DialogHeader>
        <p className="text-sm text-muted-foreground mb-4">
          Renseignez votre prénom et e-mail pour recevoir votre rapport
          détaillé.
        </p>
        <Input
          placeholder="Prénom"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          className="mb-2"
        />
        <Input
          placeholder="Adresse e-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          className="mb-4"
        />
        <Button onClick={handleSubmit} className="w-full">
          Recevoir mon rapport
        </Button>
      </DialogContent>
    </Dialog>
  );
}
