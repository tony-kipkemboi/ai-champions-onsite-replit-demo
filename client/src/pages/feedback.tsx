import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { CheckCircle } from "lucide-react";
import { feedbackSchema, departments, type Feedback } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function FeedbackPage() {
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<Feedback>({
    resolver: zodResolver(feedbackSchema),
    defaultValues: {
      name: "",
      department: undefined,
      message: "",
    },
  });

  const submitMutation = useMutation({
    mutationFn: async (data: Feedback) => {
      await apiRequest("POST", "/api/feedback", data);
    },
    onSuccess: () => {
      setSubmitted(true);
    },
  });

  const onSubmit = (data: Feedback) => {
    submitMutation.mutate(data);
  };

  const handleSubmitAnother = () => {
    setSubmitted(false);
    form.reset();
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background flex flex-col">
        <header className="p-6">
          <span className="text-xl font-semibold text-foreground" data-testid="text-logo">Guild</span>
        </header>
        <main className="flex-1 flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl">
            <CardContent className="p-8 flex flex-col items-center justify-center space-y-6 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-primary" data-testid="icon-success" />
              </div>
              <div className="space-y-2">
                <h2 className="text-xl font-semibold text-foreground" data-testid="text-thank-you">Thank You!</h2>
                <p className="text-muted-foreground" data-testid="text-confirmation">
                  Your feedback has been submitted successfully. We appreciate you taking the time to share your thoughts.
                </p>
              </div>
              <Button
                variant="outline"
                onClick={handleSubmitAnother}
                data-testid="button-submit-another"
              >
                Submit Another Response
              </Button>
            </CardContent>
          </Card>
        </main>
        <footer className="p-6 text-center">
          <p className="text-xs text-muted-foreground" data-testid="text-footer">
            Submissions are confidential and reviewed by HR
          </p>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <header className="p-6">
        <span className="text-xl font-semibold text-foreground" data-testid="text-logo">Guild</span>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-2xl">
          <CardHeader className="p-8 pb-6">
            <CardTitle className="text-2xl font-semibold" data-testid="text-title">Employee Feedback</CardTitle>
            <CardDescription data-testid="text-subtitle">
              Share your thoughts with us. All feedback is valued and reviewed.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 pt-0">
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium uppercase tracking-wide">
                        Full Name <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="Enter your full name"
                          className="h-12"
                          data-testid="input-name"
                          aria-required="true"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="department"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium uppercase tracking-wide">
                        Department <span className="text-destructive">*</span>
                      </FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger 
                            className="h-12" 
                            data-testid="select-department"
                            aria-required="true"
                          >
                            <SelectValue placeholder="Select your department" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {departments.map((dept) => (
                            <SelectItem key={dept} value={dept} data-testid={`option-department-${dept.toLowerCase()}`}>
                              {dept}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm font-medium uppercase tracking-wide">
                        Your Feedback <span className="text-destructive">*</span>
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          placeholder="Share your thoughts, suggestions, or concerns..."
                          rows={6}
                          className="resize-y"
                          data-testid="input-message"
                          aria-required="true"
                        />
                      </FormControl>
                      <div className="flex justify-between items-center">
                        <FormMessage />
                        <span className="text-sm text-muted-foreground" data-testid="text-char-count">
                          {field.value?.length || 0} characters
                        </span>
                      </div>
                    </FormItem>
                  )}
                />

                <div className="pt-2 flex justify-center">
                  <Button
                    type="submit"
                    className="h-12 min-w-[200px] w-full md:w-auto bg-[#F2642C] hover-elevate active-elevate-2 text-white font-medium"
                    disabled={submitMutation.isPending}
                    data-testid="button-submit"
                  >
                    {submitMutation.isPending ? "Submitting..." : "Submit Feedback"}
                  </Button>
                </div>

                {submitMutation.isError && (
                  <p className="text-sm text-destructive text-center" data-testid="text-error">
                    There was an error submitting your feedback. Please try again.
                  </p>
                )}
              </form>
            </Form>
          </CardContent>
        </Card>
      </main>
      <footer className="p-6 text-center">
        <p className="text-xs text-muted-foreground" data-testid="text-footer">
          Submissions are confidential and reviewed by HR
        </p>
      </footer>
    </div>
  );
}
