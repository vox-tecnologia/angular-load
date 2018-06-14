import { Component, OnInit, OnDestroy, Input, OnChanges } from '@angular/core';

import { Subscription } from 'rxjs/Subscription';

import { LoadingLocalService } from './loading-local.service';

@Component({
  selector: 'vox-loading-local',
  templateUrl: './loading-local.component.html',
  styleUrls: ['./loading-local.component.css']
})
export class LoadingLocalComponent implements OnInit, OnChanges, OnDestroy {

  @Input() public name: string;
  @Input() public initialStatus: 'show' | undefined;
  public show: boolean;
  private _subscription: Subscription;

  constructor(private loadingLocalService: LoadingLocalService) {
  }

  ngOnInit(): void {
    this._subscription = this.loadingLocalService.loaderState.subscribe(
      (state) => this.show = this.checaNome(state) ? state.show : this.show
    );
  }

  ngOnChanges() {
    if (!!this.initialStatus && this.initialStatus !== 'show') {
      throw new Error('property "initialStatus" can bem only set to "show"');
    }
    this.show = this.initialStatus === 'show' ? true : false;
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  private checaNome(state) {
    return this.name === state.name;
  }
}
