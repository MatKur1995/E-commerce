// other.module.ts
import { Module, forwardRef } from '@nestjs/common';
import { BasketModule } from './basket.module';
// ... reszta twoich importów

@Module({
  imports: [
    forwardRef(() => BasketModule), // Jeśli BasketModule importuje OtherModule
    // ... inne importy
  ],
  // ... providers, controllers, etc.
})
export class OtherModule {}
