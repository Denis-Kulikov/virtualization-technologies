#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <arpa/inet.h>

#define PORT 80  // Порт, который будет слушать сервер

int main() {
    int server_fd, client_fd;
    struct sockaddr_in server_addr, client_addr;
    socklen_t client_len = sizeof(client_addr);
    char buffer[1024];

    // Создаем сокет
    server_fd = socket(AF_INET, SOCK_STREAM, 0);
    if (server_fd < 0) {
        perror("Ошибка создания сокета");
        return 1;
    }

    // Настраиваем адрес сервера
    server_addr.sin_family = AF_INET;
    server_addr.sin_addr.s_addr = INADDR_ANY;
    server_addr.sin_port = htons(PORT);

    // Привязываем сокет к адресу
    if (bind(server_fd, (struct sockaddr*)&server_addr, sizeof(server_addr)) < 0) {
        perror("Ошибка привязки");
        return 1;
    }

    // Начинаем слушать порт
    if (listen(server_fd, 5) < 0) {
        perror("Ошибка listen()");
        return 1;
    }

    printf("Сервер слушает порт %d...\n", PORT);

    while (1) {
        // Принимаем соединение
        client_fd = accept(server_fd, (struct sockaddr*)&client_addr, &client_len);
        if (client_fd < 0) {
            perror("Ошибка accept()");
            continue;
        }

        // Читаем запрос от клиента
        read(client_fd, buffer, sizeof(buffer) - 1);
        printf("Получен запрос:\n%s\n", buffer);

        // Отправляем ответ
        const char *response = "HTTP/1.1 200 OK\r\n"
                               "Content-Type: text/plain\r\n"
                               "Content-Length: 14\r\n"
                               "\r\n"
                               "Hello, world!\n";
        send(client_fd, response, strlen(response), 0);

        // Закрываем соединение
        close(client_fd);
    }

    return 0;
}
