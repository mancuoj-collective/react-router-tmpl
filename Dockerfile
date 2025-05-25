FROM node:22-alpine AS base
WORKDIR /app
ENV NODE_ENV="production"
RUN npm install -g pnpm

FROM base AS build
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile --prod=false
COPY . .
RUN pnpm run build
RUN pnpm prune --prod

FROM base
COPY --from=build /app /app
EXPOSE 3000
CMD [ "pnpm", "run", "start" ]
