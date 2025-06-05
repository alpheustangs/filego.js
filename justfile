set shell := ["bash", "-cu"]
set windows-shell := ["powershell"]

node_bin := "./node_modules/.bin/"
tsc := node_bin + "tsc"
biome := node_bin + "biome"
tsup := node_bin + "tsup"
vitest := node_bin + "vitest"
typedoc := node_bin + "typedoc"

shared := "./packages/shared/"
js := "./packages/js/"
node := "./packages/node/"

test_shared := "./tests/shared/"
test_js := "./tests/js/"
test_node := "./tests/node/"

eap_node := "./examples/node/"
eap_web := "./examples/web/"

# Default action
_:
    just lint
    just fmt
    just build
    just test

# Install
i:
    pnpm install

# Setup the project
setup:
    brew install ls-lint typos-cli
    just i

# Lint with TypeScript Compiler
tsc:
    cd ./{{shared}} && ../../{{tsc}} --noEmit
    cd ./{{js}} && ../../{{tsc}} --noEmit
    cd ./{{node}} && ../../{{tsc}} --noEmit

# Lint code
lint:
    ls-lint
    typos
    just tsc

# Format code
fmt:
    ./{{biome}} check --write .

# Build packages
build:
    cd ./{{shared}} && ../../{{tsup}}
    cd ./{{js}} && ../../{{tsup}}
    cd ./{{node}} && ../../{{tsup}}

# Run tests
test:
    cd ./{{test_shared}} && ../../{{tsc}}
    cd ./{{test_js}} && ./{{vitest}} run
    cd ./{{test_node}} && ./{{vitest}} run

# Run tests with different runtimes
test-all:
    cd ./{{test_shared}} && ../../{{tsc}}
    cd ./{{test_js}} && pnpm run test
    cd ./{{test_node}} && pnpm run test
    cd ./{{test_js}} && deno run test
    cd ./{{test_node}} && deno run test
    cd ./{{test_js}} && bun run test
    cd ./{{test_node}} && bun run test

# Run benchmark
bench:
    cd ./bench && ./{{vitest}} bench --run

# Generate APIs documentation
api:
    cd ./{{shared}} && ../../{{typedoc}}
    cd ./{{js}} && ../../{{typedoc}}
    cd ./{{node}} && ../../{{typedoc}}

# Clean builds
clean:
    rm -rf ./{{eap_node}}/dist
    rm -rf ./{{eap_web}}/web/dist

    rm -rf ./{{shared}}/dist
    rm -rf ./{{js}}/dist
    rm -rf ./{{node}}/dist

    rm -rf ./{{test_shared}}/dist

clean-media:
    rm -rf ./bench/.media
    rm -rf ./{{test_node}}/.media

# Clean everything
clean-all:
    rm -rf ./node_modules

    rm -rf ./bench/node_modules

    rm -rf ./{{eap_node}}/node_modules
    rm -rf ./{{eap_web}}/node_modules

    rm -rf ./{{shared}}/node_modules
    rm -rf ./{{js}}/node_modules
    rm -rf ./{{node}}/node_modules

    rm -rf ./{{test_shared}}/node_modules
    rm -rf ./{{test_js}}/node_modules
    rm -rf ./{{test_node}}/node_modules

    just clean

    just clean-media
