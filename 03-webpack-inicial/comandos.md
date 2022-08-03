npm init 
comenzar el proyecto
npm run build
Link [Getting Started](https://webpack.js.org/guides/getting-started/#root "Link").
Link [Getting Started](https://webpack.js.org/guides/getting-started/#root "Link").
```
mkdir webpack-demo
cd webpack-demo
npm init -y
npm install webpack webpack-cli --save-dev
```


## Configuración
[Configuración](https://webpack.js.org/configuration/
)
## html loader
[html-loader](https://webpack.js.org/loaders/html-loader/)

## html-webpack-plugin
[html-webpack-plugin](https://webpack.js.org/plugins/html-webpack-plugin/)

## Dev Server
[Dev-Server](https://webpack.js.org/configuration/dev-server/)
```
npm i -D webpack-dev-server
```

## Style-loader 

[Style-loader ](https://webpack.js.org/loaders/style-loader/)

## Css loader
[Css-Loader](https://webpack.js.org/loaders/css-loader/)

```
npm install --save-dev css-loader style-loader
```
## MiniCssExtractPlugin
[MiniCssExtractPlugin](https://webpack.js.org/plugins/mini-css-extract-plugin/
)

## Imagenes
[Imagenes](https://v4.webpack.js.org/loaders/file-loader/)
```
npm install file-loader --save-dev
```
## CopyWebpackPlugin
[CopyWebpackPlugin](https://webpack.js.org/plugins/copy-webpack-plugin/#root)
```
npm install copy-webpack-plugin --save-dev
```
Para producción
```
npm i -D css-minimizer-webpack-plugin terser-webpack-plugin
```
## Babel
1. Página Oficial
```
https://babeljs.io/setup#installation
```
2. Luego instalamos 
```
npm install --save-dev babel-loader @babel/core
npm install @babel/preset-env --save-dev
```

