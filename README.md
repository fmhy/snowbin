# snowbin (v2)

Snowbin is a delightfully crafted pastebin with markdown support. Pastes are
saved upto 7 days before being deleted.

## Usage

See https://pastes.fmhy.net.

## Development

This project uses Bun and the server is deployed on Cloudflare Workers. You
shouldn't necessarily need an account to use Wrangler.

You just have to clone this repository, `bun install`, `bun build:css` to build
the scss, then `bun dev` to start wrangler dev.

Server is built with Hono with `hono/jsx` for templating, SCSS and TailwindCSS
with radix-colors, shiki and markdown-it for markdown.

## Contributing

1. Fork it (<https://github.com/fmhy/snowbin/fork>)
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request

## Follow

<p valign="center">
  <a href="https://discord.gg/Stz6y6NgNg"><img width="20px" src="./.github/assets/discord.svg" alt="Discord"></a>&nbsp;&nbsp;<a href="https://github.com/fmhy"><img width="20px" src="./.github/assets/github.svg" alt="GitHub"></a>&nbsp;&nbsp;<a href="https://social.fmhy.net/@fmhy"><img width="20px" src="./.github/assets/firefish.svg" alt="Firefish"></a>
</p>
