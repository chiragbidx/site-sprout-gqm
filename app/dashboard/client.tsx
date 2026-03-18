"use client";

import { Button } from "@/components/ui/button";

type ClientProps = {
  greeting: string;
  firstName: string;
};

export default function Client({ greeting, firstName }: ClientProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">
        {greeting}, {firstName}!
      </h1>
      <p className="text-muted-foreground">
        Track your customers, manage your pipeline, and power your team with DealNest.
      </p>

      <div className="mt-16 flex flex-col items-center py-20">
        <h2 className="text-xl font-semibold mb-2">
          No activity yet. Start by adding your first contact or company.
        </h2>
        <div className="flex gap-4 mt-4">
          <Button asChild>
            <a href="/dashboard/contacts">Add Contact</a>
          </Button>
          <Button asChild variant="secondary">
            <a href="/dashboard/companies">Add Company</a>
          </Button>
        </div>
      </div>
    </div>
  );
}