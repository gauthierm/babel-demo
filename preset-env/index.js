const config = {
  foo: 'bar',
  baz: 'bop',
};

const modifiedConfig = {
  ...config,
  foo: 'baz',
};

class MyClass {
  constructor(title) {
    this._title = title;
  }

  get title() {
    return this._title;
  }
}

const myFunction = async (myConfig) => {
  setTimeout(() => {
    console.log('My function has run.', myConfig);
  }, 100);
};

myFunction(modifiedConfig);
