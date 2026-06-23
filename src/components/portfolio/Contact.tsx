import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Send, Loader2, CheckCircle2, Github, Linkedin, Mail } from "lucide-react";
import { SectionWrapper } from "./SectionWrapper";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("That doesn't look like a valid email."),
  message: z.string().min(10, "Tell me a bit more (10+ characters)."),
});

type ContactValues = z.infer<typeof contactSchema>;

export function Contact() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur",
  });

  const onSubmit = async (values: ContactValues) => {
    // TODO: wire this to a real backend.
    // Recommended: POST to a TanStack server function or a service like Resend.
    // Example:
    //   await fetch("/api/contact", { method: "POST", body: JSON.stringify(values) })
    // Add the provider API key in the project's Cloud secrets — never inline it here.
    await new Promise((r) => setTimeout(r, 900));
    // eslint-disable-next-line no-console
    console.log("Contact submission (stub):", values);
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <SectionWrapper
      id="contact"
      eyebrow="05 / Contact"
      title="Have something in mind?"
      description="Whether it's a full-time role, a freelance build, or just a hello — the inbox is open."
    >
      <div className="grid gap-10 md:grid-cols-5">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-5 md:col-span-3"
          noValidate
        >
          <Field
            label="Name"
            id="name"
            error={errors.name?.message}
            registration={register("name")}
          />
          <Field
            label="Email"
            id="email"
            type="email"
            error={errors.email?.message}
            registration={register("email")}
          />
          <div>
            <label
              htmlFor="message"
              className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
            >
              Message
            </label>
            <textarea
              id="message"
              rows={5}
              {...register("message")}
              className="w-full resize-none rounded-xl border border-border bg-card/40 px-4 py-3 text-sm text-foreground outline-none ring-0 transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:bg-card"
              placeholder="What are you working on?"
            />
            {errors.message?.message && (
              <p className="mt-1.5 text-xs text-destructive">{errors.message.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={isSubmitting || sent}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:scale-[1.03] hover:shadow-[0_0_30px_-5px_oklch(0.68_0.18_255_/_0.6)] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {sent ? (
              <>
                <CheckCircle2 className="h-4 w-4" />
                Message sent
              </>
            ) : isSubmitting ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" />
                Sending…
              </>
            ) : (
              <>
                <Send className="h-4 w-4" />
                Send message
              </>
            )}
          </button>
        </form>

        <aside className="space-y-4 md:col-span-2">
          <ContactLink
            href="mailto:hello@adib.dev"
            label="hello@adib.dev"
            Icon={Mail}
          />
          <ContactLink href="https://github.com/" label="GitHub" Icon={Github} />
          <ContactLink href="https://linkedin.com/" label="LinkedIn" Icon={Linkedin} />
        </aside>
      </div>
    </SectionWrapper>
  );
}

interface FieldProps {
  label: string;
  id: string;
  type?: string;
  error?: string;
  registration: ReturnType<ReturnType<typeof useForm<ContactValues>>["register"]>;
}

function Field({ label, id, type = "text", error, registration }: FieldProps) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground"
      >
        {label}
      </label>
      <input
        id={id}
        type={type}
        {...registration}
        className="w-full rounded-xl border border-border bg-card/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/60 focus:bg-card"
      />
      {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
    </div>
  );
}

function ContactLink({
  href,
  label,
  Icon,
}: {
  href: string;
  label: string;
  Icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center justify-between rounded-2xl border border-border bg-card/40 px-5 py-4 backdrop-blur transition-colors hover:border-primary/40 hover:bg-card"
    >
      <span className="flex items-center gap-3 text-sm text-foreground">
        <Icon className="h-4 w-4 text-primary" />
        {label}
      </span>
      <span
        aria-hidden
        className="text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
      >
        →
      </span>
    </a>
  );
}
