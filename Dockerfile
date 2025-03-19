FROM gcc:latest AS build
WORKDIR /app
COPY . .
RUN gcc main.c -o main

FROM alpine:latest
WORKDIR /app
COPY --from=build /app/main /app/main
CMD ["./main"]
