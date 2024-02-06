import { env } from "$env/dynamic/public";

export async function load() {
    const res = await fetch(env.PUBLIC_BACKEND_HOSTNAME + "/api/accounts/eric");
    return {
        // amount: Number(await res.text())
        amount: await res.text()
    }
}