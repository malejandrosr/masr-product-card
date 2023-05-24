# AS-Product-Card

Este es un paquete de pruebas de despliegue en NPM

### Alejandro Salgado

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from "as-product-card";

<ProductCard
    product={product}
    initialValues={{
        count: 2,
        maxCount: 10,
    }}
>
    {({ count, maxCount, reset, increaseBy, isMaxCountReached }) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
        </>
    )}
</ProductCard>
```
