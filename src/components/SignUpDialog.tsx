import { useState } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface SignUpDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSuccess?: () => void;
}

const SignUpDialog = ({ open, onOpenChange, onSuccess }: SignUpDialogProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Welcome to Altvis!",
      description: "Your account has been created successfully.",
    });

    setIsSubmitting(false);
    onOpenChange(false);
    setFormData({ name: '', email: '', phone: '' });
    onSuccess?.();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            Start Your Journey
          </DialogTitle>
          <DialogDescription className="text-center">
            Create your free Altvis account to access your personalized dashboard
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name</Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={(e) => handleInputChange('name', e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              required
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full mt-6" 
            disabled={isSubmitting}
          >
            {isSubmitting ? "Creating Account..." : "Create Free Account"}
          </Button>
          
          <p className="text-xs text-center text-gray-500 mt-4">
            By signing up, you agree to our Terms of Service and Privacy Policy
          </p>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default SignUpDialog;