export default function ContactsPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2">Your Contacts</h1>
      <p className="text-muted-foreground mb-8">
        No contacts yet. Add your first customer to get started.
      </p>
      <div>
        <a
          href="#"
          className="bg-primary text-white px-6 py-2 rounded-md font-semibold shadow"
        >
          Add Contact
        </a>
      </div>
    </div>
  );
}