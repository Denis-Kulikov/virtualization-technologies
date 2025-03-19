FROM gcc:latest AS build
WORKDIR /app
COPY . . 
RUN mkdir -p bin && \
    [ -f large_file ] && cp large_file bin/ || true && \
    gcc main.c -o bin/main

FROM alpine:latest
WORKDIR /app
COPY --from=build /app/bin /app/
CMD ["./main"]
