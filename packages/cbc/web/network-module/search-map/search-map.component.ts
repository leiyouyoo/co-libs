import {
  Component,
  OnInit,
  Output,
  EventEmitter,
  forwardRef,
  Input,
  ViewChild,
  ElementRef,
  Injector,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { debounce } from '@co/core';
import { CoLocaleService, GoogleMapService } from '@co/common';
interface Option {
  placeId: string;
  name: string;
}
@Component({
  selector: 'app-search-map',
  templateUrl: './search-map.component.html',
  styleUrls: ['./search-map.component.less'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SearchMapComponent),
      multi: true,
    },
  ],
})
export class SearchMapComponent implements ControlValueAccessor, OnInit {
  @ViewChild('input', { static: true }) inputEl: ElementRef<HTMLInputElement>;
  @Output() showAddredd = new EventEmitter<any>();
  _country = '';
  @Input() set country(val: string) {
    if (val) {
      val = val.toLocaleLowerCase();
    }
    this._country = val;
  }
  get country(): string {
    return this._country;
  }
  @Input() fromType: string = 'netWork';
  inputMap = '';
  @Input() placeholder = '';
  autoCompleteList = [];
  onChange: (value: string | string[]) => void = () => null;
  onTouched: () => void = () => null;
  amapService: GoogleMapService;
  constructor(private injector: Injector,
              private coLocaleService: CoLocaleService,
  ) {
    this.amapService = this.injector.get(GoogleMapService);
  }

  ngOnInit() {}
  //搜索地图
  @debounce(500)
  searchMap() {
    // //输入提示
    this.updateValue(this.inputMap);
    let params = this.fromType == 'netWork' ? { components: `country:${this.country}` } : {};
    this.amapService
      .autocomplete(
        this.inputMap,
        this.coLocaleService.locale.abbr ? this.coLocaleService.locale.abbr.split('-')[0] : 'en',
        params,
      )
      .subscribe((res) => {
        let List = res.predictions;
        let maplist = List.map((map) => {
          return {
            name: map.description,
            id: map.description,
            streetAddress: map.description,
            key: map.id,
            placeId: map.place_id,
            isFromMap: true,
          };
        });
        this.autoCompleteList = maplist;
      });
  }
  compareFun = (o1: Option | string, o2: Option) => {
    if (o1) {
      return typeof o1 === 'string' ? o1 === o2.name : o1.placeId === o2.placeId;
    } else {
      return false;
    }
  };
  updateValue(val) {
    this.onChange(val);
    this.writeValue(val);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  writeValue(obj: any): void {
    this.inputMap = obj;
  }
}
