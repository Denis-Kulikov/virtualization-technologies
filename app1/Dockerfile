FROM gcc:latest AS build
WORKDIR /app
COPY . . 
RUN mkdir -p bin && \
    [ -f large_file ] && cp large_file bin/ || true && \
    gcc main.c -o bin/main

FROM debian:bookworm-slim
WORKDIR /app
COPY --from=build /app/bin /app/
EXPOSE 80
CMD ["./main"]