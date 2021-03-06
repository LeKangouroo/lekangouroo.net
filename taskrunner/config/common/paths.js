export default {
  sources: {
    html: {
      default: [
        "!src/html/_includes{,/**}",
        "src/html/**/*.html"
      ],
      directory: "src/html",
      watch: "src/**/*.html"
    },
    images: "src/**/*.{jpg,png,gif}",
    js: {
      default: "src/js/*.js",
      watch: [
        "src/**/*.js"
      ]
    },
    sass: {
        default: "src/sass/*.scss",
        watch: "src/**/*.scss"
    },
    svg: "src/assets/images/icons/svg/*.svg",
    todos: [
      "!src/vendors/**",
      "src/**/*.{js,jsx,html,scss,sass}"
    ]
  },
  builds: {
    css: {
      development: "tmp/css",
      distributable: "dist/css"
    },
    html: {
      development: "tmp",
      distributable: "dist"
    },
    images: {
      development: "tmp",
      distributable: "dist"
    },
    js: {
      development: "tmp/js",
      distributable: "dist/js"
    },
    svg: {
      development: "tmp/assets/images/sprites",
      distributable: "dist/assets/images/sprites"
    },
    todos: {
      development: "tmp",
      distributable: "dist"
    }
  },
  staticFiles: {
    base: "src",
    source: [
      "!src/**/*.{jpg,png,gif}",
      "src/assets/**",
      "src/vendors/**"
    ],
    destination: "dist"
  }
}
