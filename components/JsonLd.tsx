/** Renders one or more JSON-LD schema objects as a script tag. Server component. */
export default function JsonLd({ schema }: { schema: object | object[] }) {
  const json = Array.isArray(schema) ? schema : [schema];
  return (
    <>
      {json.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(s) }}
        />
      ))}
    </>
  );
}
