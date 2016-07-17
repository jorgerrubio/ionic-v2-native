import { Component } from '@angular/core';
import { NavController, Nav } from 'ionic-angular';

import { CamaraPage } from '../camara/camara';

@Component({
  	templateUrl: 'build/pages/home/home.html',
})
export class HomeApp {

	pages: Array<{title: string, native: any}>;

  	constructor(
		private navController: NavController,
		private nav: Nav
	) {
		this.pages = [
      		{ title: 'Camera', native: CamaraPage }
    	];
  	}

	openPage(page) {
		console.log(page);
    	this.nav.push( page.native );
  	}

}
