import { redirect } from "next/navigation";

export default function Root() {
	redirect("/agents");
	return null;
}
