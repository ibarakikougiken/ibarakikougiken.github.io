{
  description = "Node environment";

  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }: 
    flake-utils.lib.eachDefaultSystem (system:
      let
        packages = nixpkgs.legacyPackages.${system};
      in
      {
        devShells.default = packages.mkShell {
          buildInputs = with packages; [
            git
            nodejs_23
            nodejs_23.pkgs.pnpm
          ];

          pure = true;

          shellHook = ''
            echo "Node.js development environment activated"
            echo "Node.js version: $(node --version)"
            echo "pnpm version: $(pnpm --version)"
            git submodule update --remote
          '';
        };
      }
    );
}