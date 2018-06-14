import { Component } from '@angular/core';
import {
  LoadingModalService,
  LoadingGlobalService,
  LoadingInputService,
  LoadingLocalService
} from '@vox-loading';
@Component({
  selector: 'vox-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  public exempleC: string;

  public constructor(
    private loadingGlobalService: LoadingGlobalService,
    private loadingModalService: LoadingModalService,
    private loadingInputService: LoadingInputService,
    private loadingLocalService: LoadingLocalService
  ) {
    this.exempleC = 'exemplo-c';

    setTimeout(() => {
      this.loadingGlobalService.hide();
    }, 1500);
  }

  public global() {
    this.loadingGlobalService.show();
    setTimeout(() => {
      this.loadingGlobalService.hide();
    }, 1500);
  }

  public modal() {
    this.loadingModalService.show({title: 'optional title', message: 'optional message'});
    setTimeout(() => {
      this.loadingModalService.hide();
    }, 1500);
  }

  public local() {
    this.loadingLocalService.show('exemple-a');
    setTimeout(() => {
      this.loadingLocalService.hide('exemple-a');
    }, 1500);
  }

  public campoSucesso() {
    this.loadingInputService.show('exemple-b', 'optional text');
    setTimeout(() => {
      this.loadingInputService.hide('exemple-b', 'success', {success: 'optional success text'});
    }, 1500);
  }

  public campoErro() {
    this.loadingInputService.show(this.exempleC);
    setTimeout(() => {
      this.loadingInputService.hide(this.exempleC, 'error', {error: 'optional error text'});
    }, 1500);
  }
}
