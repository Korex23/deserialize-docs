type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

type EndpointProps = {
  method: HttpMethod;
  path: string;
  description?: string;
};

const Endpoint = ({ method, path, description }: EndpointProps) => {
  const methodColors = {
    GET: "bg-blue-100 text-blue-700 border-blue-300",
    POST: "bg-green-100 text-green-700 border-green-300",
    PUT: "bg-yellow-100 text-yellow-700 border-yellow-300",
    DELETE: "bg-red-100 text-red-700 border-red-300",
  };

  return (
    <div className="flex items-center gap-3 bg-green-50 border border-green-200 rounded-lg p-3 mb-2">
      <span
        className={`px-3 py-1 rounded text-xs font-bold border ${methodColors[method]}`}
      >
        {method}
      </span>
      <code className="text-green-900 font-mono text-sm">{path}</code>
      {description && (
        <span className="text-gray-600 text-sm ml-auto">{description}</span>
      )}
    </div>
  );
};

export default Endpoint;
