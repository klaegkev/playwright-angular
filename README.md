you can find a preconfigured monorepo with the above steps under ./angular-monorepo:

Steps to reproduce:

1) create a new NX monorepo with angular
```
npx create-nx-workspace@latest angular-monorepo --preset=angular-monorepo
```
2) add a new angular-lib
```
npx nx g @nx/angular:library test-lib
```
3) export a const in the new test-lib and export it with /test-lib/index.ts
4) import const in playwright test via typescript path-alias:
```
import { testConst } from '@angular-monorepo/test-lib';
```
5) Start playwright Tests. You will receive the error:
```
SyntaxError: Cannot use import statement outside a module
```
