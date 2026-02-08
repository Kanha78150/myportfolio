// Example: How to use Redux location state in any component

/\*
import { useAppSelector } from "@/lib/hooks";

export default function YourComponent() {
const location = useAppSelector((state) => state.location.name);
const isLoading = useAppSelector((state) => state.location.isLoading);
const error = useAppSelector((state) => state.location.error);

return (
<div>
{isLoading && <p>Loading location...</p>}
{error && <p>Error: {error}</p>}
{location && <p>Location: {location}</p>}
</div>
);
}
\*/
