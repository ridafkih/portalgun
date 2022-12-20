<div align="center">
  <h1>PortalGun</h1>
  <p>Create easy-to-use portals in React & React Native.</p>
  <p>This is PortalGun, an easy-to-use portal library that allows you to create portals, and render elements anywhere within your DOM under the `PortalGunProvider`. Get started in minutes.</p>
  	<span>
		<a href="#installation">Installation</a>
		<span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
		<a href="#usage">Usage</a>
		<span>&nbsp;&nbsp;·&nbsp;&nbsp;</span>
		<a href="#contribute">Contribute</a>
	</span>
</div>
<hr>

## Installation

To install `@ridafkih/portalgun`, simply use your favourite Node.js package manager.

```bash
yarn add @ridafkih/portalgun
```

```bash
npm install @ridafkih/portalgun
```

## Usage

```tsx
// ...
import { PortalGunProvider, createPortal } from "@ridafkih/portalgun";

const MyPortal = createPortal("unique-key");

const MyComponent = () => {
  const [value, setValue] = useState<boolean>(true);
  const text = value ? "Yay, value is true!" : "Unfortunately, value is false.";

  return (
    {/** Anything that goes in here will render in all corresponding `MyPortal.Out` */}
    <MyPortal.In>
      <Text>{text}</Text>
    </MyPortal.In>
  );
};

export const MyApp = () => {
  return (
    <PortalGunProvider>
      {/** This contains is defined above, and contains our `MyPortal.In` */}
      <MyComponent />
      {/** Content of `MyPortal.In` will display here. */}
      <MyPortal.Out />
    </PortalGunProvider>
  );
};
```

## Contribute

Feel free to contribute to the repository. Pull requests and issues with feature requests are _super_ welcome!
