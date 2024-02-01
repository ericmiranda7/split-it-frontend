import type {PageLoad} from "./$types";
import { env} from "$env/dynamic/public";

export const load: PageLoad = async () => {
    const res = await fetch(env.PUBLIC_BACKEND_HOSTNAME);
    return {
        amt: Number(await res.text())
    }
}