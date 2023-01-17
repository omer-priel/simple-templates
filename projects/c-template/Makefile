# variables

SRC_DIR=./src
BIN_DIR=./bin

CC = gcc -Wall

# CI/CD
clean:
	rm -rf $(BIN_DIR)

# units
$(BIN_DIR):
	mkdir $(BIN_DIR)

$(BIN_DIR)/example.o: $(BIN_DIR) $(SRC_DIR)/example.c $(SRC_DIR)/example.h
	$(CC) -o "$(BIN_DIR)/example.o" -c "$(SRC_DIR)/example.c"

$(BIN_DIR)/main.o: $(BIN_DIR) $(SRC_DIR)/main.c
	$(CC) -o "$(BIN_DIR)/main.o" -c "$(SRC_DIR)/main.c"

# applications
main: $(BIN_DIR)/main.o $(BIN_DIR)/main.o $(BIN_DIR)/example.o
	$(CC) -o main "$(BIN_DIR)/main.o" "$(BIN_DIR)/example.o"

# build
build: main

rebuild: clean main
