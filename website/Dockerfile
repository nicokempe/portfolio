ARG NODE_VERSION=20.5.1
FROM node:${NODE_VERSION}-slim as base
ARG PORT=3000
ENV NODE_ENV=production
WORKDIR /src
EXPOSE $PORT

# Build
FROM base as build
COPY --link package.json package-lock.json ./
RUN npm install --production=false
COPY --link . .
RUN npm run build
RUN npm prune

# Run
FROM base
ENV PORT=$PORT
COPY --from=build /src/.output /src/.output
# Optional, only needed if I rely on unbundled dependencies
# COPY --from=build /website/node_modules /website/node_modules
CMD [ "node", ".output/server/index.mjs" ]