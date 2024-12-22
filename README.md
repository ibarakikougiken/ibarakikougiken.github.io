# ibarakikougiken.github.io

![Icon](./src/assets/images/favicon.png)

## 🚀 Quick start

### **Prerequisites**

- [Git](https://git-scm.com/downloads)
- [Nix package manager](https://nixos.org/download.html)

1.  **Clone the repository.**

    ```shell
    git clone https://github.com/ibarakikougiken/ibarakikougiken.github.io.git <YOUR_PROJECT_NAME>
    ```

2.  **Enter the environment.**

    ```shell
    cd <YOUR_PROJECT_NAME>
    nix develop
    ```

3.  **Install dependencies.**

    ```shell
    pnpm install
    ```

4.  **Start developing.**

    ```shell
    pnpm dev
    ```

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in an Astro project.

    .
    ├── .git
    ├── .vscode
    ├── public
    ├── scripts
    ├── src
    ├── .gitignore
    ├── .prettierignore
    ├── .prettierrc
    ├── astro.config.ts
    ├── package.json
    ├── pnpm-lock.yaml
    ├── README.md (this file)
    └── tsconfig.json

1.  `src/`: The source code of the site.
2.  `public/`: Static files that are copied to the root of the site.
3.  `astro.config.ts`: Configuration file for Astro.
4.  `scripts/`: Contains scripts to help with development.

## 🎓 Learning Astro

Looking for more guidance? Full documentation for Astro lives on the [website](https://docs.astro.build/ja/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                | Action                                           |
| :--------------------- | :----------------------------------------------- |
| `pnpm install`         | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |
| `pnpm format`          | Format your code with Prettier                   |
| `pnpm new article`     | Create a new article                             |
| `pnpm new news`        | Create a new news post                           |

## 🐛 Troubleshooting

### `pnpm: command not found`

If you see this error, it means you have not entered the environment.

Enter the environment with the following command:

```shell
nix develop
```

### `error: experimental Nix feature ... is disabled; use '--extra-experimental-features ...' to enable it`

If you see this error, you need to enable the experimental Nix features.

```shell
mkdir -p ~/.config/nix && \
echo "experimental-features = nix-command flakes" > ~/.config/nix/nix.conf
```

Then, restart the environment:

```shell
nix develop
```

### `error: path ‘/nix/store/...-source/flake.nix’ does not exist`

If you see this error, it means the `flake.nix` file is missing. You need to add it to the repository.

```shell
git add flake.nix
```

## 📚 Resources

- [Astro Documentation](https://docs.astro.build/ja/)

  The official documentation for Astro.

- [Icones](https://icones.js.org/collection/mdi)

  Search for icons to use `<Icon name="mdi:icon-name" />`.

## 📝 License

No license. All rights reserved under Japanese law.
