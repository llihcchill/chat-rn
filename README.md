# chat-rn
> A simple chat app using experimental tech stack with a terrible UI.

This was completed in an afternoon and is one of my first completed projects with the following experimental tech stack:
 - [Express.js](https://expressjs.com/) web server (with [Socket.io](https://socket.io/) WebSocket end points for live updates, not technically apart of the stack but might as well mention it was used anyway)
 - [lit-html](https://lit.dev/docs/libraries/standalone-templates/)
 - JavaScript for the rest of the business logic (very inspired from this [guide](https://dev.to/azure/too-hard-too-soft-just-right-rendering-html-with-lit-html-1km8) (I stole a lot of the code))
 - [HTMX](https://htmx.org/) in this project is not used as there are no other pages to render (along with the fact that WebSockets did all the work required), but in that case HTMX can definitely be used in this stack
 - and [Pico CSS](https://picocss.com/) for the styling which did not turn out so well so I'll probably change it out for TailwindCSS next time

Main DX problems I've noticed with this tech stack are:
 - getting the libraries working (likely my fault with configuration I didn't know I needed to do which in and of itself is a downside)
 - type checking with passing variables through websockets (will use TypeScript next time, that is exactly what it has been build for)
 - and finally JavaScript's map() to render items from an array is a bit limiting if your array has items you wish to strip before rendering them (this will prompt going through the array, removing unwanted items, then going through the array again which is inefficient but will still work)

State is an interesting topic though, I haven't quite gotten an opinion of it from this project, but from what I can tell, you can store state easily in localStorage or use WebSockets/HTMX/regular forms to store it in the backend. Otherwise, you can reach for a proper state management system such as [Redux](https://github.com/jmas/lit-redux), [MobX](https://mobx.js.org/README.html) and [@lit-app/state](https://www.npmjs.com/package/@lit-app/state) among others.

Overall, most of the downsides I've discovered so far can be mostly fixed, but the upsides I see (close to bare metal JS => very fast, simple functional programming, not much unnessesary boilerplate, logical data-flow, flexible in use of backend, CSS/CSS libraries, and extensive JS libraries) make it very much worth sticking and experimenting with.

### **I probably will not continue development with this project, but some things I would improve would be the following:**
 - replace `var chat = []` server-side array with a proper database to store messages
 - make the centre card auto-scroll when messages render
 - fix the message

I hope this may have somehow inspired you to try something out you haven't thought of before from a type of project you've seen (and potentially made) millions of times :)
