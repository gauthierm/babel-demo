interface ConfigInterface {
  [key: string]: string;
}

const config = {
  foo: 'bar',
  baz: 'bop',
};

const modifiedConfig = {
  ...config,
  foo: 'baz',
};

class MyClass {
  private _title: string;

  constructor(title: string) {
    this._title = title;
  }

  get title() {
    return this._title;
  }
}

const myFunction = async (myConfig: ConfigInterface) => {
  setTimeout(() => {
    console.log('My function has run.', myConfig);
  }, 100);
};

myFunction(modifiedConfig);
