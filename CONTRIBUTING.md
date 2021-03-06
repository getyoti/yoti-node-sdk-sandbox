# Contributing

After cloning the repository, run `npm install` to install dependencies.

## Testing

Running the tests:

```shell
npm test
```

To test a Node.js version. install [nvm](https://github.com/creationix/nvm) and run the following command:

```shell
nvm use <version> && npm test
```

## Code coverage

Please check the code coverage before submitting new code by opening the generated [Istanbul](https://istanbul.js.org/) files:

 ```shell
 open coverage/lcov-report/index.html
 ```

## Style guide

The JavaScript style guide is configured in the [.eslintrc.js](.eslintrc.js) file and can be verified by running:

```shell
npm run lint
```
