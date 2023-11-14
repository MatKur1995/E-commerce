// src/common/pipes/parse-optional-int.pipe.ts

import { PipeTransform, Injectable, BadRequestException } from '@nestjs/common';

@Injectable()
export class ParseOptionalIntPipe implements PipeTransform<string, number | undefined> {
    transform(value: string): number | undefined {
        if (value === undefined) {
            return undefined;
        }
        const val = parseInt(value, 10);
        if (isNaN(val)) {
            throw new BadRequestException('Validation failed');
        }
        return val;
    }
}
