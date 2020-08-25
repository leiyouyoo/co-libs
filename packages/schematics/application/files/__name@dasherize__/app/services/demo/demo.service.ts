import { Injectable } from '@angular/core';
import { PlatformJobDto, PlatformJobService as LibJobService } from '@co/cds';

@Injectable({
  providedIn: 'root',
})
export class JobService {
  constructor(private jobservice: LibJobService) {}

  getAll(params: {
    id?: string;
    TypeId?: string;
    searchText?: string;
    sorting?: string;
    maxResultCount?: number;
    skipCount?: number;
    isValid?: boolean;
  }) {
    return this.jobservice.getAll(params);
  }

  create(params: PlatformJobDto) {
    return this.jobservice.create(params);
  }

  update(params: PlatformJobDto) {
    return this.jobservice.update(params);
  }

  Delete(id: string) {
    return this.jobservice.delete({ id: id });
  }

  Recover(id: string) {
    return this.jobservice.recover({ id: id });
  }

  Cancel(id: string) {
    return this.jobservice.cancel({ id: id });
  }

  CheckedRepeat(name: string, nameLocalization: string, id: string) {
    return this.jobservice.checkedRepeat({ name: name, nameLocalization: nameLocalization, id: id });
  }
}
