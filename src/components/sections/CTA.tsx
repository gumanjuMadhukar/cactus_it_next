import { Button } from "../ui/Button";

export function CTA() {
  return (
    <section className="bg-slate-900">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-semibold tracking-tight text-white md:text-4xl">
              Ready to build something reliable?
            </h2>
            <p className="mt-3 text-base text-slate-300">
              Get a consultation and a clear plan—timeline, scope, and budget options. No pressure.
            </p>
          </div>
          {/* <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
            <Button asChild href="/contact" variant="primary">
              Contact Us
            </Button>
            <Button asChild href="/contact?intent=quote" variant="ghost">
              Get a Quote
            </Button>
          </div> */}
        </div>
      </div>
    </section>
  );
}
