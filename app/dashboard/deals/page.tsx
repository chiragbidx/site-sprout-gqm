export default function DealsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Your Deals Pipeline</h1>
      <p className="text-muted-foreground mb-8">
        No deals in your pipeline. Start tracking opportunities.
      </p>
      <div>
        <a
          href="#"
          className="bg-primary text-white px-6 py-2 rounded-md font-semibold shadow"
        >
          Add Deal
        </a>
      </div>
    </div>
  );
}