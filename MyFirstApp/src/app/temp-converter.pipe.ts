import { templateJitUrl } from "@angular/compiler";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe ({
    name: 'tempConverter'
})

export class TemperatureConverterPipe implements PipeTransform {
    transform(value: any, unit: string) {
        if(value && !isNaN(value)) {
            if(unit === 'C') {
                var temperature = (value - 32) / 1.8;
                return temperature.toFixed(2);
            }else if(unit === 'F') {
                var temperature = (value * 1.8) + 32;
                return temperature.toFixed(2);
            }
        }
       return null;
    }
    
}