import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'canFly',
})
export class CanflyPipe implements PipeTransform {
  public gender: 'male' | 'female' = 'male';

  transform(value: boolean): 'vuela' | 'no vuela' {
    return value ? 'vuela' : 'no vuela';
  }
}
