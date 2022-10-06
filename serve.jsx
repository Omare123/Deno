import { ReactDOMServer, React } from "./dep.ts";
import { createApp } from "https://deno.land/x/servest/mod.ts";
import App from "./front.tsx";
const app = createApp();

const colors: string[] = [];

app.post("/", (req) => {
    // colors.push(req.body.toString())
    console.log(req.body)
})

app.get("/", async (req) => {
    await req.respond({
        status: 200,
        headers: new Headers({
            "content-type": "text/html; charset=UTF-8"
        }),
        body: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="https://cdn.jsdelivr.net/npm/tailwindcss/dist/tailwind.min.css" rel="stylesheet">
            <title>Sanity <-> Deno</title>
        </head>
        <body >
            <div id="root">${ReactDOMServer.renderToString(<App colors={colors}/>)}
            </div>
        </body>
        </html>`
            
    })
});

app.listen({port: 8081});