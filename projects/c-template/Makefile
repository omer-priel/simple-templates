# variables

BIN_DIR=./bin
DIST_DIR=./dist

CC = gcc -Wall -g

# CI/CD
clean:
	rm -rf $(BIN_DIR) $(DIST_DIR)

# units
$(BIN_DIR):
	mkdir $(BIN_DIR)

$(DIST_DIR):
	mkdir $(DIST_DIR)

$(BIN_DIR)/example.o: $(BIN_DIR) src/example.c src/example.h
	$(CC) -o "$(BIN_DIR)/example.o" -c src/example.c

$(BIN_DIR)/main.o: $(BIN_DIR) src/main.c src/example.h
	$(CC) -o "$(BIN_DIR)/main.o" -c src/main.c

# applications
$(DIST_DIR)/main: $(DIST_DIR) $(BIN_DIR)/main.o $(BIN_DIR)/main.o $(BIN_DIR)/example.o
	$(CC) -o "$(DIST_DIR)/main" "$(BIN_DIR)/main.o" "$(BIN_DIR)/example.o"

# build
build: $(DIST_DIR)/main

rebuild: clean build

all: rebuild

# testing
test-memory-1: rebuild
	valgrind "$(DIST_DIR)/main"

test-memory-2: rebuild
	valgrind "$(DIST_DIR)/main" < inputs/input.txt