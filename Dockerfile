ARG NODE_VERSION=22.6.0
FROM node:${NODE_VERSION}-slim AS base

WORKDIR /app
ENV NODE_ENV="production"

ARG PNPM_VERSION=10.10.0
RUN npm install -g pnpm@$PNPM_VERSION


FROM base AS build
RUN apt-get update -qq && \
    apt-get install --no-install-recommends -y build-essential node-gyp pkg-config python-is-python3

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod=false

COPY . .
RUN pnpm run build
RUN pnpm prune --prod


FROM base
COPY --from=build /app /app

EXPOSE 3000
CMD [ "pnpm", "run", "start" ]
