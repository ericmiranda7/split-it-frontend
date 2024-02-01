import type {PageLoad} from "./$types";
import { env } from "$env/dynamic/public";

export const load: PageLoad = async () => {
    const res = await fetch(env.PUBLIC_BACKEND_HOSTNAME);
    return {
        // amount: Number(await res.text())
        amount: -2
    }
}